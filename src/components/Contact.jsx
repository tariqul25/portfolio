import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle, Phone, MapPin, Facebook } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setIsSubmitted(true);
  };
  const handleSendAnother = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0">
            <div className="lg:col-span-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 md:p-10 text-white z-0">
              <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">Contact Information</h3>
              <p className="text-blue-100 mb-6 text-center lg:text-left">
                Feel free to reach out via email, or connect with me on social
                media.
              </p>

              {/* Email */}
              <span className="mx-2 flex   rounded-xl lg:-ml-2">
                <a
                  href="mailto:tariqulcst@gmail.com"
                  className="flex  gap-3 p-3 rounded-full  transition-colors"
                >
                  <Mail size={20} />
                  <span className="font-medium">tariqulcst@gmail.com</span>
                </a>
              </span>

              {/* Phone */}
              <span className="mx-2 flex   rounded-xl lg:-ml-2">
                <a
                  href="tel:+8801703301147"
                  className="flex  gap-3 p-3 rounded-full  transition-colors"
                >
                  <Phone size={20} />
                  <span className="font-medium">+880 17033-01147</span>
                </a>
              </span>

              {/* Location / Address */}
              <span className="mx-2 flex   rounded-xl lg:-ml-2">
                <a
                  href="https://goo.gl/maps/xyz" // or just "#" if you don't want a link
                  className="flex  gap-3 p-3 rounded-full  transition-colors"
                >
                  <MapPin size={20} />
                  <span className="font-medium">Kishoreganj, Bangladesh</span>
                </a>
              </span>



              {/* Socials */}
              <div className="mt-8 flex flex-col items-center lg:items-start">
                <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/tariqul25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tariqul25/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/tariqul25/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 bg-white rounded-xl shadow-2xl p-8 md:p-10 z-10 lg:-ml-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">
                    Send me a message
                  </h3>
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200 outline-none resize-none transition-colors"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-300 text-lg font-medium"
                  >
                    <Send className="mr-2" size={18} />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                  <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                  <button
                    onClick={handleSendAnother}
                    className="px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;