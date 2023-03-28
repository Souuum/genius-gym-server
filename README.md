# genius-gym-server

Back-End repo for our Web Project at the University of Concordia
See :

https://github.com/Souuum/genius-gym

Add into `.env`

```
MARIADB_URI=mariadb://root:toor@localhost:3306/genius_gym

```
Be sure to change the password to your own, provide empty string if no password

To run the server:
```
npm install
```

then

```
npm start
```

## Docker

```bash
docker compose up --build -d
```