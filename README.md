# 使用tsx编写，一个流畅清爽好用的PC端音乐网站

<div align=center>

![vite](https://img.shields.io/badge/3.0.2-vite-orange)
![typeScript](https://img.shields.io/badge/4.7.4-typeScript-lightgrey)
![vue](https://img.shields.io/badge/3.2.37-vue-brightgreen)
  
</div>

<div align=center>

![axios](https://img.shields.io/badge/0.27.2-axios-ff69b4)
![vue-router](https://img.shields.io/badge/4.1.2-vue%20router-blueviolet)
![pinia](https://img.shields.io/badge/2.0.16-pinia-yellow)
![element-plus](https://img.shields.io/badge/2.2.9-element--plus-409EFF)
![nprogress](https://img.shields.io/badge/0.2.0-nprogress-red)
  
</div>

<div align=center>

![sass](https://img.shields.io/badge/1.50.1-sass-orange)
![typescript-plugin-css-modules](https://img.shields.io/badge/typescript--plugin--css--modules-3.4.0-blue)
![husky](https://img.shields.io/badge/husky-8.0.1-red)
![qrcodejs2](https://img.shields.io/badge/qrcodejs2-0.0.2-brightgreen)
![dplayer](https://img.shields.io/badge/dplayer-1.26.0-orange)
  
</div>

## 👂 前言

> 感谢 [binaryify](https://github.com/Binaryify) 大佬的 `NeteaseCloudMusicApi` 接口支持 😜

- [项目预览地址](http://116.62.13.54)
- [接口文档地址](https://binaryify.github.io/NeteaseCloudMusicApi)

## 📔 已有功能

- 网易云APP扫码登录 & 网易云账号登录
- 注册
- 骨架屏
- 音乐播放器
- 歌单 & 详情
- 歌手 & 详情
- MV & 详情mv播放
- 排行榜
- 搜索
- 评论
- 歌词

## 🔧 兼容性

- nodejs：14.18.0+
- 浏览器：ie11+

## 🚀 运行项目

- clone该项目：[music-website](https://github.com/wp993080086/music-website.git)
- 安装：npm install
- 运行：npm run serve
- 测试环境打包：npm run build_test
- 正式环境打包：npm run build
- 修复：npm run lint-fix
- 打包后预览：npm run preview

## ⚡️ 本地开发准备

- 本地开发请先下载 [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi.git) 项目

- 下载完成后，进入`NeteaseCloudMusicApi`文件夹，打开`cmd`终端，`npm install`安装依赖，使用`node app.js`命令启动

- 将`music-website`项目根目录下`.env.development`文件里`VUE_APP_BASE_URL`字段修改为`NeteaseCloudMusicApi`项目启动后的地址，并重启`music-website`项目

> 请在根目录创建`.vscode`文件夹，并创建`settings.json`文件，并写入如下代码

```
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

## 📦️ 目录结构

```
│─.env.development
│─.env.production
│─.env.test
│─.eslintignore
│─.eslintrc.js
│─.gitignore
│─package-lock.json
│─package.json
│─README.md
│─vite.config.ts
│─index.html
├─node_modules
├─public
└─src
    │─App.vue => 根容器
    │─main.js => 根文件
    │  
    ├─static
    │  ├─styles => 公共样式
    │  │
    │  ├─iconfont => 字体图标
    │  │
    │  └─images => 图片
    │              
    ├─components => 公共组件            
    ├─types
    ├─servers
    ├─router
    ├─config
    ├─store => pinia
    ├─utils => 工具类
    └─pages => 页面
```
