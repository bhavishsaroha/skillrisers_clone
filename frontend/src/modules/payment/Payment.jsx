import React from 'react';

const RazorpayComponent = () => {
    const loadRazorpay = async () => {
      const res = await fetch('http://localhost:5000/razorpay/order', {
        method: 'POST',
      });
      const data = await res.json();
  
      const options = {
        key: 'YOUR_RAZORPAY_KEY',
        amount: data.amount,
        currency: data.currency,
        name: 'Skillriser_clone',
        description: 'Test Transaction',
        image: 'https://skillrisers.com/_next/image?url=%2Flogo.png&w=96&q=75',
        order_id: data.id,
        handler: function (response) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'Your Name',
          email: 'your.email@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#F37254',
        },
        modal: {
          ondismiss: function () {
            alert('Payment Cancelled');
          },
        },
      };
  
      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        alert(`Payment Failed! Error: ${response.error.description}`);
      });
      rzp1.open();
    };
  
    return (
      <button className="btn btn-primary" onClick={loadRazorpay}>
        Purchase
      </button>
    );
  };
  
  export default RazorpayComponent;