# pnpm version major # 重大更新版本 0.2.0 =》1.0.0
# pnpm version minor # 次要更新版本 0.2.0 =》0.3.0
# pnpm version patch # 补丁更新版本 0.2.0 =》0.2.1

# ./node_modules/hexo/bin/hexo new
./node_modules/hexo/bin/hexo clean #清除public文件夹
./node_modules/hexo/bin/hexo g     #编译文章，生成public文件夹
gulp                               #压缩js、css、img文件
./node_modules/hexo/bin/hexo d -g  #部署到github
./node_modules/hexo/bin/hexo clean #清除public文件夹
rm -rf .deploy_git
