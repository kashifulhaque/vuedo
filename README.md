# vuedo 📓
> Yet another Todo app! 🥱

• A complete Todo app built using PEVN stack [PostgreSQL, Express.js, Vue.js, Node.js]

You can learn more about these technologies here: 😄
1. [PostgreSQL](https://www.postgresql.org)
2. [Vue.js](https://vuejs.org)
3. [Node.js](https://flaviocopes.com/nodejs)
4. [Express.js](https://flaviocopes.com/express)

### Enough talk, how do I get started? 🤔
1. Install 👉[Node.js](https://nodejs.org),👈 if you haven't already. v12.16.3 is the current LTS version of Node.js, as of May 09, 2020.
2. Install 👉[`vue-cli`](https://cli.vuejs.org)👈 _(vue-cli comes with Vue.js, so you don't have to download it separately)_
3. Install 👉[PostgreSQL](https://www.postgresql.org/download)👈 for your Operating System, by default it'll setup a new user named **postgres**, so make sure to change **postgres** user's password to your liking
4. Start the PostgreSQL service. If you're on Windows/Mac, do a quick internet search on how to do it. If you're on Linux, type in `sudo service postgresql start` to start PostgreSQL.
5. PostgreSQL runs on `http://127.0.0.1:5432` by default.
6. Clone this repo by typing in `git clone https://github.com/kashifulhaque/vuedo.git` into your favourite terminal.
7. After the project gets cloned, type in `cd vuedo`.
8. There'll be a `client` and a `server` directory. Pretty self explanatory, I suppose? 🤷‍♂️
9. Type in `cd client` and then run `npm install`.
10. Type in `cd ..`
11. Type in `cd server` and then run `npm install`. This action will also install [Express.js](https://expressjs.com)
12. After all the _npm installs_ are complete, and you're in the `server` directory, hopefully.
13. Type in `cd postgres/connection`. NOTE: You might have to use backslash **"\"** if you're on Windows.
14. Rename the `dummy_db.json` to `db.json` and open it. Make sure to add all the necessary details mentioned there OR your PostgreSQL database connection will NOT work.
15. Phew! That's it. `npm start` is the command which can used to run both server and the client, but you will have to run both commands separately in their respective directories.
16. If you don't want to do that, you can use [`concurrently`](https://www.npmjs.com/package/concurrently). Make sure to read all the docs carefully on how to set that up.
17. Happy coding! **< />**

> Tutorials followed:
> [PERN stack tutorial by freeCodeCamp](https://youtu.be/ldYcgPKEZC8)

#### If you made it this far, do give it a star! ⭐
