<p align="center"><br><img src="https://avatars3.githubusercontent.com/u/16580653?v=4" width="128" height="128" /></p>

<h3 align="center">Ionic/React SQLite App Starter</h3>
<p align="center"><strong><code>react-sqlite-app-starter</code></strong></p><br>
<p align="center">
  A Ionic/React application demonstrating the use of the <strong><code>@capacitor-community/sqlite@latest</code></strong> plugin and may be use as an application starter.

</p>

<br>



## Browser Support

The plugin follows the guidelines from the `Capacitor Team`,

- [Capacitor Browser Support](https://capacitorjs.com/docs/v3/web#browser-support)

meaning that it will not work in IE11 without additional JavaScript transformations, e.g. with [Babel](https://babeljs.io/).


## Installation 🚧

If Ionic is not installed follow this blog - https://dev.to/davidkou/using-ionic-and-react-to-create-electron-desktop-app-a-step-by-step-tutorial-and-troubleshooting-1dk2

 - then install it

```bash
npm install
```

 - then go to the building process

```bash
npm run build
npx cap sync
npm run build
npx cap copy
npx cap copy web
```

the capacitor config parameters are:

```
  "appId": "com.example.app.capacitor",
  "appName": "react-sqlite-app-starter",
```

### Building Web Code

The ```@capacitor-community/sqlite``` is not implemented for Web Browsers.
if you run

```bash
npx cap serve
```
you will get the following messages:
```
SQLite Plugin not available for Web Platform
```

### Building Native Project

#### IOS

```bash
npx cap open ios
```
Once Xcode launches, you can build your finally app binary through the standard Xcode workflow.

#### Android

```bash
npx cap open android
```
Once Android Studio launches, you can build your app through the standard Android Studio workflow.


## Reference

https://github.com/jepiqueau/react-sqlite-app-starter

https://github.com/capacitor-community/sqlite




