package com.enigma.impl;

import com.enigma.constant.MessageConstant;
import com.enigma.dao.StorageDao;
import com.enigma.exeption.CapacityNotEnoughException;
import com.enigma.exeption.ItemTypeNotFoundException;
import com.enigma.model.Item;
import com.enigma.model.Storage;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StorageDaoImpl implements StorageDao {
    Map<Integer, Storage> storageRoom = new HashMap<>();
    private Integer capacity;

    public StorageDaoImpl(Integer capacity) {
        this.capacity = capacity;
    }

    @Override
    public String createStorageRoom() {
        for (int room=1; room<= this.capacity; room++){
            storageRoom.put(room, null);
        }
        return String.format(MessageConstant.STORAGE_ROOM, this.capacity);
    }

    @Override
    public String setStorageRoom(Integer room, Integer capacity, String...items) {
        StringBuilder string = new StringBuilder();
        Integer counter = 0;
        for (Map.Entry<Integer, Storage> stores : storageRoom.entrySet()) {
            if (room.equals(stores.getKey())) {
                List<Item> extractListItem = extractItems(items);
                storageRoom.put(stores.getKey(), new Storage(capacity, extractListItem));
                for (Item item : extractListItem) {
                    counter++;
                    string.append(item.getItemType());
                    if (counter < items.length) {
                        string.append(", ");
                    }
                }
                return String.format(MessageConstant.SET_STORAGE_ROOM_SUCCES, stores.getKey(),
                        this.capacity, string.toString());
            }
        }
        return string.toString();
        }

    private List<Item> extractItems(String...items) {
        List<Item> listItem = new ArrayList<>();
        for (String item : items) {
            listItem.add(new Item(item, 0));
        }
        return listItem;
    }

    @Override
    public String report() {
        StringBuilder string = new StringBuilder();
        for (Map.Entry<Integer, Storage> stores : storageRoom.entrySet()) {
//            if ()
        }
        return null;
    }

    @Override
    public String store(Integer room, Integer amount, String item) {
        StringBuilder string = new StringBuilder();
        Integer counter = 0;
        for (Map.Entry<Integer, Storage> stores : storageRoom.entrySet()) {
            if (stores.getKey().equals(room)) {
//                List<Item> extractListItem = extractItems(items);
                for (Item itemStore : stores.getValue().getItems()){
                    if (itemStore.getItemType().equals(item)){
                        itemStore.setAmount(amount);
//                        storageRoom

                    } if (itemStore.getAmount() > this.capacity) {
                        throw new CapacityNotEnoughException(room, item, amount);
                    }
                }
                return String.format(MessageConstant.CREATE_STORE_SUCCES, amount, item, room);
            }
        }

        throw new ItemTypeNotFoundException(item, room);
    }

    @Override
    public String take(Integer room,String item, Integer amount) {
        return null;
    }
}
