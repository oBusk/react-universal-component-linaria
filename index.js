const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const clientConfig = require('./webpack/client.dev')
const serverConfig = require('./webpack/server.dev')

const publicPath = clientConfig.output.publicPath;
const app = express();

let isBuilt = false

const done = () =>
    !isBuilt &&
    app.listen(8999, () => {
        isBuilt = true
        console.log('BUILD COMPLETE -- Listening @ http://localhost:8999')
    })

const compiler = webpack([clientConfig, serverConfig]);
const clientCompiler = compiler.compilers[0];
const options = { publicPath, stats: { colors: true } };

app.use(webpackDevMiddleware(compiler, options));
app.use(webpackHotMiddleware(clientCompiler));
app.use(webpackHotServerMiddleware(compiler));

compiler.plugin('done', done);
