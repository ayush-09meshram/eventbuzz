package com.stackroute.domain;

import java.util.Date;

public class ScheduleStopping {
    private String showId;
    private int theatreId;
    private String showTiming;
    private String message;
    private Date bookingStopTiming;

    public ScheduleStopping() {
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

    public Date getBookingStopTiming() {
        return bookingStopTiming;
    }

    public void setBookingStopTiming(Date bookingStopTiming) {
        this.bookingStopTiming = bookingStopTiming;
    }

    public ScheduleStopping(String showId, int theatreId, String showTiming, String message, Date bookingStopTiming) {
        this.showId = showId;
        this.theatreId = theatreId;
        this.showTiming = showTiming;
        this.message = message;
        this.bookingStopTiming = bookingStopTiming;
    }

    @Override
    public String toString() {
        return "ScheduleStopping{" +
                "showId='" + showId + '\'' +
                ", theatreId=" + theatreId +
                ", showTiming='" + showTiming + '\'' +
                ", message='" + message + '\'' +
                ", bookingStopTiming=" + bookingStopTiming +
                '}';
    }
}
