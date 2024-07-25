import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RazorpayComponent from '../../payment/Payment';

export const Course = () => {
  const myStyle = { width: '18rem',};
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4444/view-courses')
      .then(response => {
        setCourses(response.data.courses);
        console.log('URL is fine');
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <>
      {Array.isArray(courses) && courses.length > 0 ? (
        courses.map(course => (
          <div key={course.id} className="col-lg-3 col-md-4 col-sm-6 mb-4 mt-5">
            <div className="card" style={myStyle}>
              <img src={course.img} className="card-img-top" alt="Course Thumbnail" />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
              </div>
              <div className="card-body">
                <button className="btn btn-primary">Add to Cart</button>&nbsp;&nbsp;
                <RazorpayComponent/>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No courses available</p>
      )}
    </>
  );
}
