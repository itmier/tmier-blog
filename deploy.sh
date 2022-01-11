#!/usr/bin/env sh
###
 # @Author: 王云飞
 # @Date: 2022-01-11 10:53:51
 # @LastEditTime: 2022-01-11 16:36:13
 # @LastEditors: 王云飞
 # @Description: 
 # 
### 
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run docs:build
# 进入生成的文件夹
cd docs/.vuepress/dist

# 拷贝目录和文件
cp -r ../../../.github ./

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:itmier/tmier-blog.git master:gh-pages
# 同时推送到 gitee
# git push -f git@gitee.com:yunfei2022/tmier-blog.git master:gh-pages
# 推送到服务器
git push -f git@39.106.158.140:/home/www/website/blog.git master
cd -