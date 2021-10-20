const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const BodyParser = require("body-parser")
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();

app.use(
    BodyParser.urlencoded({
        extended: false
    })
)
app.use(BodyParser.json());

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const PORT = process.env.port || 80;

mongoose.connect(db, connectionParams)
    .then(
        console.log("MongoDb successfully connected")
    )
    .catch(err =>{
        console.log(`An error occured ${err}`);
})

app.use(passport.initialize())

require("./config/passport")(passport);

// Routes
app.use("/api/users",users);

app.get('/',(req,res) =>{
    res.status(200).json({ message: "Owner of this server is Tushar Vimal"});
})

app.listen(PORT,() => {
    console.log(`Server listening on ${PORT}`);
})