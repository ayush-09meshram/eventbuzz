package com.stackroute.config;
import com.fasterxml.jackson.databind.JsonDeserializer;

import com.stackroute.domain.Show;

import org.apache.kafka.clients.consumer.ConsumerConfig;

import org.apache.kafka.common.serialization.StringDeserializer;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;

import org.springframework.kafka.annotation.EnableKafka;

import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;

import org.springframework.kafka.core.ConsumerFactory;

import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

import java.util.HashMap;

import java.util.Map;





@Configuration

@EnableKafka

public class KafkaConsumerConfig {



    @Bean

    public ConsumerFactory<String,Object> consumerFactory(){

        Map<String,Object> configs = new HashMap<>();

        configs.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,"172.23.239.149:9092");

        configs.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);

        configs.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,StringDeserializer.class);

        configs.put(ConsumerConfig.GROUP_ID_CONFIG,"kafkashowjson");

        return new DefaultKafkaConsumerFactory<>(configs);

    }



    @Bean

    public ConcurrentKafkaListenerContainerFactory<String,Object> kafkaListenerContainerFactory(){

        ConcurrentKafkaListenerContainerFactory<String,Object> factory = new ConcurrentKafkaListenerContainerFactory<>();

        factory.setConsumerFactory(consumerFactory());

        return factory;

    }







    @Bean

    public ConsumerFactory<String, Show> showConsumerFactory(){

        Map<String,Object> configs = new HashMap<>();

        configs.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,"172.23.239.149:9092");

        configs.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);

        configs.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);

        configs.put(ConsumerConfig.GROUP_ID_CONFIG,"kafkashowjson");

        return new DefaultKafkaConsumerFactory<>(configs,new StringDeserializer(),new org.springframework.kafka.support.serializer.JsonDeserializer<>((Show.class)));

    }



    @Bean

    public ConcurrentKafkaListenerContainerFactory<String, Show> kafkaShowListenerContainerFactory(){

        ConcurrentKafkaListenerContainerFactory<String,Show> factory =new ConcurrentKafkaListenerContainerFactory<>();

        factory.setConsumerFactory(showConsumerFactory());

        return factory;

    }

}