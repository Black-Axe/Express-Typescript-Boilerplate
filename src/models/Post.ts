import {
  Document, model, Schema,
} from 'mongoose'

/**
 * Interface to model the Post Schema for TypeScript.
 * @param title:string
 * @param content:string
 * @param author: string
 * @param createdAt:Date
 * @param updatedAt:Date
 */
export interface IPost extends Document {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;

}

const postSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

const Post = model<IPost>('Post', postSchema)

export default Post
