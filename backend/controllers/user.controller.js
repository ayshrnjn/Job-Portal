

import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
 

export const register= async(req,res)=>{
    try{
      
        const {fullname,email,phoneNumber,password,role}=req.body ;

        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:"Something is missing ok",
                success:false
            });
        };

        const user =await User.findOne({email});
        if(user){
            return res.status(400).json({
                messgae:'user already exist with this email',
                success:false,
            })
        };
        const hashedPassword= await bcrypt.hash(password,10); 
        await User.create({
            fullname,
            email,  
            phoneNumber,
            password:hashedPassword,
            role,
        })

        return res.status(201).json({
            message:"account created Successfully",
            success:"true",
        })
    }
    catch(error){
     console.log(error);
    }
}

export const login =async (req,res) =>{
    try{
        const{email,password,role} =req.body ;

        if(!email ||!password || !role){
            return res.status(400).json({
                message:"something is missing",
                success:false,
            })
        };
        let user= await User.findOne({email});
        if(!User){
            return res.status(400).json({
                message:"incorrect email or password",
                success: false,
            })
        }
        const isPasswordMatch= await bcrypt.compare(password,user.password);

        if(!isPasswordMatch){
            return res.status(400).json({
                message:"incorrect email or password",
                success: false,
            })
        }
        if(role!=user.role){
            return res.status(400).json({
                message:"account doesn't exist with current role",
                success: false,
            })
        };
 
        const tokenData = { userId: user._id }; // Declare tokenData          // ye chatgpt error
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });
        

        // const tokenDate={
        //     userId:user._id
        // }  // ye didi wala video
        // const token= await jwt.sign(tokenData,process.SECRET_KEY,{expireIn:'1d'})



        
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }


        return res.status(200).cookie("token", token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:'strict'}).json({
          message:`welcome back ${user.fullName}`,
          user,
          success:true
        })
    }catch(error){
        console.log(error) 
    }
    }

    export const logout = async (req, res) => {
        try {
            return res.status(200).cookie("token", "", { maxAge: 0 }).json({
                message: "Logged out successfully.",
                success: true
            })
        } catch (error) {
            console.log(error);
        }
    }


    export const updateProfile = async (req, res) => {
        try {
            const { fullname, email, phoneNumber, bio, skills } = req.body;
            const file=req.file;

           



            // cloudinary aayega idhar
        
            let skillsArray;
        if(skills){
            skillsArray = skills.split(",");
        }
        const userId = req.id; // middleware authentication
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false
            })
        }
        // updating data
        if(fullname) user.fullname = fullname
        if(email) user.email = email
        if(phoneNumber)  user.phoneNumber = phoneNumber
        if(bio) user.profile.bio = bio
        if(skills) user.profile.skills = skillsArray
   
        // resume come later

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message:"Profile updated successfully.",
            user,
            success:true
        })
    } catch(error) {
        console.log(error);
    }

}    
