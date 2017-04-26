# React Native Redux Starter Pack

Starter Pack including [react-native](https://github.com/facebook/react-native) & [redux](https://github.com/reactjs/redux), using [styled-component](https://github.com/styled-components/styled-components).

## Setup react-native

Before starting a new project with `React Native Redux Starter Pack`, please follow this [tutorial](https://facebook.github.io/react-native/releases/next/docs/getting-started.html) up to the **Testing installation** part.

It will help you install **react-native** on your system. If you already installed react-native, you can skip ahead to the [Install](#Install).

## Install

Make sure that [yarn](https://yarnpkg.com/lang/en/) is installed on your computer. 

Clone or download this repository and install dependencies :

```
yarn
```

## Debug

**React-devtools**

* Run the command `yarn run devtools` while app is running.

**Redux devtools**

* Download the [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension)
* Open the remote devtool (right click on any web page > Redux DevTools > Open Remote DevTools)
* Select your current running app from the picker (top/right of the window)

## Usage

### iOS

Run on IOS simulator or connected device :

```
react-native run-ios
```

**Command⌘ + R**  in your iOS Simulator to reload the app and see your change!

**Command⌘ + D** to open debugger when your app is running in the iPhone Simulator.

### Android 

Run the following command in a terminal to start Android Virtual Device :

```
android avd
```

Run on Android simulator or connected device :

```
react-native run-android
```

Press the **R key twice** in your Android Simulator to reload the app.

**Command⌘  +  M** to open debugger when running in an Android emulator.

*Docker and Android emulators using HAXM cannot run together. To resolve this problem, close Docker on Mac or use a remote android device.*

### Running on device

You may be looking the official guide : https://facebook.github.io/react-native/docs/running-on-device.html

## Troubleshooting

These are some common issues you may run into while setting up React Native. If you encounter something that is not listed here, try this [page](https://github.com/facebook/react-native/blob/master/docs/Troubleshooting.md).

#### adb - not command found

Install **Android Debug Bridge (adb)**. These following steps are the easiest way and will provide automatic updates.

1. Install [homebrew ](https://brew.sh/) 
    
    `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" `
        
2. Install adb

    `brew install android-platform-tools `
    
3. Start using adb 

    `adb devices `

#### AVD error, or 'message' of undefined, or lagging

There is an issue with your AVD. 

First, run `android avd`. In his window, select « Device Definitions » and add a generic device, then create AVD with those options :
* Target : 6.0
* CPU : Intel Atom x86_64
* Skin: No skin
* Change internal storage (1000)
* Check « Use Host GPU » (for no lags)

Start your new virtual device and retry.

## Note

This is a beta version.
Below you will find some information on how to perform common tasks with React Native,
You can find the most recent version of React Native's guide [here](https://facebook.github.io/react-native/releases/next/docs/getting-started.html).
