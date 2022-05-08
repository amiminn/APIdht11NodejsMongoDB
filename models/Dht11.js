// import mongoose
import mongoose from "mongoose";

// Buat Schema
const Dht11 = mongoose.Schema({
    temp: {
        type: String,
        required: true,
    },
    humd: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

// export model
export default mongoose.model("Dht11s", Dht11);