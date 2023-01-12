import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    region: {
        type: String
    },
    title: {
        type: String
    },
    added: {
        type: String
    },
    country: {
        type: String
    },
    end_year: {
        type: String
    },
    impact: {
        type: String
    },
    intensity: {
        type: String
    },
    likehood: {
        type: String
    },
    sector: {
        type: String
    },
    title: {
        type: String
    },
    topic: {
        type: String
    }
});
const DataCollection = mongoose.model('demos', DataSchema);
export default DataCollection;