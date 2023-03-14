# genius-gym-server

Back-End repo for our Web Project at the University of Concordia
See :


https://github.com/Souuum/genius-gym


Add into config/connection.js


```js

db = "genius-gym";
user = "root";
pw = "pwd";
host = "localhost";

module.exports = { db, user, pw, host }

```
Be sure to change the password to your own, provide empty string if no password

To run the server:
```
npm install
```

then

```
nodemon
```
