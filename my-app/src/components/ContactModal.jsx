'use client';
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setErrors({});
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const toastId = toast.info("Sending message...", {
      autoClose: 1000, 
    });

    try {
      await axios.post('https://email-sender-2our.onrender.com/send-email', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      toast.dismiss(toastId);
      toast.success("Message sent successfully!", {
        autoClose: 2000, 
      });
      handleClose();
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Failed to send message. Please try again later.", {
        autoClose: 2000, 
      });
    }
  };

  return (
    <div className="">
      <button
        onClick={handleOpen}
        className="text-[#E6E6E6] rounded-md focus:outline-none"
      >
        Contact Us
      </button>

      {isOpen && (
        <div className="fixed mt-6 inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50 ">
          <div className="relative sm:m-0 ml-3 mr-3 w-full max-w-lg p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-300">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white"
            >
              ✕
            </button>
            <h2 className="mb-4 text-2xl font-semibold text-white">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="transition-all duration-300">
                <label className="block mb-1 text-white" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md border-opacity-20 focus:border-gray-500 focus:border-2 focus:ring-0 focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1 transition-all duration-300">{errors.name}</p>}
              </div>
              <div className="transition-all duration-300">
                <label className="block mb-1 text-white" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md border border-white border-opacity-20 focus:border-gray-500 focus:border-2 focus:ring-0 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Your Email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1 transition-all duration-300">{errors.email}</p>}
              </div>
              <div className="transition-all duration-300">
                <label className="block mb-1 text-white" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md border border-white border-opacity-20 focus:border-gray-500 focus:border-2 focus:ring-0 focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Your Message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1 transition-all duration-300">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-black bg-opacity-40 backdrop-blur-md rounded-md hover:bg-opacity-30 transition-all duration-200 border border-white border-opacity-20 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
