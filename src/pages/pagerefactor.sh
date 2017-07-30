#!/bin/sh
#### Intro
# 脚本：ng2refactor
# ionic2专用的页面/组件重构工具
# Page Refactor Script for Ionic 2 & other Angular 2 Project
# 用于快速从模板page，创建新的页面，实现IDE工具中的Refactor功能
#### Copyright
# Author 刘雨飏
# Github https://github.com/ryanemax
#### Features
# 1. 批量替换文件名
# 2. 批量替换import参数
# 3. 批量替换函数名
# 4. 批量
#### Notice
# 注意，本脚本建议在pages或components目录下运行
#### Changelog
#### TodoList
# 1. 如何同时替换tabs界面中的import与变量名
#   - 方式一：执行./pagerefactor tabs-xxx tabs-new
#   - 方式二：tabs-xxx相关文件，统一写在页面目录，xxx-tabs.html/xxx-tabs.scss/xxx-tabs.js
#   - 方式三：脚本中之后，开发对tabs-xxx目录的Refactor
# 结论：暂时使用方式一
# 2. 如何同时增加，app.js中的侧划菜单页面索引、APP默认主页
# 3. 如何同时增加，providers中的数据逻辑代码
# 4. 如何同时增加，theme/app.core.scss中的样式import代码
#### Bugs
# 替换tabs-pms为tabs-blog时，带有-的命名替换不正常
# 替换tabs时候<ion-tabs>标签会被替换为ion-tabs-xxx导致错误
####


message1="请输入正确格式，如：./pagerefactor.sh <srcfile> <buildname>"
message2="例如文件：./pagerefactor.sh project.html blog.html"
message3="例如目录：./pagerefactor.sh project blog"
if [ $# -eq 0 ]       ##判断参数是否存在
then
	echo $message1
	echo $message2
	echo $message3
	exit                     ##不存在退出
fi
if [ x$1 = x ]       ##判断参数1是否存在
then
	echo $message1
	echo $message2
	echo $message3
	exit                     ##不存在退出
fi
if [ x$2 = x ]       ##判断参数2是否存在
then
	echo $message1
	echo $message2
	echo $message3
	exit                     ##不存在退出
fi

# 设定源页面及目标页面
src=$1
target=$2

srcUpper=$(echo $src | sed "s/\b[a-z]/\U&/g")
targetUpper=$(echo $target | sed "s/\b[a-z]/\U&/g")


echo 相关目录文件命名，正在从$srcUpper转换成$targetUpper
echo 相关变量函数命名，正在从$srcUpper转换成$targetUpper

cp -rf $src $target
cd $target

# 替换文件名前缀
for f in `ls`
do mv -f $f $(echo $f | sed "s/^$src/$target/")
done

# 替换import路径
sed -i "s/$src/$target/g" `grep -rl "$src"`

# 替换变量及函数名
sed -i "s/$srcUpper/$targetUpper/g" `grep -rl "$srcUpper"`

# i18n配置替换

# 结束预览目标页面目录，修正重复复制目录
rm -r $target
echo 已完成，新页面目录结构如下
ls