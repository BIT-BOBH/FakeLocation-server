/* 
    FakeLocation-Server
    File: index.js
    Description: Main code to create the express web server and dispatch the requests.
    Author: BobH
    Time: 2022-5-11
    A free and open source api server for app "Fake Location @ 1.3.0.2"
*/
const ServerVersion = "1.0.0 Alpha";
const express = require('express');
const logger = require('./Logger');
const app = express();
const core = require('./core');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('*', (req, res) => {
    res.send("FakeLocationServer @ " + ServerVersion);
});

app.post('/FakeLocation/user/login', (req, res) => {
    let reqBody = req.body;
    core.login(reqBody, res);
});

app.post('/FakeLocation/user/get', (req, res) => {
    let reqBody = req.body;
    core.userget(reqBody, res);
});

app.post('/FakeLocation/user/checkPwdExist', (req, res) => {
    let reqBody = req.body;
    core.checkExist(reqBody, res);
});

app.post('/FakeLocation/user/checkUserExist', (req, res) => {
    let reqBody = req.body;
    core.checkExist(reqBody, res);
});

app.post('/Notice/getNotices', (req, res) => {
    let reqBody = req.body;
    core.getNotices(reqBody, res);
});

app.post('/Ads/getAds', (req, res) => {
    let reqBody = req.body;
    core.getAds(reqBody, res);
});

app.post('/FakeLocation/goods/getRenewalGoodsList', (req, res) => {
    let reqBody = req.body;
    core.getRenewalGoodsList(reqBody, res);
});

app.post('/FakeLocation/app/getAppConfigs', (req, res) => {
    let reqBody = req.body;
    core.getAppConfigs(reqBody, res);
});

app.post('/FakeLocation/version/checkApkUpdate', (req, res) => {
    let reqBody = req.body;
    core.checkApkUpdate(reqBody, res);
});

const server = app.listen(8000, () => {
    let host = server.address().address;
    let port = server.address().port;
    core.Init();
    logger.LogInfo("Server running at http://" + host + ":" + port + "!");
});