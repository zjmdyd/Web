package com.hanyou.gateway;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.HashMap;
import java.util.concurrent.ConcurrentHashMap;

import static com.hanyou.gateway.utils.byteArrayToHexStr;

@Component
public class StartServer implements ApplicationRunner {
    //保存所有的socket连接
    public static ConcurrentHashMap<String,SocketThread> SOCKET_MAP = new ConcurrentHashMap<String,SocketThread>();

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // 监听指定的端口
        int port = 2020;
        ServerSocket server = new ServerSocket(port);
        // server将一直等待连接的到来
        System.out.println("socket 启动成功");
        while (true){
            Socket socket = server.accept();
            SocketThread socketThread = new SocketThread(socket);
            socketThread.start();
            SOCKET_MAP.put(socket.getInetAddress().getHostAddress(),socketThread);
            System.out.println("ip地址["+socket.getInetAddress().getHostAddress()+"]链接上来了........");
        }
    }
}
