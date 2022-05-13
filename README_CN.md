# FakeLocation-Server

## 简介

一个FakeLocation应用程序的模拟验证服务器

解锁了app的所有pro功能，去除了限制使用的app和限制使用的功能

## 如何使用

我只测试了 **1.3.0.2**的版本，所以我建议你使用和我一样的版本，因为新版本中加入了https，不太方便模拟服务，功能差不多

你可以从这里下载，或者从release下载：

[download link1](https://pan.baidu.com/s/1i_QEPgEiGHBAC4QDJvFavw?pwd=xeqf)

先克隆项目：

```bash
git clone https://github.com/BobH233/FakeLocation-server.git
```

在服务器上安装nodejs

运行安装依赖

```bash
npm install
```

运行下列指令启动服务器，确保8000端口没被占用

```bash
node index.js
```

接下来你需要把手机的所有关于验证服务的域名重定向到你自己的服务器ip上，下面提供两种方法

重定向完毕后，打开app并随便输入一个邮箱密码登陆即可永久使用

## 设置代理重定向

下面两种方法，随便选择一种即可

### 1. 路由器法 (OpenWRT系统)

去 `网络 > DNS/DHCP > 自定义域名劫持`

然后把下列三个域名劫持到你自己的服务器ip上

```
fakelocation.api.lerist.cc -> your server ip
notice.api.lerist.cc -> your server ip
ads.api.lerist.cc -> your server ip
```

### 2. Virtual Hosts 软件

你可以在这里下载Virtual Hosts: [Release 2.1.0 · x-falcon/Virtual-Hosts (github.com)](https://github.com/x-falcon/Virtual-Hosts/releases/tag/2.1.0)

假设你的服务器ip是192.168.1.5，那么你就编写如下的hosts.txt，然后用Virtual Hosts选择这个hosts文件

```
192.168.1.5 fakelocation.api.lerist.cc
192.168.1.5 notice.api.lerist.cc
192.168.1.5 ads.api.lerist.cc
```

设置完后，使用手机浏览器访问 `fakelocation.api.lerist.cc:8000/`

如果能够正确访问并显示版本号，证明成功配置

## 为什么我要做这个服务器

首先，特别感谢`Lerist`编写的这个十分有用的app，给我提供了便利

你应该钱也赚够了，现在我们都喜欢“开源”

我觉得你把这种本该便利大家的软件设置硬性价格不太合理，为什么不把软件开源，以赞助的形式来恰饭呢？

## @lerist

如果这给你造成了困扰，请联系我
