package com.rnnexample

import android.content.res.Configuration

import com.facebook.react.PackageList
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load

import com.reactnativenavigation.NavigationApplication
import com.reactnativenavigation.react.NavigationReactNativeHost

import expo.modules.ApplicationLifecycleDispatcher.onApplicationCreate
import expo.modules.ApplicationLifecycleDispatcher.onConfigurationChanged

class MainApplication : NavigationApplication() {

  private val mReactNativeHost: ReactNativeHost = object : NavigationReactNativeHost(this) {
    override fun getUseDeveloperSupport(): Boolean {
      return BuildConfig.DEBUG
    }

    override fun getPackages(): List<ReactPackage> {
      val packages: MutableList<ReactPackage> = PackageList(this).packages
      return packages
    }

    override fun getJSMainModuleName(): String = "index"
    override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
    override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
  }

  override val reactNativeHost: ReactNativeHost = mReactNativeHost

  override fun onCreate() {
    super.onCreate()

    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      load()
    }

    onApplicationCreate(this)
  }

  override fun onConfigurationChanged(newConfig: Configuration) {
    super.onConfigurationChanged(newConfig)
    onConfigurationChanged(this, newConfig)
  }
}
