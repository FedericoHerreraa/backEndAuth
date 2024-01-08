import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

const url = MONGODB_URI

export const connectDB = async () => {
    try {
        await mongoose.connect(url)
        console.log('Se conecto con la base de datos')
    } catch (error) {
        console.log('Hubo un error con la conexion a la base de datos: ', error)
    }
}
