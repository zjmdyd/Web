package com.hanyou.gateway;

public class utils {
    public static String byteArrayToHexStr(byte[] byteArray) {
        if (byteArray == null){
            return null;
        }
        char[] hexArray = "0123456789ABCDEF".toCharArray();
        char[] hexChars = new char[byteArray.length * 2];
        for (int j = 0; j < byteArray.length; j++) {
            int v = byteArray[j] & 0xFF;
            hexChars[j * 2] = hexArray[v >>> 4];
            hexChars[j * 2 + 1] = hexArray[v & 0x0F];
        }
        return new String(hexChars);
    }

    public static byte[] intToBytes(int n) {
        byte[] b = new byte[4];

        for(int i = 0;i < 4;i++) {
            b[i]=(byte)(n>>(24-i*8));
        }
        return b;
    }

    public static byte checkout(byte[] bytes) {
        byte endByte = 0x00;

        for(int i = 0; i < bytes.length; i++) {
            endByte ^= bytes[i];
        }
        return endByte;
    }

    public static byte checkoutLen(byte[] bytes, int len) {
        byte endByte = 0x00;

        for(int i = 0; i < len; i++) {
            endByte ^= bytes[i];
        }
        return endByte;
    }
}
