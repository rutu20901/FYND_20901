const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/';

const userSchema = new mongoose.Schema(
    {
        _id: Number,
        username: String,
        email: String,
    },
    { _id: false }
);
const User = new mongoose.model("users",userSchema);
async function run(){
    try{
        await mongoose.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });
        const user = User({username:"Rutuja", email:"rutuja@gmail.com", _id: 1});
        await user.save();
        const docs = await User.find({});
        docs.forEach((docs) => console.log(docs)); 
    } catch(error) {
        console.error(error);
    }finally{
        await mongoose.disconnect();
    }
}

run();

//QWERTYUIOP