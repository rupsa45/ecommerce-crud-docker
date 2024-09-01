import {createPool} from 'mysql2/promise';
import {config} from "dotenv";

config();

const pool=createPool({
    port:process.env.DB_PORT,
    host :process.env.DB_HOST,
    user :process.env.DB_USERNAME,
    password :process.env.DB_PASSWORD,
    database :process.env.DB_NAME
})


const connectDB=async()=>{
    try {
        await pool.getConnection();
        console.log(" MYSQL Connected ");
        
    } catch (error) {
        console.log("Database conncetion Error");
        console.log(error);
        throw error;
    }
}

export {
    pool,
    connectDB
}