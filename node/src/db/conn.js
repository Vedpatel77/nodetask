const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/bloguser';

mongoose.connect(url,{
    useNewUrlParser: true,
	useUnifiedTopology: true,
    family: 4,
}).then(()=>{
    console.log("conncetion with mongodb successful");
}).catch((err)=>{
   console.log(err);
})