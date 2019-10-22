package com.rnproject.module.view;

import android.annotation.SuppressLint;
import android.content.Context;
import android.widget.Button;

import com.facebook.react.uimanager.annotations.ReactProp;

@SuppressLint("AppCompatCustomView")
public class MyButton extends Button {
    public MyButton(Context context) {
        super(context);
    }
    // 暴露给 JS 的参数，用于设定名称为“text”的属性，设定 Button 的文字
    @ReactProp(name = "text")
    public void setSrc(MyButton view,  String text) {
        view.setText(text);
    }
}
