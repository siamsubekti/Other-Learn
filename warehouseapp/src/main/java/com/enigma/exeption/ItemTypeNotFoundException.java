package com.enigma.exeption;

public class ItemTypeNotFoundException extends RuntimeException {
//    public ItemTypeNotFoundException(){
//        super("Sorry, %s not found in room %d");
//    }
    public ItemTypeNotFoundException(String item, Integer room) {
        super(String.format("Sorry, %s not found in room %d", item, room));
    }
}
