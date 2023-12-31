import mongoose from 'mongoose';

const ShopSchema = new mongoose.Schema({
    creator:{
        name:{
            type: String
        },
        id:{
            type: Number
        }
    },
    date:{
        type: Date,
        default: Date.now()
    },
    description:{
        type: String
    },
    title: {
        type: String
    },
    productSold:{
        type: String,
        default: 0
    },
    value:{
        type: Number,
        default: 0
    },
    stock:{
        type: Number,
        default: 0
    },
    images:{
        type: Array
    }
});


export default mongoose.model('shop', ShopSchema);