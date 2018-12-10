//package com.stackroute.resource;
//
//import com.stackroute.domain.ScheduleStopping;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
//import org.springframework.kafka.core.KafkaTemplate;
//import org.springframework.stereotype.Service;
//
//@Service
//public class KafkaResourceImplementation implements KafkaResource {
//    @Autowired
//
//    private KafkaTemplate<String, ScheduleStopping> kafkaTemplate;
//
//
//
//    @Autowired
//
//    private KafkaProperties kafkaProperties;
//
//
//
//    public void postData(ScheduleStopping scheduleStopping)
//
//    {
//
//        kafkaTemplate.send(kafkaProperties.getOutputTopic(),scheduleStopping);
//
//    }
//}
