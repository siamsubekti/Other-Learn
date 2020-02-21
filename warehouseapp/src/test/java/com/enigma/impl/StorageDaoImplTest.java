package com.enigma.impl;

import com.enigma.constant.MessageConstant;
import com.enigma.dao.StorageDao;
import com.enigma.model.Item;
import com.enigma.model.Storage;
import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

public class StorageDaoImplTest {

    @Test
    public void should_able_to_create_storage_room() {
        Integer expectedCapacity = 1;
        Integer expectedRoom = 1;
        String expectedStringResult = String.format(MessageConstant.STORAGE_ROOM, expectedRoom);
        StorageDao storageDao = new StorageDaoImpl(expectedCapacity);
        String actualStringResult = storageDao.createStorageRoom();
        Assert.assertEquals(expectedStringResult, actualStringResult);
    }

    @Test
    public void should_able_to_set_storage_room_when_given_capacity_one() {
        StringBuilder builder = new StringBuilder();
        Integer expectedCapacity = 10;
        Integer expectedRoom = 1;
        Integer actualCapacity = 10;
        Integer actualRoom = 1;
        StorageDao storageDao = new StorageDaoImpl(expectedCapacity);
        storageDao.createStorageRoom();
        String expectedStringResult = builder.append(String.format(MessageConstant.SET_STORAGE_ROOM_SUCCES, expectedRoom, expectedCapacity, "weapon, amunnitions")).toString();
        String actualStringResult = storageDao.setStorageRoom(actualRoom,actualCapacity, "weapon", "amunnitions");
        Assert.assertEquals(expectedStringResult, actualStringResult);
    }

    @Test
    public void store_should_to_set_amount_of_goods_in_the_store_room() {
        Integer expectedCapacity = 10;
        Integer expectedRoom = 1;
        Integer expectedAmount = 5;
        Integer expectedMedics = 1;
        Integer actualCapacity = 10;
        Integer actualRoom = 1;
        Integer actualAmount = 15;
        StorageDao storageDao = new StorageDaoImpl(expectedCapacity);
        storageDao.createStorageRoom();
        storageDao.setStorageRoom(actualRoom, actualCapacity,"amount");
        String expectedStringResult = String.format(MessageConstant.CREATE_STORE_SUCCES,expectedAmount,"amount",expectedMedics,"medics", expectedRoom);
        String actualStringResult = storageDao.store(actualRoom, actualAmount, "amount");
        Assert.assertEquals(expectedStringResult, actualStringResult);
    }

//    @Test
//    public void

//    @Test
//    public void set_storage_should_return_message_cannot_find_set_storage(){
//        StringBuilder builder = new StringBuilder();
//        Integer expectedCapacity = 10;
//        Integer expectedRoom = 1;
//        Integer actualCapacity = 10;
//        Integer actualRoom = 1;
//        StorageDao storageDao = new StorageDaoImpl(expectedCapacity);
//        storageDao.createStorageRoom();
//        String expectedStringResult = String.format(MessageConstant.SET_STORAGE_ROOM_FAIL);
//        String actualStringResult = storageDao.setStorageRoom(actualRoom,actualCapacity, "weapon", "amunniti");
//        Assert.assertEquals(expectedStringResult, actualStringResult);
//    }
}