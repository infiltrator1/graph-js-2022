import Book from "../../models/Book";

export default {
    Query: {
        book: async (root, { _id }) => {
            const book = await Book.findById(_id).exec();
            return book;
        },
        books: async () => {
            const books = await Book.find({});
            return books;
        }
    },
    Mutation: {
        createBook: async (root, {name, author, year, description, image}) => {
            const newBook = new Book({
                name,
                author,
                year,
                description,
                image,
            })
            await newBook.save();
            return newBook;
        },
        deleteBook: async(root, {_id}) => {
            const book = Book.findByIdAndRemove(_id);
            return book;
        },
        editBook: async(root, {_id, name, author, year, description, image}) => {
            const book = await Book.findOneAndUpdate(_id, {
                name,
                author,
                year,
                description,
                image
            });
            return book;
        },
    }
}