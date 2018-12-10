package com.stackroute.domain;

import java.util.Date;

public class ScheduleStopping {
    private String city;
    private String movie;
    private String showId;
    private int theatreId;
    private String showTiming;
    private String message;

    public ScheduleStopping() {
    }

    public ScheduleStopping(String city, String movie, String showId, int theatreId, String showTiming, String message) {
        this.city = city;
        this.movie = movie;
        this.showId = showId;
        this.theatreId = theatreId;
        this.showTiming = showTiming;
        this.message = message;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public String getShowId() {
        return showId;
    }

    public void setShowId(String showId) {
        this.showId = showId;
    }

    public int getTheatreId() {
        return theatreId;
    }

    public void setTheatreId(int theatreId) {
        this.theatreId = theatreId;
    }

    public String getShowTiming() {
        return showTiming;
    }

    public void setShowTiming(String showTiming) {
        this.showTiming = showTiming;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "ScheduleStopping{" +
                "city='" + city + '\'' +
                ", movie='" + movie + '\'' +
                ", showId='" + showId + '\'' +
                ", theatreId=" + theatreId +
                ", showTiming='" + showTiming + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
