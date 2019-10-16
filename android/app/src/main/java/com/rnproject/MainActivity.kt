package com.rnproject

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

import com.facebook.react.ReactActivity
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        develop.setOnClickListener {
            startActivity(Intent(this@MainActivity,RnDevActivity::class.java))
        }
        list.setOnClickListener {
            startActivity(Intent(this@MainActivity,RnListActivity::class.java))
        }
        nav.setOnClickListener {
            startActivity(Intent(this@MainActivity,RnNavigationActivity::class.java))
        }
    }
}
