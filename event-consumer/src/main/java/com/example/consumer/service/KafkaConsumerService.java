package com.example.consumer.service;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.example.consumer.model.UserEvent;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class KafkaConsumerService {

    private final List<UserEvent> events = new CopyOnWriteArrayList<>();

    @KafkaListener(topics = "user.activity", groupId = "event-group")
    public void consume(String message) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        UserEvent event = mapper.readValue(message, UserEvent.class);
        events.add(event);
        System.out.println("Consumed: " + event);
    }

    public List<UserEvent> getEvents() {
        return events;
    }
}
