# React Native Repack

Starter Pack including [react-native](https://github.com/facebook/react-native) & [redux](https://github.com/reactjs/redux), using [styled-component](https://github.com/styled-components/styled-components).

## Setup react-native

Before starting a new project with `React Native Repack`, please follow this [tutorial](https://facebook.github.io/react-native/releases/next/docs/getting-started.html) up to the **Testing installation** part.

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
yarn run-ios
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
yarn run-android
```

Press the **R key twice** in your Android Simulator to reload the app.

**Command⌘  +  M** to open debugger when running in an Android emulator.

*Docker and Android emulators using HAXM cannot run together. To resolve this problem, close Docker on Mac or use a remote android device.*

## Note

This is a beta version.
Below you will find some information on how to perform common tasks with React Native,
You can find the most recent version of React Native's guide [here](https://facebook.github.io/react-native/releases/next/docs/getting-started.html).
