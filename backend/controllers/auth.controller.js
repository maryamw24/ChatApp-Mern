import User from "../models/user.js";
import express from "express";

export const login = (req, res) => {
  res.send("Login Route");
}

export const signup = async (req, res) => {
  try
  {
    const {fullName, username, password, confirmPassword, gender} = req.body;

    if(password !== confirmPassword){
      return res.status(400).json({message: "Password not matched"});
    }
    const user = await User.findOne({username});
    if(user){
    return res.status(400).json({message: "User already exists"});
    }

    const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePicture: gender === "male" ? boyProfile : girlProfile,
    }
    )
    await newUser.save();
    res.status(201).json({_id : newUser._id, name: newUser.fullame, username: newUser.username, password: newUser.password,profilePicture: newUser.profilePicture});

    res.send("Signup Route");
  }
  catch(err)
  {
    console.log(err);
    console.log("Something went wrong");
    res.status(500).json({message: "Something went wrong"});
    res.send("Signup Route");
  }
}
export const logout = (req, res) => {
    res.send("Logout Route");
    }