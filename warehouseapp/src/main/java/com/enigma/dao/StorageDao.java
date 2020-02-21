package com.enigma.dao;

import com.enigma.model.Item;
import com.enigma.model.Storage;

public interface StorageDao {
    public String createStorageRoom();
    public String setStorageRoom(Integer room,Integer capacity, String...item);
    public String report();
    public String store(Integer room, Integer capacity, String item);
    public String take(Integer room, String item , Integer amount);
}
