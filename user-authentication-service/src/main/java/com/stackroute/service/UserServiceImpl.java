package com.stackroute.service;

import com.stackroute.domain.User;
import com.stackroute.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByuserId(email);
    }

    /*Kafka Listener*/
   @KafkaListener(groupId = "kafkauserconsumer", topics = "login1", containerFactory = "kafkaUserListenerContainerFactory")
    public void getUserFrmTopic(@Payload User user) {
        userRepository.save(user);
    }
}
