package com.enigma.exeption;

public class CapacityNotEnoughException extends RuntimeException {
//    public CapacityNotEnoughException(){
//        super("Sorry, not enough capacity to store posters to room");
//    }
    public CapacityNotEnoughException(Integer room, String item, Integer amount) {
        super(String.format("Sorry, not enough capacity to store %d %s to room %d",amount, item, room ));
    }
}
