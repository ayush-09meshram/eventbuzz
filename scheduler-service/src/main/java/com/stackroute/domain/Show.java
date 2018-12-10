package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


public class Show {

    private String cityName;
    private List<Movie> movies;

    public Show( ){
    }

    public Show(String cityName, List<Movie> movies) {
        this.cityName = cityName;
        this.movies = movies;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }

    @Override
    public String toString() {
        return "Show{" +
                "cityName='" + cityName + '\'' +
                ", movies=" + movies +
                '}';
    }
}
