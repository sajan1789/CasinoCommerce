'use client'
import { useState } from "react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData); // For now, just logging the data
    // Optionally, clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    handleClose(); // Close the modal after submission
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
        <div className="fixed mt-6 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-lg p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white"
            >
              ✕
            </button>
            <h2 className="mb-4 text-2xl font-semibold text-white">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-white" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md  border-opacity-20 focus:border-gray-500 focus:border-2 focus:ring-0 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block mb-1 text-white" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md border border-white border-opacity-20 focus:border-gray-500 focus:border-2 focus:ring-0 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block mb-1 text-white" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md border border-white border-opacity-20 focus:border-gray-500 focus:border-2 focus:ring-0 focus:outline-none"
                  placeholder="Your Message"
                ></textarea>
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
    </div>
  );
}
