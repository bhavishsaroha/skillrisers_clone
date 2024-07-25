import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../../shared/components/Header';
import { Footer } from '../../shared/components/Footer';
import RazorpayComponent from '../payment/Payment'

export const Cart = () => {
  const [courses, setCartItems] = useState([]);
  
  useEffect(() => {
    // Fetch cart data from the JSON file hosted on GitHub
    axios.get('http://localhost:4444/view-courses')
      .then(response => {
        setCartItems(response.data.courses);
        console.log('Cart data loaded');
      })
      .catch(error => {
        console.error('Error fetching cart data:', error);
      });
  }, []);

  const totalPrice = courses.reduce((total, course) => total + course.cost, 0);

  const handleRemoveItem = (id) => {
    setCartItems(courses.filter(course => course.id !== id));
  };

  return (
    <>
    <Header />
    <div className="container">
      <h2>Cart</h2>
      {courses.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.cost}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleRemoveItem(course.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Price: {totalPrice.toFixed(2)}</h3>
          <RazorpayComponent/>
        </div>
      )}
    </div>
    <Footer/>

    </>
  );
};
