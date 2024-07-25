import mongoose,{ SchemaTypes } from "mongoose";

const CoursesSchema = mongoose.Schema({
    id : { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    instructor: { type: String, required: true },
    duration: { type: String, required: true },
    cost: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now,}
});


export const Course = mongoose.model('courses', CoursesSchema);

