// src/models/Movie.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IPhoto } from './Image';
import { IVideo } from './Video';

export interface IMovie extends Document {
  name: string;
  photo: IPhoto['_id'];
  trailer: IVideo['_id'];
  landmark: string;
  city: string;
  state: string;
  country: string;
  createdAt: Date;
}

const MovieSchema: Schema = new Schema({
  name: { type: String, required: true },
  photo: { type: Schema.Types.ObjectId, ref: 'Photo' },
  trailer: { type: Schema.Types.ObjectId, ref: 'Video' },
  landmark: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IMovie>('Movie', MovieSchema);
