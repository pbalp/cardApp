// server/index.js

const path = require("path");
const express = require("express");
const cors = require('cors');
const ldap = require('ldapjs');
const assert = require('assert');

const { authenticate } = require('./authenticate');
const { authentication } = require('./authentication');
const { generateCardNumber, getExpirationDate, getUniversity } = require('./cardNumber');

const PORT = process.env.PORT || 3001;

const app = express();

const userLogin = { username: "", surname: "", name: "", university: "", role: "", email: "", status: "", cardNumber: "", expirationDate: "" }

/*const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };*/

app.use(cors())

const client = ldap.createClient({
    url: ['ldaps://ep-dc01.eurecapro.tuc.gr:636']
});

client.bind('cn=Pablo Baltuille,ou=staff,ou=personnel,ou=Domain User Accounts,dc=eurecapro,dc=tuc,dc=gr', 'P@bl0!@#', (err) => {
    assert.ifError(err);
});

client.on('error', (err) => {
  console.log(err.message)
});


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../webapp/frontendapp/build')));

app.use(
    express.urlencoded({
      extended: true
    })
);
  
app.use(express.json());

app.use('/login', (req, res) => {
  res.send({
    token: 'login'
  });
  console.log("Se envia el token de login");
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
})

// Handle GET requests to /api route
app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../webapp/frontendapp/build', 'index.html'));
});

app.get("/api/user/profile", (req, res) => {
    //console.log("Server get");
    //console.log("USER LOGIN", userLogin);

    res.json(userLogin);
    //res.send(userLogin);
    //res.end(userLogin);
});


app.post("/api/user/login", async (req, res) => {
    console.log("Server post");
    console.log(req.body.email);
    console.log(req.body.password);

    /*result = authentication(req.body.email, req.body.password);

    let user = {
        sAMAccountName: result["sAMAccountName"],
        sn: result["sn"],
        givename: result["givename"],
        iscHomeUniversity: result["iscHomeUniversity"],
        iscRoleInHomeUniversity: result["iscRoleInHomeUniversity"],
        iscExternalMailAddress: result["iscExternalMailAddress"],
        employeeId: result["employeeId"],
    }
    console.log("USER ", user);*/

    authentication(req.body.email, req.body.password).then(user => {
        console.log(user);

        university = getUniversity(user["university"]);
        expirationDate = getExpirationDate(user["role"]);
        cardNumber = generateCardNumber(user);

        //if (user["role"]=="staff" || user["role"]=="faculty") { user["status"]="Ph. D."; } || user["status"].length==0
        if (user["status"]=="" || user["status"]==null) { user["status"]="Mr./Ms."; }

        user["university"] = university;
        user["expirationDate"] = expirationDate;
        user["cardNumber"] = cardNumber;

        res.json(user);
        //console.log("USER APP ", user);
        //console.log("Expiration Date ", user["expirationDate"]);
        //console.log("Card Number ", user["cardNumber"]);
        attrs = ["username", "surname", "name", "university", "role", "status", "email", "cardNumber", "expirationDate"]
        for (var i=0; i<attrs.length; i++) {
          userLogin[attrs[i]] = user[attrs[i]];
        }
        //res.json(user);
        //res.next();
        res.send();
    }).catch(error => {
      console.log(error);
      //res.json("");
      /*res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.json('');*/
      //res.send('LDAP Error');
      //res.end();
    });
});

app.delete("/api/user/logout", async (req, res) => {
  attrs = ["username", "surname", "name", "university", "role", "status", "email", "cardNumber", "expirationDate"]
  for (var i=0; i<attrs.length; i++) {
    userLogin[attrs[i]] = "";
    //user[attrs[i]] = "";
  }
  res.json("Logout");
});
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

