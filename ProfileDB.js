require("dotenv").config();
const connectDB = require("./db/connect");
const Profiles = require("./models/profiles");

const Profilejson = require("./profiles.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Profiles.deleteMany();
        await Profiles.create(Profilejson);
        console.log("successfully");
    } catch (error) {
        console.log(error);
    }
};

start();
