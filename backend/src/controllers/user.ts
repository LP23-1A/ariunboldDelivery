import bcrypt, { genSalt } from "bcrypt";
import { Request, Response } from "express";
import { userModel } from "../models/user";

const createUser = async (req:Request, res:Response) => {
    try {
      const { name, email, password, phone_number,role } = req.body;

      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new userModel({
        name,
        email,
        password: hashedPassword,
        phone_number,
        role,
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  export {createUser}