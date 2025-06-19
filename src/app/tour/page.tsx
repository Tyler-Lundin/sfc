"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fugaz_One, Roboto } from "next/font/google";

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

// Tour sections with images and descriptions
const tourSections = [
  {
    id: "main-equipment",
    title: "Main Equipment Area",
    subtitle: "Comprehensive Strength Training",
    description: "Our main equipment area features a wide variety of strength training equipment to target every muscle group.",
    image: "/images/gym/equipment.jpg",
    alt: "Main gym equipment area"
  },
  {
    id: "cardio-zone",
    title: "Cardio Zone",
    subtitle: "Cardiovascular Excellence",
    description: "State-of-the-art cardio equipment to boost your endurance and burn calories effectively.",
    image: "/images/gym/cardio.jpg",
    alt: "Cardio equipment area"
  },
  {
    id: "strength-equipment",
    title: "Advanced Strength Equipment",
    subtitle: "Professional Grade Machines",
    description: "Premium strength training machines designed for optimal muscle engagement and safety.",
    image: "/images/gym/equipment_2.jpg",
    alt: "Advanced strength training equipment"
  },
  {
    id: "bench-press",
    title: "Bench Press Station",
    subtitle: "Classic Strength Building",
    description: "Dedicated bench press area for developing chest, shoulders, and triceps strength.",
    image: "/images/gym/bench_press_2.jpg",
    alt: "Bench press equipment"
  },
  {
    id: "squat-rack",
    title: "Squat Rack",
    subtitle: "Lower Body Power",
    description: "Professional squat rack for building leg strength and overall power.",
    image: "/images/gym/squat_rack.jpg",
    alt: "Squat rack area"
  },
  {
    id: "deadlift-platform",
    title: "Deadlift Platform",
    subtitle: "Functional Strength",
    description: "Specialized deadlift platform for safe and effective compound movements.",
    image: "/images/gym/deadlift_platform.jpg",
    alt: "Deadlift platform"
  },
  {
    id: "smith-machine",
    title: "Smith Machine",
    subtitle: "Guided Strength Training",
    description: "Smith machine for controlled movements and rehabilitation exercises.",
    image: "/images/gym/smith_machine_2.jpg",
    alt: "Smith machine"
  },
  {
    id: "dumbbell-area",
    title: "Dumbbell Rack",
    subtitle: "Free Weight Training",
    description: "Complete dumbbell selection from light to heavy weights for all fitness levels.",
    image: "/images/gym/dumbbell_rack.jpg",
    alt: "Dumbbell rack area"
  },
  {
    id: "machines",
    title: "Specialized Machines",
    subtitle: "Targeted Training",
    description: "Isolation machines for focused muscle development and rehabilitation.",
    image: "/images/gym/machines.jpg",
    alt: "Specialized training machines"
  },
  {
    id: "racquetball",
    title: "Racquetball Court",
    subtitle: "High-Energy Sports",
    description: "Professional racquetball court for cardio-intensive competitive play.",
    image: "/images/gym/racquetball_2.jpg",
    alt: "Racquetball court"
  },
  {
    id: "yoga-room",
    title: "Yoga Studio",
    subtitle: "Mind-Body Wellness",
    description: "Serene yoga studio for flexibility, balance, and mental wellness.",
    image: "/images/gym/yoga_room.jpg",
    alt: "Yoga studio"
  },
  {
    id: "yoga-room-2",
    title: "Yoga Studio - Alternative View",
    subtitle: "Peaceful Environment",
    description: "Additional view of our calming yoga space designed for meditation and stretching.",
    image: "/images/gym/yoga_room_2.jpg",
    alt: "Yoga studio alternative view"
  },
  {
    id: "yoga-room-4",
    title: "Yoga Studio - Equipment",
    subtitle: "Complete Wellness Setup",
    description: "Well-equipped yoga space with all the props and equipment you need.",
    image: "/images/gym/yoga_room_4.jpg",
    alt: "Yoga studio with equipment"
  },
  {
    id: "yoga-room-7",
    title: "Yoga Studio - Final View",
    subtitle: "Tranquil Atmosphere",
    description: "Our peaceful yoga environment perfect for unwinding and rejuvenation.",
    image: "/images/gym/yoga_room_7.jpg",
    alt: "Yoga studio final view"
  },
  {
    id: "whiteboards",
    title: "Training Whiteboards",
    subtitle: "Goal Tracking & Motivation",
    description: "Whiteboards for tracking progress, setting goals, and staying motivated.",
    image: "/images/gym/whiteboards.jpg",
    alt: "Training whiteboards"
  }
];

export default function TourPage() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-[#e8073b] to-red-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/gym/equipment.jpg"
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
              FACILITY TOUR
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our state-of-the-art fitness center and discover the perfect environment for your fitness journey
            </motion.p>
          </div>
        </div>
      </div>

      {/* Tour Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-16">
          {tourSections.map((section, index) => (
            <motion.div
              key={section.id}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="flex-1">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-6">
                <div>
                  <motion.h2 
                    className={`${fugazOne.className} text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {section.title}
                  </motion.h2>
                  <motion.h3 
                    className={`${roboto.className} text-xl md:text-2xl font-semibold text-[#e8073b] dark:text-[#e8073b] mb-4`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {section.subtitle}
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {section.description}
                </motion.p>

                {/* Section Number */}
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#e8073b] to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Section {index + 1} of {tourSections.length}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20 py-16 bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`${fugazOne.className} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6`}>
            READY TO GET STARTED?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community and start your fitness journey today. Experience the difference that a world-class facility makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#e8073b] to-red-600 hover:from-red-700 hover:to-red-700 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN NOW
            </motion.a>
            <motion.a
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BACK TO HOME
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 