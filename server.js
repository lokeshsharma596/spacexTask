const express = require("express");
const next = require("next");
const fetch = require('node-fetch');

const PORT = 8081;

const app = next({
    dev: process.env.NODE_ENV === "production",
});

const nextExpress = require("next-express/server")(app).injectInto(express);


app.prepare()
    .then(() => {

        const server = nextExpress();

        server.pageRoute({
            path: "/",
            renderPath: "/",
            async getProps(req, res) {
                const response = await fetch('https://api.spaceXdata.com/v3/launches?limit=100').then((res) => res.json());
                return {
                    launches:response
                }
        }});


        return server.listen(PORT);
    })
    .then(() => console.log(`> Running on http://localhost:${PORT}`))
    .catch(err => {
        console.error(`Server failed to start: ${err.stack}`);
        process.exit(1);
    });
