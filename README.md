Lab 08: First Fullstack App
===

Create your first fullstack app and server!

There will be multiple labs building on the same repo.

## Domain Topic

Pick an "entity" (resource) for your app. Ideally, something of interest to you.
**However**, your resource should:

1. Only have one level of properties (no nested objects or arrays)
1. Have properties with at least one of each type:
    * string/text
    * number
    * boolean (true/false)
    * string/text that would be something in a dropdown, either an attribute type or related resource

## Casing

In SQL db, use `snake_case`. For server response to client (browser), use `camelCase`. This means SQL query will translate from one to other, remember to use **Double Quotes**!

## Project

Create new github project. For this lab, both the server and app will be in the same repository.

* The main folder will contain your `server` project, including database scripts
* Your app will live in `public`.

**For running your project locally**, you should:

1. Open the root repo folder into a vscode instance to do server development
1. Open a separate vscode instance with the `public` folder as the workspace root and do the front end development from here. This will make `live-server` `eslint` behave normally.

For this to work, add these settings to vscode:

```json
    "liveServer.settings.proxy": {
        "enable": true,
        "baseUri": "/api",
        "proxyUri": "http://localhost:3000/api"
    },
```

### Folder and File Structure

The lab contains `starter-code`. Copy the contents of this folder to your lab. **You will need to copy `.env.example` to `.env`!**

This is a guide to the overall structure, **not all parts are built out today**. 

**Note that "resource" refers to your domain topic and should be replace with actual name**

**Add files as needed, you should not create a bunch of empty files in your project!**

* repository
    * `data`
        * `create-tables.js`
        * `drop-tables.js`
        * `load-seed-data.js`
        * (seed data, `js` or `json`)
    * `lib`
        * (additional modules)
    * `public`
        * `assets`
            * (media)
        * `common`
            * `Header.css`
            * `Header.js`
            * `main.css`
            * `reset.css`
        * `home`
            * `App.css`
            * `App.js`
            * `index.js`
        * `{resource}-list`
            * `{resource}-list.js`
            * `{Resource}Item.css`
            * `{Resource}Item.js`
            * `{Resource}List.css`
            * `{Resource}List.js`
            * `{Resource}ListApp.css`
            * `{Resource}ListApp.js`
        * `{resource}-form`
            * `{resource}-form.js`
            * `{Resource}Form.css`
            * `{Resource}Form.js`
            * `{Resource}FormApp.css`
            * `{Resource}FormApp.js`
        * `services`
            * `{domain}-api.js`
        * `test`
            * (testing files)
        * `.eslintrc`, 
        * `.gitignore`,
        * `index.html` 
        * `{resource}-list.html` 
        * `{resource}-form.html` 
    * `.eslintrc` 
    * `.gitignore` 
    * `.env`
    * `.env.example`
    * `.travis.yml` 
    * `package-lock.json`
    * `package.json`
    * `README.md`
    * `server.js`

## Lab 08 Goal

1. Data scripts for creating table, dropping table, and seeding data
1. Server route the gets a list of data
1. Frontend App with navigation for three pages
1. Built-out list page that uses service module to fetches and components to display that data

### Server

The server needs to:

1. Use `cors()` to handle direct request from app
1. Use `express.static('public')` to server your app
1. Have data scripts for:
    1. creating tables 
    1. dropping tables
    1. load seed data
    1. do all three steps above
1. Create a `.json` or `.js` file with initial data
1. Handle a `GET` to `/api/<your-resource-plural>` and return list of data

### App

* Focus on the list page, the form page will be complete in tomorrows lab and work on a fun home page during the week.
* Get your duel vscode system working so you have live-server working for front-end development.
* Use components to structure your UI
* Use a module in `services` to do your fetch of data

## Deploy

Deploy to heroku with added pg instance. 
* Don't forget to seed the data!

Here is template `.env` setup for managing both local and production postgres instances

```sh
# *** Database ***

# - DEVELOPMENT:
DATABASE_URL=postgres://localhost:5432/famous_cats
# - WINDOWS:
# DATABASE_URL=postgres://<username>:<password>@localhost:5432/famous_cats

# - PRODUCTION:
#DATABASE_URL={copy from "> heroku config"}
#PGSSLMODE=require
```

## STRETCH

1. Design form page. Will be used for adding new data and editing existing data
1. Design and add a Detail Page. Will be used for detail view of single resource

## Points Break Down

Looking For | Points (10)
:--|--:
Server and App project setup | 2
Data scripts and load seed data | 2
Server routes and SQL | 1
Frontend pages and components | 3
Deployed and working on heroku | 2
