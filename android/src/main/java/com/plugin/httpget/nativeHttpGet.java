package com.plugin.httpget;

import android.util.Log;

public class nativeHttpGet {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
