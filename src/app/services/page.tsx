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

// Services data
const mainServices = [
  {
    title: "Racquetball/Volleyball Courts",
    description: "Professional courts for competitive play and recreational activities",
    image: "/images/old/group.jpeg",
    features: ["Professional grade courts", "Competitive play", "Recreational activities", "Cardio-intensive workouts"]
  },
  {
    title: "Infrared Heat Saunas",
    description: "Advanced infrared technology for health and wellness benefits",
    image: "/images/old/yoga.jpeg",
    features: [
      "Pain Relief - reduces inflammation and soreness",
      "Detoxification - removes toxins and chemicals",
      "Chronic fatigue - increases energy levels",
      "Weight loss - increases metabolism and burns fat",
      "Heart health - lowers blood pressure and cholesterol"
    ]
  },
  {
    title: "Aquamassage",
    description: "Dry hydrotherapy bed for relaxation and recovery",
    image: "/images/old/outside.jpeg",
    features: ["Dry hydrotherapy technology", "Deep tissue massage", "Relaxation and recovery", "Stress relief"]
  }
];

const equipmentList = [
  "Free weights",
  "Free Motion circuit equipment",
  "SportsArt Ellipticals",
  "SportsArt Treadmills",
  "Jacobs Ladder",
  "Viper rope",
  "Kettlebells",
  "Chin up bars",
  "Rowing machine",
  "Medicine balls",
  "Upright Bikes",
  "Upper Body Ergometer",
  "Stair climber",
  "Heavy bag/Jump ropes"
];

const additionalServices = [
  {
    title: "Personal Training",
    description: "One complimentary half hour session upon sign up as well as great discounts the first time you purchase.",
    note: "Please contact us for training prices."
  },
  {
    title: "Classes",
    description: "Many included in membership. Non-members always welcome!",
    note: "Variety of fitness classes available"
  },
  {
    title: "Shower Facilities",
    description: "Clean, private shower facilities available",
    note: "$5 usage for non-members"
  },
  {
    title: "Locker Rooms",
    description: "Secure daily locker storage",
    note: "Free daily use for members"
  }
];

export default function ServicesPage() {
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
              SERVICES
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive fitness services and amenities for your health journey
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
            OUR SERVICES
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            You have fitness goals. We have the resources and people to make them a reality. However and whenever you like to work out, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Main Services */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className={`${fugazOne.className} text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center`}>
            PREMIUM AMENITIES
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className={`${roboto.className} text-xl font-bold text-gray-900 dark:text-white mb-3`}>
                    {service.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Equipment Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8">
            <h3 className={`${fugazOne.className} text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center`}>
              STATE-OF-THE-ART EQUIPMENT
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
              Too good to be true? Check out all that we offer:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {equipmentList.map((equipment, index) => (
                <motion.div
                  key={equipment}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#e8073b] rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {equipment}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-lg font-semibold text-[#e8073b]">
                and much more!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Services */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`${fugazOne.className} text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center`}>
            ADDITIONAL SERVICES
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className={`${roboto.className} text-xl font-bold text-gray-900 dark:text-white mb-3`}>
                  {service.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {service.description}
                </p>
                {service.note && (
                  <p className="text-sm text-[#e8073b] font-semibold">
                    {service.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#e8073b] to-red-600 rounded-3xl p-8 text-center text-white">
            <h3 className={`${fugazOne.className} text-3xl font-bold mb-6`}>
              CONTACT US
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className={`${roboto.className} text-lg font-semibold mb-2`}>Phone</h4>
                <p className="text-white/90">(509) 465.0131</p>
              </div>
              <div>
                <h4 className={`${roboto.className} text-lg font-semibold mb-2`}>Fax</h4>
                <p className="text-white/90">(509) 467.8663</p>
              </div>
              <div>
                <h4 className={`${roboto.className} text-lg font-semibold mb-2`}>Email</h4>
                <p className="text-white/90">manager@suncrestfitnesscenter.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h2 className={`${fugazOne.className} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6`}>
            READY TO GET STARTED?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience all our services and amenities with a flexible membership. No contracts, no initiation fees!
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