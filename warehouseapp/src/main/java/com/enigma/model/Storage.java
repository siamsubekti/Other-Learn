package com.enigma.model;

import java.util.List;
import java.util.Objects;

public class Storage {
    private Integer capacity;
    private List<Item> items;

    public Storage(Integer capacity, List<Item> items) {
        this.capacity = capacity;
        this.items = items;
    }

    public Storage() {
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Storage storage = (Storage) o;
        return Objects.equals(capacity, storage.capacity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(capacity);
    }
}
