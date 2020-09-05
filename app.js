import express from "express"
import Router from "express"
import path from "path"

const app = express()

app.use(express.static(path.resolve(__dirname, "../public")))

const router = Router();

router.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running Web Server at Port 3000');