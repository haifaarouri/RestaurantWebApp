import mongoose from "mongoose";

const PlatSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        prix: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Plat = mongoose.model('Plat', PlatSchema)