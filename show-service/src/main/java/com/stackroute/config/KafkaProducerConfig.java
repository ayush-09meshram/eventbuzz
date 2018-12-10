package com.stackroute.config;

import com.stackroute.domain.Show;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class KafkaProducerConfig {

        @Bean
        public ProducerFactory<String,Show> producerFactory(){
            Map<String,Object> configs = new HashMap<>();
            configs.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG,"localhost:9092");
            configs.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
            configs.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);

            return new DefaultKafkaProducerFactory<String,Show>(configs);
        }

        @Bean
        public KafkaTemplate<String, Show> kafkaTemplate(){
            return new KafkaTemplate<>(producerFactory());
        }
}
