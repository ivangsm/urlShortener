import { Schema, model } from "mongoose";

const urlSchema = new Schema({
    longUrl: { 
        type: String, 
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    shortUrlId: {
        type: String,
        required: true,
        unique: true
    }
});

export default model('URL', urlSchema);