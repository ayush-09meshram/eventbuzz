package com.stackroute.basics.scheduler;

import com.stackroute.basics.service.BookingJobService;
import com.stackroute.domain.ScheduleStopping;
import com.stackroute.domain.Show;
import org.apache.kafka.common.internals.Topic;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public class BookingJob implements Job {
    Logger logger = LoggerFactory.getLogger(BookingJob.class);
    Show show;

    @Autowired
    private BookingJobService bookingJobService;


    public void execute(JobExecutionContext context) throws JobExecutionException {

        try {
            List<Date> runTime=bookingJobService.getShowTimings();
            for (int i = 0; i < runTime.size(); i++) {
                logger.info("booking stop timings {}", bookingJobService.getScheduleStopping().get(i).getShowTiming());


                logger.info("Job ** {} ** fired @ {} for show {}", context.getJobDetail().getKey().getName(), bookingJobService.getScheduleStopping().get(i).getShowTiming(), bookingJobService.getScheduleStopping().get(i));
                bookingJobService.executeBookingJob();

                if (i < runTime.size() - 1) {
                    logger.info("Next job scheduled @ {}", bookingJobService.getScheduleStopping().get(i+1).getShowTiming());
                }
            }
        }
        catch (Exception e){
            logger.error("Error while executing booking job", e);
        }


    }
}
