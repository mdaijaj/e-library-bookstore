const mongoose=require('mongoose');

const bookSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true,
        trim: true,
        min: 3,
        max: 30
    },
    title: {
        type: String, 
        require:true,
        trim: true,
        min: 3,
        max: 30 
    },
    cartStatus: {
        type: Boolean,
        default: false
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    publisher: {
        type:String,
        trim: true,
        lowercase: true,
    },
    description: {
        type:String,
        require:true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    ISBN: {
        type: String,
        require:true,
        trim: true,
        unique: true
    },
    language: {
        type: String,
    },
    price: {
        type: Number,
        default: 0
    },
    genre: {
        type: String,
    },
    book_cover: 
    [
        {img: {type: String} }
    ]
    ,
  }, {timestamps: true});     
  
module.exports= mongoose.model('Book', bookSchema);