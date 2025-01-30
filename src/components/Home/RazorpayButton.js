"use client"
import { useEffect } from 'react';

const RazorpayButton = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_P6pPrt0NUEheLP');
    script.async = true;

    // Append the script to the form element
    document.getElementById('razorpay-form').appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      if (document.getElementById('razorpay-form')) {
        document.getElementById('razorpay-form').removeChild(script);
      }
    };
  }, []);

  return <form id="razorpay-form"></form>;
};

export default RazorpayButton;
