const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function (req, res) { res.send('Hello World this is my api of greatness poggers')})

let myname = 'this is my name: Hunter Uhr'
app.get('/me', function (req, res) { res.send(myname)})

app.post('/echo-body', function (req, res) {
    const body = req.body;
    console.log(body);
    res.send(body);
})

app.post('/echo-query', function (req, res) {

    const query = req.query;

    console.log(query);

    res.send(query);

});

let usersarr = [];

app.post('/users', function(req, res){
    const {name, age, gender} = req.body;

    if(name && age){
        const myuser = ({name, age, gender, date: new Date(), id: usersarr.length+1});
        usersarr.push(myuser);
    }
    else{
        return res.status(400).send("wut are you doing m8");
    }
    console.log(usersarr);
    res.send(usersarr);
});

app.get('/getusers', function(req, res){
    console.log(usersarr);
    res.send(usersarr);
});

// app.get('/:myPath', function(req, res){
//     if(typeof myPath != "number"){
//         res.send(undefined);
//     }
//     res.send(usersarr[myPath]);
// });

app.get('/getByID', function(req, res){
    myid = req.query.id;
    user = usersarr.find(user => user.id == myid);
    console.log(user);
    res.send(user);
});


app.listen(3000);

