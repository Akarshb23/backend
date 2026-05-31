import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express();


// cors helps connect backend n frontend , we can either set cors to accept from any site or some particular site , for now its * 
app.use(cors({
    origin : process.env.CORS_ORIGIN ,
    credentials : true 
}))


// limits json requests
app.use(express.json({limit : "16kb"}))

// akarsh bhardwaj becomes akarsh+bhardwaj || akarsh%20bhardwaj in url , so to decode that we use a express function
app.use(express.urlencoded({extended:true,limit:"16kb"}))

// if we have to save any file / folder -> so this creates a folder accesible by anyone
app.use(express.static("Public"))

//we use a cookie parser to store data securely and can be accesed by server only 
app.use(cookieParser())


export default app ; 