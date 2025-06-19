package com.example.consumer.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.consumer.model.UserEvent;
import com.example.consumer.service.KafkaConsumerService;

@RestController
@RequestMapping("/events")
public class EventController {

    private final KafkaConsumerService service;

    public EventController(KafkaConsumerService service) {
        this.service = service;
    }

    @GetMapping
    public List<UserEvent> getEvents() {
        return service.getEvents();
    }
}
