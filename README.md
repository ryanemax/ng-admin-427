# Ng LazyLoad Starter

本项目通过最新版 [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1 创建。

项目目标
- 提供**LazyLoad**机制，匹配最新版本Angular的初始化项目包
- 提供**SSR服务端渲染**、SPA静态打包两种运行模式
- **提高首页加载效率**，将模块分组打包

SSR模式注意
- 不可以使用直接操作DOM的第三方组件
    - 可考虑使用iframe引入相关页面
- 动态效果可用官方提供的Animations动画库
    - import { NoopAnimationsModule } from '@angular/animations' on the ServerAppModule

参考文档
- doc/SSR-init.md -> @angular/platform-server服务端渲染模式配置

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build for Static (SPA Mode)

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Build for Server Render (SSR Mode)

1. Run `ngm run server:build` to build the project.

2. Run `ngm run server` to run the project.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Contributor
- CIO [ryanemax](https://ryanamax.github.io/), The Author.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
