import app from './app';

const port = 3003;

app.listen(process.env.PORT,()=>{
	console.log(`localhost:${process.env.PORT}` )
});
