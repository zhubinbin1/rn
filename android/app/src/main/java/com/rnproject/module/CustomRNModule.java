package com.rnproject.module;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nonnull;
/**
 * 参考：
 * https://juejin.im/post/5d05b5f6e51d45777b1a3d8d
 * */
public class CustomRNModule extends ReactContextBaseJavaModule {
    public CustomRNModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    private static final String CUSTOM_CONST_KEY = "TEXT";

    @Nonnull
    @Override
    public String getName() {
        //暴露给RN的模块名，在JS端通过 NativeModules.MyNativeModule 即可访问到本模块
        return "CustomRNModule";
    }

    // 获取模块预定义的常量值
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(CUSTOM_CONST_KEY, "这是模块预设常量值");
        return constants;
    }
    @ReactMethod
    public void callFunction(String params, Callback success, Callback failture) {
        // 字符串 params 即为 RN 传入的参数
        try {
            if (params != null && !params.equals("")){
                // 回调成功，返回结果信息
                success.invoke("这是从原生", "返回的字符串");
            }
        }catch (IllegalViewOperationException e) {
            // 回调失败，返回错误信息
            failture.invoke(e.getMessage());
        }
        Toast.makeText(this.getCurrentActivity(),params,Toast.LENGTH_SHORT).show();
    }

}
