package com.hanyou.gateway;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static com.hanyou.gateway.utils.*;

@RestController
@RequestMapping("/searchAction")

public class SearchDeviceController {

    @RequestMapping("/shake")
    public void shake(@RequestParam("ip") String ip) throws Exception {
        Date date = new Date();
        System.out.println(date.getTime());
        int time = (int)(System.currentTimeMillis()/1000);
        byte[] timeBytes = intToBytes(time);
        // 握手
        writeData(ip,(byte) 0x01, timeBytes);
    }

    public void writeData(String ip,byte command, byte[] data) throws Exception {
        short dataLen = (short) (data.length + 2);  // 包长:指令+数据+校验
        byte[] endBytes = new  byte[dataLen + 3];   // 总长度:包头+长度+数据+包尾
        endBytes[0] = (byte) 0xaa;
        endBytes[1] = (byte) dataLen;
        endBytes[2] = command;
        for (int i = 0; i < data.length; i++) {
            endBytes[3 + i] = data[i];
        }
        endBytes[3+data.length] = checkoutLen(endBytes, endBytes.length - 2);     // 校验位
        endBytes[3+data.length+1] = 0x55;   // 包尾
        System.out.println("************");
        System.out.println("************");

        // 发送消息
        SocketThread socketThread = StartServer.SOCKET_MAP.get(ip);
        if(socketThread == null){
            System.out.println("ip地址["+ip+"]未连接");
        }else{
            socketThread.getOutputStream().write(endBytes);
        }
    }

    @RequestMapping("/search")
    public JSONObject searchDevice() {
        System.out.println("正在搜索设备...");
        JSONObject obj = new JSONObject();
        obj.put("int", 2);
        obj.put("boolean", true);
        List<Integer> integers = Arrays.asList(1, 2, 3);
        obj.put("list", integers);

        return obj;
    }

    @RequestMapping("/test")
    public String test(@RequestParam("name") String name, @RequestParam("url") String url) {
        System.out.println(name + url);

        return "OK";
    }
}
