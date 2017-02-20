# React Native Redux Starter Pack

Starter Pack including [react-native](https://github.com/facebook/react-native) & [redux](https://github.com/reactjs/redux), with an optional [support CSS or SASS/SCSS ](https://github.com/sabeurthabti/react-native-css).

## Setup react-native

Before starting a new project with `React Native Redux Starter Pack`, please follow this [tutorial](https://facebook.github.io/react-native/releases/next/docs/getting-started.html) up to the **Testing installation** part.

It will help you install **react-native** on your system. If you already installed react-native, you can skip ahead to the **#Install**.

## Install

Clone or download this repository and install dependencies :

```
npm install
```

## Usage

### 1. Connect your device

If you use a virtual device, these steps change depending this one *(iOS or Android device)*.

#### Android Virtual Device

In a new terminal, run the following command if this is not already done :
```
android avd
```
Then start your virtual device.

*If you have issues with this command, please go ahead to the troubleshooting.*


#### iOS Simulator

The easiest way is to install [Xcode](https://itunes.apple.com/us/app/xcode/id497799835) via the Mac App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app

Then if you are having problems, follow [Xcode Help](http://help.apple.com/xcode/mac/8.0/#/devdc0193470). 


#### Remote Device

To run your app on an Android / iOS Remote Device, follow the tutorial :
[Running on device](https://facebook.github.io/react-native/docs/running-on-device.html)

To connect an API which run on your PC / Mac, don't forget to change your API IP address to sync.


### 2. Run project

In another terminal, run your project depending on the OS used with the following command :
```
react-native run-android
```

or 

```
react-native run-ios
```

### 3. Add support CSS or SASS/SCSS [optionnal]

This support use [React-native-css](https://github.com/sabeurthabti/react-native-css) package. It turns valid CSS/SASS into the Facebook subset of CSS.

Inside your project, launch a new terminal and run the following command :

```
react-native-css -i ./app/styles.scss -o ./app/styles.js -w -p
```

## Troubleshooting

These are some common issues you may run into while setting up React Native. If you encounter something that is not listed here, try this [page](https://github.com/facebook/react-native/blob/master/docs/Troubleshooting.md)

#### SDK location not found
Verify your **ANDROID_HOME environment variable**. With macOS or Linux, run `printenv` and check if **ANDROID_HOME** exist. Otherwise, run this command `source ~/.bashrc` and retry.

#### Error with react-native-css

Install the package globally : `npm install react-native-css -g`

#### adb - not command found

Install **Android Debug Bridge (adb)**. These following steps are the easiest way and will provide automatic updates.

1. Install [homebrew ](https://brew.sh/) 
    
    `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" `
        
2. Install adb

    `brew install android-platform-tools `
    
3. Start using adb 

    `adb devices `

#### AVD doesn’t start

If you have this error : 

`ERROR: Unfortunately, there's an incompatibility between HAXM hypervisor and VirtualBox`

Docker and Android emulators using HAXM cannot run together. To resolve this problem, close Docker on Mac or use a remote android device.

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
