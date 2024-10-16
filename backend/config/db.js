import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://cakeflakesa:Ayk5ZUSi3jxjUfdH@cluster0.h56ca.mongodb.net/CakeFlake_').then(() => console.log("DB Connected"));

}


