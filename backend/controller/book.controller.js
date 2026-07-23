const  Book  = require('../model/book.model');


const handleBookStoreController = async(req, res) => {

    try {
        //console.log(req.body);
        const body = req.body;

        if (!body.BookName || !body.BookTitle || !body.Author || !body.SellingPrice) {
            return res.status(400).json({ Message: "All fields are required", Success: false });

        }

        const bookAdd = await Book.insertOne(body);
        console.log(bookAdd);

        if(bookAdd){
            return res.status(201).json({Message:"Data Created Successfully!", Success: true, Id:bookAdd._id});
        }

    } catch(error) {
        console.log('error');
        
        return res.status(500).json({Message:error.message, Success: false});

    }

};

const handleBookListController = async(req,res) => {

    try {
        const bookList = await Book.find({});
        if(bookList){
            return res.status(200).json({Message:"Data fetched Successfully!", Success: true, TotalCount: bookList.length,BookList: bookList });
        }
        
    } catch (error) {
        return res.status(500).json({Message:error.message, Success: false});
    }

}

const handleDeleteBookController = async (req, res) => {
    try {
        const body = req.body
        const deletedBook = await Book.deleteOne({ _id: body.Id });
        console.log(deletedBook);
        if (deletedBook.acknowledged) {
            return res.status(200).json({ Message: "Book deleted Successfully!", Success: true });
        }


    } catch (error) {

        return res.status(500).json({ Message: error.message, Success: false });
    }
}

const handleUpdateBookController = async(req, res) => {

    try {

        const body = req.body;

        const updating = await Book.updateOne({_id:body?.Id}, { $set: body});
        console.log(updating);
        
        if(updating?.acknowledged){
            return res.json({Message:"Book updated Successfully", Success:true,})
        }
        
    } catch (error) {
        return res.status(500).json({ Message: error.message, Success: false });
    }

}

module.exports = { handleBookStoreController, handleBookListController, handleDeleteBookController, handleUpdateBookController };