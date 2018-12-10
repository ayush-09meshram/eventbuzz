package com.stackroute.configuration;

import com.fasterxml.jackson.databind.JsonDeserializer;

import com.stackroute.domain.User;

import org.apache.kafka.clients.consumer.ConsumerConfig;

import org.apache.kafka.common.serialization.StringDeserializer;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;

import org.springframework.kafka.annotation.EnableKafka;

import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;

import org.springframework.kafka.core.ConsumerFactory;

import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

import org.springframework.kafka.support.converter.StringJsonMessageConverter;



import java.util.HashMap;

import java.util.Map;

@Configuration

@EnableKafka

public class KafkaConsumerConfig {



    @Bean

    public ConsumerFactory<String,Object> consumerFactory(){

        Map<String,Object> configs = new HashMap<>();

        configs.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,"172.23.239.91:9092");

        configs.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);

        configs.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,StringDeserializer.class);

        configs.put(ConsumerConfig.GROUP_ID_CONFIG,"userconsumer");

        return new DefaultKafkaConsumerFactory<>(configs);

    }



    @Bean

    public ConcurrentKafkaListenerContainerFactory<String,Object> kafkaListenerContainerFactory(){

        ConcurrentKafkaListenerContainerFactory<String,Object> factory = new ConcurrentKafkaListenerContainerFactory<>();

        factory.setConsumerFactory(consumerFactory());

        return factory;

    }







    @Bean

    public ConsumerFactory<String, User> theatreConsumerFactory(){

        Map<String,Object> configs = new HashMap<>();

        configs.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,"172.23.239.91:9092");

        configs.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);

        configs.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);

        configs.put(ConsumerConfig.GROUP_ID_CONFIG,"userconsumer");

        return new DefaultKafkaConsumerFactory<>(configs,new StringDeserializer(),new org.springframework.kafka.support.serializer.JsonDeserializer<>((User.class)));

    }



    @Bean

    public ConcurrentKafkaListenerContainerFactory<String, User> kafkaUserListenerContainerFactory(){

        ConcurrentKafkaListenerContainerFactory<String,User> factory =new ConcurrentKafkaListenerContainerFactory<>();

        factory.setConsumerFactory(theatreConsumerFactory());

        return factory;

    }

}