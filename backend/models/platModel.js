const mongoose = require("mongoose")

const PlatSchema = mongoose.Schema({
        nom: {
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

const Plat = mongoose.model('Plat', PlatSchema)

module.exports = Plat