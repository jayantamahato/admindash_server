import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/BlackOffice";
const connection = async () => {
    try {
        await mongoose.connect(URL);
        console.log("database connected successful...");

    } catch (error) {
        console.log("error while connection database", error)
    }
}
export default connection;