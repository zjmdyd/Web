package com.hanyou.gateway;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

import static com.hanyou.gateway.utils.byteArrayToHexStr;

public class SocketThread extends Thread {
    private Socket socket;
    private InputStream inputStream;
    private OutputStream outputStream;
    private String ip;
    public SocketThread(Socket socket){
        this.socket = socket;
        ip = socket.getInetAddress().getHostAddress();
    }
    @Override
    public void run() {
        try {
            this.inputStream = socket.getInputStream();
            this.outputStream = socket.getOutputStream();
            while (true){
                int len = 0;
                byte[] bytes = new byte[1024];
                while ((len = inputStream.read(bytes)) != -1) {
                    System.out.println("len = " + bytes.length);
                    String s = byteArrayToHexStr(bytes);
                    System.out.println("["+ip+"]接收到数据：" + s);
                }
            }
        }catch ( Exception e){
            e.printStackTrace();
            StartServer.SOCKET_MAP.remove(ip);//移除链接对象
        }finally {
            try {
                if(inputStream != null){
                    inputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if(outputStream != null){
                    outputStream.close();
                }
            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }

    public OutputStream getOutputStream() {
        return outputStream;
    }
}
