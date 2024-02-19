import mongoose from "mongoose";
 
const FoodSchema = new mongoose.Schema({
    id:{},
    name: {
        type: String,
        length: {
            min: 2,
        }, 
        required: true
    },
    img: Buffer,
    password: String,
    ingeredient: String,
    price: Int16Array,
    discount: Int16Array,
})
const foodModel = mongoose.model('food delivery food', FoodSchema)
export { foodModel }