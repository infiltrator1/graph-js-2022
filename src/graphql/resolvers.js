import { mergeResolvers } from "@graphql-tools/merge";
import User from "./resolvers/User";
import Book from "./resolvers/Book";

export default mergeResolvers([
    User,
    Book,
])