import React, { useState, useRef } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID_EMAILJS,
        process.env.REACT_APP_TEMPLATE_ID_EMAILJS,
        form.current,
        process.env.REACT_APP_PUBLIC_ID_EMAILJS
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          console.log(result.text);

          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Failed to send message, please try again!");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
        Get in Touch
      </h1>
      <p className="text-gray-600 mb-10 max-w-xl">
        Have questions or suggestions? Feel free to reach out to us.
      </p>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-12">
        <div className="p-6 bg-white shadow-lg rounded-2xl border flex flex-col items-center">
          <FaEnvelope className="text-3xl text-blue-500 mb-2" />
          <h2 className="text-lg font-semibold mb-1">Email</h2>
          <p className="text-gray-600">contact@bgremover.com</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl border flex flex-col items-center">
          <FaMapMarkerAlt className="text-3xl text-green-500 mb-2" />
          <h2 className="text-lg font-semibold mb-1">Location</h2>
          <p className="text-gray-600">Worldwide, Online Service</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-2/3 lg:w-1/2 p-8 bg-white shadow-lg rounded-2xl border">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-700">Name</label>
            <input
              type="text"
              name="user_name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-700">Message</label>
            <textarea
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
