import Koa from 'koa';
import Http from 'http';
import Router from 'koa-router';

const start = () => new Promise((resolve, reject) => {
    const app = new Koa();
    const router = new Router();

    const server = Http.createServer(app.callback()).listen(3001, (err) => {
        if (err) {
            console.error(`Service not started`);

            return reject(err);
        }

        console.info(`Service started on *:3001`);

        return resolve(server);
    });

    router.get('/', list);

    app.use(router.routes());
});

async function list(ctx) {
    console.log('ok');
    ctx.body = 'secret';
}

start();