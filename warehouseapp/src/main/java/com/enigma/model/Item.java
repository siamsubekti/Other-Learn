package com.enigma.model;

import java.util.Objects;

public class Item {
    private String itemType;
    private Integer amount;

    public Item(String itemType, Integer amount) {
        this.itemType = itemType;
        this.amount = amount;
    }

    public Item() {
    }

    public Item(String item) {
        this.itemType = item;
    }


    public String getItemType() {
        return itemType;
    }

    public void setItemType(String itemType) {
        this.itemType = itemType;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Item item = (Item) o;
        return Objects.equals(itemType, item.itemType) &&
                Objects.equals(amount, item.amount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(itemType, amount);
    }
}
