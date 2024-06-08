## 1. Error: Spawn failed
- problem
```
Error: Spawn failed
at ChildProcess.<anonymous> (E:\Hexo\node_modules\hexo-util\lib\spawn.js:51:21)
at ChildProcess.emit (events.js:210:5)
at ChildProcess.cp.emit (E:\Hexo\node_modules\cross-spawn\lib\enoent.js:34:29)
at Process.ChildProcess._handle.onexit (internal/child_process.js:272:12)
```
- solution
```
rm -rf .deploy_git/
hexo clean && hexo g && hexo d
```