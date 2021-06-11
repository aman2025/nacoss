package com.alibaba.nacos.config.server.model;

public class Music {
    private String name;
    private int songCount;

    public Music() {
    }

    public Music(String name, int songCount) {
        this.name = name;
        this.songCount = songCount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSongCount() {
        return songCount;
    }

    public void setSongCount(int songCount) {
        this.songCount = songCount;
    }

    @Override
    public String toString() {
        return "Music{" +
            "name='" + name + '\'' +
            ", songCount=" + songCount +
            '}';
    }
}
