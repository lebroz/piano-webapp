"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.static(_path.default.resolve(__dirname, "../public")));
const router = (0, _express.default)();
router.get('/', function (req, res) {
  res.sendFile(_path.default.resolve(__dirname, "../index.html"));
});
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running Web Server at Port 3000');