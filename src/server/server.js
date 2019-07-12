require("dotenv").config();
const express = require("express");
const http = require("http");
const next = require("next");
const session = require("express-session");
// 1 - importing dependencies
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const uid = require('uid-safe');
const authController = require('./controllers/auth.controller');
const dev = process.env.NODE_ENV !== "production";
const authAPI = require('./routes/auth.routes');
const noteAPI = require('./routes/notes.routes');
const bundleAPI = require('./routes/bundles.routes');
const md5 = require('md5');
const sessionStore = require('./session-store');

const app = next({
    dev,
    dir: "./src"
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // 2 - add session management to Express
    const sessionConfig = {
        secret: uid.sync(18),
        cookie: {
            maxAge: 86400 * 1000 // 24 hours in milliseconds
        },
        resave: false,
        saveUninitialized: true,
        store: sessionStore
    };
    server.use(session(sessionConfig));

    sessionStore.sync();

    // 4 - configuring Passport
    passport.use(new LocalStrategy({usernameField: 'email_address', passwordField: 'pass_word'},
       async function(email, password, done) {
            try{
                const user = await authController.find(email);
                if (!user) { return done(null, false); }
                if (user.pass_word !== md5(password)) { return done(null, false); }
                const cleanUser = user.toJSON();
                delete cleanUser.pass_word;
                return done(null, cleanUser);
            }catch(error){
                return error;
            }
        }
    ));

    passport.serializeUser((user, done) => {
        delete user.pass_word;
        done(null, user)
    });

    passport.deserializeUser((user, done) => {
        delete user.pass_word;
        done(null, user)
    });

    // 5 - adding Passport and authentication routes
    server.use(passport.initialize());
    server.use(passport.session());

    // 6 - you are restricting access to some routes
    const restrictAccess = (req, res, next) => {
        if (!req.isAuthenticated()) return res.redirect("/login");
        next();
    };

    server.use("/property-list", restrictAccess);
    server.use("/sales-offers", restrictAccess);
    server.use("/property", restrictAccess);

    server.use(authAPI);
    server.use(noteAPI);
    server.use(bundleAPI);

    // handling everything else with Next.js
    server.get("*", handle);

    http.createServer(server).listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`);
    });
});