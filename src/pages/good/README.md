# Project Info
- 商品列表
# Author
- Wang Jian
# Mail
- 41620994@qq.com
# Date
- New 2017-07-27
# release

- 2017-07-28 增加 商品管理功能
- 2017-07-29 增加 Mongodb
- 2017-07-30 增加 Table 显示

# 第一步、安装启动数据库
## 方式1：通过cnpm安装mongodb
cnpm install -g mongodb-runner

mongodb-runner start

## 方式2：手动安装mongodb
1. 安装mongodb.msi包
https://www.mongodb.com/download-center

2. 启动mongdb
mongod --dbpath c:\workspace\db

# 第二步、安装启动服务端
- 安装服务端
cnpm install -g parse-server

- 配置并启动服务端
parse-server --appId dev --masterKey angulardev --databaseURI mongodb://localhost/dev

# 第三步、安装管理后台
cnpm i -g parse-dashboard

# 第四步、启动管理后台
- 访问本地测试环境
parse-dashboard --appId dev --masterKey angulardev --serverURL http://localhost:1337/parse

注意：每次重新开命令行
