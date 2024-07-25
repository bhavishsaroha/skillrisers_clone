import { Course } from "../models/courses-schema.js";


export const getCourses= async (request,response,next)=>{
    try{
        const docs= await Course.find({}).exec();
        response.status(200).json({"courses" :docs});
    }
    catch(err){
        response.status(500).json({message : "No record found"});

    }
}

export const addCourses = async (request, response) => {
  console.log('Request body:', request.body); // Debugging line

  const { id, title, description, img, instructor, duration, cost } = request.body || {};

  // Validate incoming data
  if (id === undefined || !title || !description || !img || !instructor || duration === undefined || cost === undefined) {
    return response.status(400).json({ message: 'Missing required fields' });
  }

  // Create a new course instance
  const course = new Course({
    id,
    title,
    description,
    img,
    instructor,
    duration,
    cost,
  });
      try {
        const newCourse = await course.save();
        response.status(201).json(newCourse);
      } catch (err) {
        response.status(400).json({ message: err.message });
      }
}

