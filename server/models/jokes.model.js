const mongoose = require("mongoose");    

const JokeSchema = new mongoose.Schema(
{
    setup: {
        type:String,
        required:[true, "Joke is required"],
        minlength:[10,"Joke must have al least 10 characters to be a good joke"]
    },
    punchline:{
        type:String,
        required:[true, "Punchline is required"],
        minlength:[3,"Punchline must have al least 3 characterse"]

    },
    count:{type: Number,
    default:0}

},{timestamps:true}
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;