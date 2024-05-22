"use client";
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:JacobRigney@gmail.com?subject=Contact%20from%20${name}&body=Name:%20${name}%0AEmail:%20${email}%0A%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full px-8 md:px-16 py-24 flex flex-col items-center">
      <div className="w-full mb-8 md:w-2/3 flex flex-col md:flex-row">
        <div className="flex-grow">
          <div className="flex flex-row w-full mb-4">
          <div className="flex-grow border-t border-neutral-800 mt-4 mr-6"></div>
            <span className="text-primary text-2xl">
              04.
              <span className="text-light-purple-200 text-3xl pl-2 pr-6">Contact Me</span>
            </span>
            <div className="flex-grow border-t border-neutral-800 mt-4"></div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 outline outline-[1px] rounded-lg p-12 m-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-primary">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-primary rounded-sm p-2 bg-transparent text-light-purple-200"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-primary">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-primary rounded-sm p-2 bg-transparent text-light-purple-200"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-primary">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-primary rounded-sm p-2 bg-transparent text-light-purple-200"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="text-primary border border-primary p-2 mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
