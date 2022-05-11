# FakeLocation-Server

## Introduction

A fake api server for FakeLocation App

Unlock all apps limitation and you can use pro version permanently for free

## How to use?

I only test FakeLocation app with version **1.3.0.2**, so it is strongly recommended that you use the same version

You can download the corresponding version through following url:

[download link1](https://pan.baidu.com/s/1i_QEPgEiGHBAC4QDJvFavw?pwd=xeqf)

clone the project

```bash
git clone https://github.com/BobH233/FakeLocation-server.git
```

~~install the nodejs~~

run

```bash
npm install
```

to start the server:

```bash
node index.js
```

and you should setup the proxy so that FakeLocation app connect to your own server

then open the app, and login with any username and password

## Setup the proxy

you can choose any of the methods

### 1. your router(system: OpenWrt)

Go to `Network > DHCP/DNS > DNS hijacking`

And add following config:

```
fakelocation.api.lerist.cc -> your server ip
notice.api.lerist.cc -> your server ip
ads.api.lerist.cc -> your server ip
```

### 2. Other method

To be updated...

## Why I made this?

Firstly, I would like to greatly thank **lerist** for developing such an excellent app

You should have made enough money with this app, and I want to note that nowdays we love "Open Source"

I don't think your price setting is reasonable and it's time to embrace **Open Source Era**

## @lerist

If this project bothers you, please contact me without any hesitation

