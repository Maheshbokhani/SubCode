package com.subcode;

import android.app.Activity;
import android.content.Intent;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class LocationModule extends ReactContextBaseJavaModule implements ActivityEventListener {

    private final ReactApplicationContext reactContext;

    private Activity currentActivity;

    public LocationModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @ReactMethod
    public void LocationPermission(){
        Toast.makeText(getReactApplicationContext(),"Hello Javatpoint",Toast. LENGTH_SHORT).show();
    }

    @NonNull
    @Override
    public String getName() {
        return "LocationModule";
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
    }

    @Override
    public void onNewIntent(Intent intent) {
    }
}
