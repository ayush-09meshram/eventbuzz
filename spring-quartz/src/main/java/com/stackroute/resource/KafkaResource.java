package com.stackroute.resource;

import com.stackroute.domain.ScheduleStopping;

public interface KafkaResource {
    public void postData(ScheduleStopping scheduleStopping);
}
