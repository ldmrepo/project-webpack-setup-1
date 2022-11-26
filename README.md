# 프로젝트 시작하기

## 프로젝트 환경설정  

> ### 프로젝트 플더생성
```
$mkdir project-webpack-setup-1
```
> ### 프로젝트 폴더로 이동
```
$cd project-webpack-setup-1
```
> ### 프로젝트 초기화
```
$npm init -y
```
> ### Git저장소 초기화
```
$git init
```

> ### Webpack설정
- 설치
```
$npm i -D webpack webpack-cli webpack-dev-server
$touch webpack.config.js
```

- webpack.config.js 편집
```
const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
}
```

> ### 실행

- 스크립트 설정
```
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
```

> ### webpack loader
```
$npm i -D css-loader style-loader sass-loader sass
```

> ### webpack plugin 
```
$ npm i html-webpack-plugin -D
```

## React설정

> ### bebel
```
$npm i -D @babel/core @babel/preset-env babel-loader
```

