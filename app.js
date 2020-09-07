let express = require("express");
let path = require("path");
let cors = require('cors');

const app = express()
const router = express.Router();

app.use(cors());
app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.static(path.resolve(__dirname, "./")))

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running Web Server at Port 3000');