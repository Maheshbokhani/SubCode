# SubCode


## 1.Install React Native 

    $ npm install -g react-native


## 2.Create React Native Project

    $ react-native init <Project name>


## 3.Install babel-plugin-module-resolver in Project

    $ npm i babel-plugin-module-resolver


## 4.Install react-dom and react-native-web in Project

    $ npm i react-dom  react-native-web


## 5.Create .babelrc file in root path in Project

        {
        "plugins": [
            [
                "module-resolver",
                {
                    "alias": {
                        "^react-native$": "react-native-web"
                    }
                }
            ]
        ]
        }


## 6.Create public file in root path

    $ ./public file


## 7.Create index.js file in src

src/index.js

    import React from 'react';
    import ReactDOM from 'react-dom';
    //import './index.css';
    import App from './components/SignIn';
    //import * as serviceWorker from './serviceWorker';

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

## 7.Run in Web
some changes in package.json

"scripts": {
    ...
    "start": "react-scripts start",
    ...
}

    $ npm start


## 8.Run app in Android or Web
some changes in package.json

"scripts": {
    ...
    "start": "react-native start",
    ...
}

    $ npm start 
    $ react-native run-android or react-native run-ios

