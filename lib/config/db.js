import mongoose from "mongoose";

export const ConnectDb = async () => {
    await mongoose.connect('mongodb://kunduachyut19:1234567890@cluster0-shard-00-00.ic4iw.mongodb.net:27017,cluster0-shard-00-01.ic4iw.mongodb.net:27017,cluster0-shard-00-02.ic4iw.mongodb.net:27017/?ssl=true&replicaSet=atlas-tjhpc3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0');
    console.log("Connected...");
    
}