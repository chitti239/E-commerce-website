const { default: mongoose } = require("mongoose")

const requirments = mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        trim:true
    },
    email :{
        type:String,
        required:true
    },
    passWord :{
        type:[String,Number],
        required:true
    },
    image:{
        type:String
    }
    
},
{timestamps: true}
);

const userSchema = mongoose.model("schema",requirments);

module.exports = userSchema;