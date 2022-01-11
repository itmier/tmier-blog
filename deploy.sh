###
 # @Author: 王云飞
 # @Date: 2022-01-11 10:53:51
 # @LastEditTime: 2022-01-11 10:56:12
 # @LastEditors: 王云飞
 # @Description: 
 # 
### 
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run docs:build
# 进入生成的文件夹
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mqyqingfeng/learn-typescript.git master:gh-pages
cd -