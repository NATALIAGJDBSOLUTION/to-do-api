import mongoose, { Schema, Document } from 'mongoose'

export interface IArrUser {
  name: string
}

export interface ITodo extends Document {
  id: string
  name: string | null
  arrUser: IArrUser[]
}

const TodoSchema: Schema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    default: null
  },
  arrUser: [{
    name: String
  }]
}, {
  collection: 'todos',
  timestamps: { createdAt: 'date', updatedAt: false },
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: false
})

export default mongoose.model<ITodo>('Todo', TodoSchema)
