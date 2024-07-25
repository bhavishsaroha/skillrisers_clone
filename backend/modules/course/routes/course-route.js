import express from "express";
import { addCourses, getCourses } from "../controller/course-controller.js";

export const courseroutes= express.Router();


courseroutes.get('/view-courses',getCourses);
courseroutes.post('/add-courses',addCourses);




// routes.put('/update-courses', (request,response)=>{
//     response.send('Products');
// })

// routes.get('/search-courses', (request,response)=>{
//     response.send('Products');
// })