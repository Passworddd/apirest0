"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = 3003;

_app2.default.listen(process.env.PORT,()=>{
	console.log(`localhost:${process.env.PORT}` )
});
