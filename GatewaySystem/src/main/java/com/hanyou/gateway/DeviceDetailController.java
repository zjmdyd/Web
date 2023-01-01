package com.hanyou.gateway;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/operateEvent")

public class DeviceDetailController {
    @RequestMapping("/openDoor")
    public boolean openDoor(){
        return true;
    }
}
