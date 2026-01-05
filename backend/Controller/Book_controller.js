import Book from "../Model/book.js"

export const getbook =async (req,res)=>{

    try {

        const book= await Book.find()
        res.status(200).json(book)
        
    } catch (error) {
        console.log("Error",error)
        res.status(401).json(error)
    }
}