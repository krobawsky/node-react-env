import express from 'express';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

const app = express();

// middlwares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api', (req, res) => {
    res.json({
        api: 'works!'
    });
});

// export app
export default app