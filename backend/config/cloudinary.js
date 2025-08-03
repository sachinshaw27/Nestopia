import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"

const uploadOnCloudinary = async (filpath) => {
     cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });
    try {
        if(!filpath){
            return null
        }
        const uploadResult = await cloudinary.uploader
       .upload(filpath)
       fs.unlinkSync(filpath)
       return uploadResult.secure_url

    } catch (error) {
        fs.unlinkSync(filpath)
        console.log(error)
        
    }
}

export default uploadOnCloudinary

