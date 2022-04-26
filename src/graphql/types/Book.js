export default `

type Book {
    _id: String!
    name: String!
    author: String!
    year: String!
    description: String!
    image: String!
}

type Query {
    book(_id: String!): Book
    books: [Book]
}

type Mutation {
    createBook(name: String!, author: String!, year: String!, description: String!, image: String!): Book
    deleteBook(_id: String!): Book
    editBook(_id: String!, name: String!, author: String!, year: String!, description: String!, image: String!): Book
}

`