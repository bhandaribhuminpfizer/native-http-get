package com.plugin.httpget

import android.util.Log

class nativeHttpGet {
    fun get(value: String): String {
        Log.i("Get ", value)
        return value
    }
}