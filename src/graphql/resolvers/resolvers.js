import { Post } from "../../DB/models/post.model.js";
import { User } from "../../DB/models/user.model.js";

export const resolvers = {
  Query: {
    hello: () => "Welcome to Route Social GraphQL API!",
    getAllPosts: async () => {
      return await Post.find().populate("userId").sort({ createdAt: -1 });
    },
    getPostById: async (_, { id }) => {
      return await Post.findById(id).populate("userId");
    },
    getAllUsers: async () => {
      return await User.find();
    }
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      return await User.create({ name, email });
    },
    createPost: async (_, { title, content, userId }) => {
      const post = await Post.create({ title, content, userId });
      return await post.populate("userId");
    },
    likePost: async (_, { postId }) => {
      return await Post.findByIdAndUpdate(postId, { $inc: { likes: 1 } }, { new: true }).populate("userId");
    }
  }
};
