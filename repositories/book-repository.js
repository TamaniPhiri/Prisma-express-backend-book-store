const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const BookRepository = () => {
  const findAllBooks = async () => {
    return prisma.book.findMany();
  };
  const findBookByID = async (id) => {
    return prisma.book.findUnique({
      where: {
        id:parseInt(id)
      },
    });
  };
  const createBook = async (data) => {
    return prisma.book.create({
      data,
    });
  };
  const updateBook = async (id, data) => {
    return prisma.book.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: data,
      },
    });
  };
  const deleteBook = async (id) => {
    return prisma.book.delete({
      where: {
        id:parseInt(id)
      },
    });
  };
  return {
    findAllBooks,
    findBookByID,
    createBook,
    updateBook,
    deleteBook,
  };
};

module.exports = BookRepository();
