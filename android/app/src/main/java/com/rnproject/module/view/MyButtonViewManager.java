package com.rnproject.module.view;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class MyButtonViewManager extends SimpleViewManager<MyButton> {
    @Override
    public String getName() {
        return "NativeMyButton"; // 此名称用于在 JS 中引用
    }

    // 创建 View 实例
    @Override
    protected MyButton createViewInstance(ThemedReactContext reactContext) {
        return new MyButton(reactContext);
    }
}

