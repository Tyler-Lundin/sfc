"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fugaz_One, Roboto } from "next/font/google";
import { useState } from "react";

const fugazOne = Fugaz_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // For now, we'll just show an alert
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-[#e8073b] to-red-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/gym/equipment_2.jpg"
            alt="Suncrest Fitness Center"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8073b]/80 to-red-600/80" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              className={`${fugazOne.className} text-5xl md:text-7xl font-bold text-white mb-4`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              CONTACT US
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get in touch with our team
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`${fugazOne.className} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6`}>
            CONTACT INFORMATION
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Please feel free to message us with any questions, comments, or concerns. 
            We&apos;re here to help you on your fitness journey.
          </p>
        </motion.div>

        {/* Contact Information and Form */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className={`${fugazOne.className} text-3xl font-bold text-gray-900 dark:text-white mb-6`}>
                GET IN TOUCH
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                We&apos;d love to hear from you. Reach out to us through any of the following methods.
              </p>
            </div>

            {/* Address */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#e8073b] to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`${roboto.className} text-xl font-bold text-gray-900 dark:text-white mb-2`}>
                    Address
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    6066 Hwy 291<br />
                    P O BOX 549<br />
                    Nine Mile Falls, WA 99026
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#e8073b] to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`${roboto.className} text-xl font-bold text-gray-900 dark:text-white mb-2`}>
                    Phone & Fax
                  </h4>
                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Phone:</strong> (509) 465-0131
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Fax:</strong> (509) 467-8663
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#e8073b] to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`${roboto.className} text-xl font-bold text-gray-900 dark:text-white mb-2`}>
                    Email
                  </h4>
                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>General:</strong> 
                      <a href="mailto:info@suncrestfitness.com" className="text-[#e8073b] hover:underline ml-1">
                        info@suncrestfitness.com
                      </a>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Manager:</strong> 
                      <a href="mailto:manager@suncrestfitnesscenter.com" className="text-[#e8073b] hover:underline ml-1">
                        manager@suncrestfitnesscenter.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#e8073b] to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`${roboto.className} text-xl font-bold text-gray-900 dark:text-white mb-2`}>
                    Hours of Operation
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>24/7 Access</strong> for members<br />
                    Staff available during business hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className={`${fugazOne.className} text-3xl font-bold text-gray-900 dark:text-white mb-6`}>
                SEND US A MESSAGE
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#e8073b] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#e8073b] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#e8073b] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="(509) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#e8073b] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="classes">Class Information</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="physical-therapy">Physical Therapy</option>
                    <option value="merchandise">Merchandise</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#e8073b] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Please tell us how we can help you..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#e8073b] to-red-600 hover:from-red-700 hover:to-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`${fugazOne.className} text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center`}>
            FIND US
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  Suncrest Fitness Center
                </p>
                <p className="text-gray-500 dark:text-gray-500">
                  6066 Hwy 291, Nine Mile Falls, WA 99026
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-4">
                  Map integration can be added here
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center py-16 bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`${fugazOne.className} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6`}>
            READY TO GET STARTED?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our fitness community today and start your journey to a healthier lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#e8073b] to-red-600 hover:from-red-700 hover:to-red-700 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW MEMBERSHIPS
            </motion.a>
            <motion.a
              href="/tour"
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              TAKE A TOUR
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 