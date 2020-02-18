import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Document = new Schema({
    name: {
        type: String
    },
    size: {
        type: Number
    }
});

export default mongoose.model('Document', Document);