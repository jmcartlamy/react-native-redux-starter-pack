# React Native Redux Starter Pack

Starter Pack including [React Native](https://github.com/facebook/react-native) & [Redux](https://github.com/reactjs/redux), with an optional [support CSS or SASS/SCSS ](https://github.com/sabeurthabti/react-native-css).

## Setup React Native

Before starting a new project with React Native Redux (RNR) Starter Pack, please follow this [tutorial](https://facebook.github.io/react-native/releases/next/docs/getting-started.html) up to the **Testing installation** part.

This [tutorial](https://facebook.github.io/react-native/releases/next/docs/getting-started.html) will help you install React Native on your system. If you already have React Native installed, you can skip ahead to the **Install**.

## Install

Clone or download this repository and install dependencies :

```
$ npm install
```

## Usage

### Launch the Virtual Device

If you use a virtual device, these steps change depending this one *(iOS or Android device)*.

#### Android Virtual Device

In a new terminal, run the following command if this is not already done :
```
android avd
```
Then start your virtual device and wait.

*If you have issues with this command, please go ahead to the troubleshooting.*

#### Xcode

Follow [Xcode Help](http://help.apple.com/xcode/mac/8.0/#/devdc0193470) for build and run your app.

### Run project

In another terminal, run your project with the following command :
```
react-native run-android
```

or `react-native run-ios` if you have an iOS device.

### Add support CSS or SASS/SCSS [Optionnal]

This support use [React-native-css](https://github.com/sabeurthabti/react-native-css) package. It turns valid CSS/SASS into the Facebook subset of CSS.

Inside your project, launch a new terminal and run the following command :

```
react-native-css -i ./app/styles.scss -o ./app/styles.js -w -p
```

## Troubleshooting

These are some common issues you may run into while setting up React Native. If you encounter something that is not listed here, try this [page](https://github.com/facebook/react-native/blob/master/docs/Troubleshooting.md)

#### SDK location not found
Verify your **ANDROID_HOME environment variable**. With macOS or Linux, run `printenv` and check if **ANDROID_HOME** exist. If not, run this command `source ~/.bashrc` and retry.

#### Error with react-native-css

Install the package globally : `npm install react-native-css -g`

#### AVD doesn't start, or 'message' of undefined, or lagging

There is a dysfunctioning with your AVD. 

First, run `android avd`. In his window, select « Device Definitions » and add a generic device, then create AVD with these options :
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
