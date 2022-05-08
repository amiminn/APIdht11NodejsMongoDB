// import models
import Dht11 from "../models/Dht11.js";

// function get All Dht11s
export const getDht11s = async(req, res) => {
    try {
        const dht11s = await Dht11.find();
        res.json(dht11s);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// function Create Dht11
export const saveDht11 = async(req, res) => {
    const dht11 = new Dht11(req.body);
    try {
        const savedDht11 = await dht11.save();
        res.status(201).json(savedDht11);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// function Delete Dht11
export const deleteDht11 = async(req, res) => {
    const cekId = await Dht11.findById(req.params.id);
    if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
    try {
        const deletedDht11 = await Dht11.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedDht11);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};