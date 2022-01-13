---
date: 2022-01-13
---
<ToxicSoup />
# 拿来即用系列之Git的常用技能总结


## Git配置


#### 配置Git用户名


```git
git config --global user.name "用户名"
```


#### 配置Git邮箱


```git
git config --global user.email "email"
```


#### 删除全局配置


```git
git config --global --unset user.xxx
```


#### 查看Git系统配置


```git
git config --list
```


#### 查看用户配置


```git
cat ~/.gitconfig
```


#### 查看本地  `git` 命令历史


```git
git reflog
```


#### 查看提交历史


```git
git log --online // 日志记录一行一行显示
```


![27d4c1b1-bc25-4ee7-a62b-1f2951c65e99](https://gitee.com/yunfei2022/image-picgo/raw/master/img/202201131404029.png)


```git
git log --grep="组件" --oneline // 含有关键字的记录
```


![3b76b937-0c76-4a01-b05d-94068ce3da5c](https://gitee.com/yunfei2022/image-picgo/raw/master/img/202201131404218.png)


```git
git log --author="itmier@126.com" // 相关用户的提交记录
```


```git
git log -num   ex: git log -10 最近10次提交记录
```


```git
git log -10 --stat  // 列出具体的文件修改统计信息
```


## Git常用命令


#### 提交到暂存区


```git
git add .
```


#### 提交到本地仓库


```git
git commit -m ''
```


#### add与commit的合并写法


> 要保证所有文件已经被提交到暂存区,否则未追踪的文件(如新建的文件)不会被提交到暂存区



```git
git commit -am '提交说明'
```


#### 代码提交推送


```git
git push // 默认推送到主分支
```


#### 关联远程仓库


```git
git remote add origin 仓库ssh地址
```


#### 查看分支


```git
git branch // 本地分支
git branch -a 	//本地+远程
```


#### 新建分支


```git
git branch branchName
```


#### 将本地新分支推送到远程仓库


```git
git push <远程主机名> <本地分支名>:<远程分支名>
git push origin branchName // 省略远程分支,则表示两者同名
```


#### 远程分支代码拉取


```git
git pull // 默认拉取主分支
git pull origin branchName // 指定分支代码拉取
```


#### 分支合并


```git
git merge branchName
```


#### 切换分支


```git
git checkout branchName
```


#### 创建并切换到新分支


```git
git checkout -b branchName
```


#### 删除本地分支


```git
git branch -d branchName
```


#### 强制删除本地分支


```git
git branch -D branchName
```


#### 删除远程分支


```git
第一种方法:
git push origin --delete 远程分支名
第二种方法:
git push origin  :远程分支名  // 推送空分支,相当于删除远程分支
```


#### 将本地所有分支推送到远程主机


```git
git push --all origin
```


#### 修改当前分支名


```git
git branch -m branchName
```


#### 打标签


```git
git tag v1.0
```


#### 指定 `commit id` 创建标签


```git
git tag v2.0 9326e2010dcd6bbaa336610aca644995e770a15b
```


#### 创建带说明的标签


```git
git tag -a v3.0 -m '说明文字' // -a 指定标签名 -m 说明文字
```


#### 查看所有标签


```git
git tag
```


#### 推送本地标签


```git
git push origin <tagname> // 指定标签吗
git push origin --tags // 推送所有本地标签
```


#### 删除标签


```git
git tag -d v3.0 // 删除本地标签
git push origin :refs/tags/<tagname> // 删除远程标签(先删本地,再删远程)
```


#### 回滚操作


```git
1. 本地代码还未提交到远程仓库
git reset --hard // 回退到最近一次提交的版本内容
git reset --hard <commit_id> 指定commit回退
2. 本地代码已经提交到远程仓库,且远程仓库有其他人提交了新的代码
git revert <commit_id> // 撤销某次的commit提交(记录会保留),并生成一个撤销指定提交版本的新提交
```


#### 合并某次提交到指定分支(单个commit)
```git
// 拿到commitID

git checkout master

git cherry-pick 081c877af5ef470c4145ea58e7423f48a3afdd10
```
#### 合并某次提交到指定分支(多个commit)
```git
git cherry-pick commitID1...commitID3

PS: 不包含(即不会合并第一个)commitID, git cherry-pick(commitID1, commitID3]
```
#### 拉取代码,合并到本地,不产生合并merge记录
```javascript
git pull --rebase

可以减少冲突的提交点，比如我本地已经提交，但是远程其他同事也有新的代码提交记录，此时拉取远端其他同事的代码，如果是merge的形式，就会有一个merge的commit记录。如果用rebase，就不会产生该合并记录，是将我们的提交点挪到其他同事的提交点之后。
```
#### 获取最新的远程分支

- 方式一
```javascript
git remote update origin --prune
或者: 
git remote update origin -p
```

- 方式二
```javascript
git fetch origin
```
## Git实操
#### 仓库迁移

1. ~~先删除 ~~`~~.git~~`~~ 文件之前关联的仓库~~
```javascript
git remote rm origin
```

2. ~~添加新仓库~~
```javascript
git remote add origin git@github.com:itmier/demo,git
```

1. 添加新的远程仓库
```javascript
// repoName: 由本地重命名的远程仓库名称
// <ssh/url>: 远程仓库ssh地址
git remote add <repoName> <ssh/url>
```

2. 推送本地所有分支到远程仓库
```javascript
git push --all origin 一次将本地所有分支推上去
```
#### 仓库迁移相关
```javascript
git pull --all origin一次同步所有分支
git fetch --all origin一次拉取所有分支
git push --all origin 一次将本地所有分支推上去
git push --mirror 同上
```
直接修改远程仓库地址
```javascript
git remote set-url origin url
```
