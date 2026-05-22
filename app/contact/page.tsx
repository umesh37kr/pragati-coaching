"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center">
              <FaPhone className="text-blue-600 text-xl mr-4" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 text-xl mr-4" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 text-xl mr-4" />
              <span>123 Main Street, City, Country</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
