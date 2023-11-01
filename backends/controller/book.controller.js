
const Books= require('../model/book_schema');

const addBook = async (req, res) => {
    try {
        const {
            title,
            authorId,
            publisher,
            publish,
            description,
            ISBN,
            language,
        } = req.body;
        if (!title || !authorId || !ISBN || !description) {
            return res.send({ message: "please fill all fields" })
        }
        let product_data = await Books.create({
            title,
            authorId,
            publisher,
            publish,
            description,
            ISBN,
            language,
        })
        return res.status(201).send({
            message: "product add successfully",
            statusCode: 201,
            data: product_data,
        });
    }
    catch (err) {
        console.log(err.message)
        res.status(200).send({ message: "there is someting error..", error: err.message });
    }
}



const getAllBooks = async (req, res) => {
    try {
        const product_data = await Books.find({})
        if (product_data.length > 0) {
            return res.send({
                message: "get all data sucessfully!",
                data: product_data,
            })
        } else {
            return res.send({ message: "data not found" })
        }
    }
    catch (err) {
        console.log(err.message)
    }
}


const getAllBooksCart = async (req, res) => {
    try {
        const product_data = await Books.find({cartStatus: true})
        if (product_data.length > 0) {
            return res.send({
                message: "get all data sucessfully!",
                data: product_data,
            })
        } else {
            return res.send({ message: "data not found" })
        }
    }
    catch (err) {
        console.log(err.message)
    }
}

const getAllBooksByAuthor = async (req, res) => {
    try {
        console.log("api call")
        let authorId=req.params.id
        const product_data = await Books.find({authorId: authorId}).populate("authorId")
        if (product_data.length > 0) {
            return res.send({
                message: "get all data sucessfully!",
                data: product_data,
            })
        } else {
            return res.send({ message: "data not found" })
        }
    }
    catch (err) {
        console.log(err.message)
    }
}


const bookDetails = async (req, res) => {
    const book_id = req.params.id
    try {
        const product_data = await Books.findById({ _id: book_id }).populate("authorId")
        if (product_data) {
            console.log("product_data", product_data)
            return res.send({ message: "get datails successfully!", data: product_data })
        }
    }
    catch (err) {
        console.log(err.message)
    }
}


const updateBookDetails = async (req, res) => {
    const property_id = req.params.id
    const {
        property_name,
        description,
        price,
        address,
        rating,
        property_type,
        aminites,
    } = req.body
    try {
        const product_data = await Books.updateOne({ _id: property_id }, {
            $set: {
                property_name,
                description,
                price,
                address,
                rating,
                aminites,
                property_type
            }
        })
        if (product_data) {
            console.log("product_data", product_data)
            return res.send({ message: "update successfully!", data: product_data })
        }else{
            console.log("product_data", product_data)
            return res.send({ message: "Data not found!" })
        }
    }
    catch (err) {
        console.log(err.message)
    }
}


const deleteBookDetails = async (req, res) => {
    const property_id = req.params.id
    try {
        const product_data = await Books.updateOne({ _id: property_id }, {
            $set: {
                status: false
            }
        })
        if (product_data) {
            console.log("product_data", product_data)
            return res.send({ message: "update successfully!", data: product_data })
        }
    }
    catch (err) {
        console.log(err.message)
    }
}


const searchBook = async (req, res) => {
    const query = req.query.query || ''; // Search query
    const minPrice = parseInt(req.query.minPrice) || 0;
    const maxPrice = parseInt(req.query.maxPrice) || Infinity;
    const property_type = req.query.property_type || '';
    const property_name = req.query.property_name || '';
    const city = req.query.city || '';
    const available_from = req.query.available_from || '';
    try {
        const items = await Property.find({
            property_name: { $regex: property_name, $options: 'i' }, // Case-insensitive search
            price: { $gte: minPrice, $lte: maxPrice }, // Price range filter
            property_type: { $regex: property_type, $options: 'i' }, // property_type filter
            city: { $regex: city, $options: 'i' }, // property_type filter
            available_from: { $regex: available_from, $options: 'i' }, // property_type filter
        });
        res.send({ data: items });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


const updateToCart= async (req, res)=>{
    try{
        const cartStatus=true
        console.log("req.body", req.body)
        const updateData= await Books.findByIdAndUpdate({_id: req.params.id}, {
            $set:{cartStatus}
        })
        console.log("updateData", updateData)
        res.send({status: "update data successfully! ", "result": updateData})
    }
    catch(err){
        console.log(err.message)
    }
}


const removeToCart= async (req, res)=>{
    try{
        const cartStatus=false
        console.log("req.body", req.body)
        const updateData= await Books.findByIdAndUpdate({_id: req.params.id}, {
            $set:{cartStatus}
        })
        console.log("updateData", updateData)
        res.send({status: "update data successfully! ", "result": updateData})
    }
    catch(err){
        console.log(err.message)
    }
}


module.exports = {
    addBook,
    getAllBooks,
    bookDetails,
    updateBookDetails,
    deleteBookDetails,
    searchBook,
    getAllBooksByAuthor,
    updateToCart,
    removeToCart,
    getAllBooksCart
}
