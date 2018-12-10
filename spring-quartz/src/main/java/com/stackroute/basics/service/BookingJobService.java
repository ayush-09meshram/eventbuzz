package com.stackroute.basics.service;

import com.stackroute.domain.ScheduleStopping;
import com.stackroute.domain.Show;
import org.apache.kafka.common.protocol.types.Field;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class BookingJobService {

    private Logger logger = LoggerFactory.getLogger(getClass());

    private Show show;


    @KafkaListener(groupId = "showconsumer",topics="kafkashowjson",containerFactory ="kafkaShowListenerContainerFactory")
    public Show getShow(@Payload Show show){
        logger.info("in kafka listner");
        logger.info("show json{}",show);
        this.show=show;
        return show;
    }

    public List<Date> getShowTimings(){

        List<Date> showTimings=new ArrayList<>();
        List<String> timings = new ArrayList<>();
        for(int i =0;i<show.getMovies().size();i++) {
            for (int j = 0; j < show.getMovies().get(i).getTheatres().size(); j++) {
                for (int k = 0; k < show.getMovies().get(i).getTheatres().get(j).getTimings().size(); k++) {
                    timings.add(show.getMovies().get(i).getTheatres().get(j).getTimings().get(k).getShowTime());
                }
            }
        }

        for(int i=0;i<timings.size();i++){
//            logger.info(timings.get(i));
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
            LocalDateTime ldt = LocalDateTime.parse(timings.get(i), formatter);
            LocalDateTime now = ldt.minusMinutes(30);
            Instant instant = now.atZone(ZoneId.systemDefault()).toInstant();
            Date runTime = Date.from(instant);
            showTimings.add(runTime);
        }
        for(int i=0;i<showTimings.size();i++){
//            logger.info("{}",showTimings.get(i));
        }
        return showTimings;

    }

    public List<ScheduleStopping> getScheduleStopping(){

        List<ScheduleStopping> schdStop=new ArrayList<>();
        for(int i =0;i<show.getMovies().size();i++) {
            for (int j = 0; j < show.getMovies().get(i).getTheatres().size(); j++) {
                for (int k = 0; k < show.getMovies().get(i).getTheatres().get(j).getTimings().size(); k++) {
                    ScheduleStopping  scheduleStopping=new ScheduleStopping();
                    scheduleStopping.setTheatreId(show.getMovies().get(i).getTheatres().get(j).getTheatreId());
                    scheduleStopping.setShowId(show.getMovies().get(i).getTheatres().get(j).getTimings().get(k).getShowId());
                    scheduleStopping.setShowTiming(show.getMovies().get(i).getTheatres().get(j).getTimings().get(k).getShowTime());
                    scheduleStopping.setMessage("stop booking");

                    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
                    LocalDateTime ldt = LocalDateTime.parse(scheduleStopping.getShowTiming(), formatter);
                    LocalDateTime now = ldt;
                    LocalDateTime ldt2 = now.minusMinutes(30);
                    Instant instant = ldt2.atZone(ZoneId.systemDefault()).toInstant();
                    Date runTime = Date.from(instant);
                    scheduleStopping.setBookingStopTiming(runTime);
                    schdStop.add(scheduleStopping);
                }
            }
        }
        return schdStop;
    }

    public void executeBookingJob() {

        logger.info("The booking job has begun...");

        try {
            Thread.sleep(5000);

        } catch (InterruptedException e) {
            logger.error("Error while executing booking job", e);
        } finally {
            logger.info("Booking job has finished...");
        }
    }
}
