package com.plugin.httpget

import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import java.net.URL

@CapacitorPlugin(name = "nativeHttpGet")
class nativeHttpGetPlugin : Plugin() {
    private val implementation = nativeHttpGet()
    @PluginMethod
    fun get(call: PluginCall) {
        val url = call.getString("url")
        val ret = JSObject()

//        val client = HttpClient.newBuilder().build();
//        val request = HttpRequest.newBuilder()
//            .uri(URI.create("http://webcode.me"))
//            .build();
//
//        val response = client.send(request, HttpResponse.BodyHandlers.ofString());
//        println(response.body())
//        val client = HttpClient.newBuilder().build();
//        val request = HttpRequest.newBuilder()
//            .uri(URI.create(url))
//            .build();
//
//        val response = client.send(request, HttpResponse.BodyHandlers.ofString());
//        println(response.body())

        val json = URL(url).readText()
        println(json)
        ret.put("response", implementation.get(json))
        call.resolve(ret)
    }
}