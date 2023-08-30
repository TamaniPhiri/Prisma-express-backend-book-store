const BookRepository=require('../repositories/book-repository')

const BookService=()=>{
    const getAllBooks=async()=>{
        const books=await BookRepository.findAllBooks();
        if(books.length<=0){
            throw new Error("No books found");
        }
        return books;
    }
    const getBookById=async(id)=>{
        const book=await BookRepository.findBookByID(id);
        if(!book){
            throw new Error("Book not found");
        }
        return book;
    }
    const createBook=async(data)=>{
        const book=await BookRepository.createBook(data);
        return book;
    }
    const updateBookById=async(id,data)=>{
        const updatedBook=await BookRepository.updateBook(id,data);
        return updatedBook;
    }
    const deleteBookById=async(id)=>{
        await BookRepository.deleteBook(id);
    }
    return{
        getAllBooks,
        getBookById,
        createBook,
        deleteBookById,
        updateBookById
    }
}

module.exports=BookService();