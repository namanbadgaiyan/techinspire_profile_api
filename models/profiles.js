const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    collage_name: {
        type: String,
        required: true
    },
    collage_year: {
        type: Number,
        required: true
    },
    collage_branch: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    profile_img: {
        type: String,
        required: true,
        default: null,
    },
    banner_img: {
        type: String,
        required: true,
        default: null,
    },
    gender: {
        type: String,
        required: true,
        enum: {
            values: ["male", "female"],
            message: "Gender not supported",
        },
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    state: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model("Profile", profileSchema);
