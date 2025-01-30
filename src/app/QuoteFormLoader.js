"use client"
import QuoteForm from "@/components/utilities/Header/helper/QuoteForm";
import { useEffect, useState } from "react";

export default function QuoteFormLoader() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuoteForm(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);

  const handleClose = () => {
    setShowQuoteForm(false);
  };

  return <>{showQuoteForm && <QuoteForm onClose={handleClose} />}</>; // Conditionally render QuoteForm after delay
}
