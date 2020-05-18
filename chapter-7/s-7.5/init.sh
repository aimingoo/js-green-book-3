#!/bin/sh

# 在macOS X上安装Etcd
brew install etcd

# 启动Etcd服务
etcd

# 启动Sandpiper作为测试环境
git clone https://github.com/aimingoo/sandpiper
cd sandpiper
npm install && npm start
