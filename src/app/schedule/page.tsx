"use client";
import { motion } from "framer-motion";
import { Fugaz_One } from "next/font/google";
import { useState } from "react";

const fugazOne = Fugaz_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

interface ClassData {
  id: number;
  name: string;
  instructor: string;
  day: string;
  startTime: string;
  endTime: string;
  color: string;
}


// Sample class data
const sampleClasses = [
  {
    id: 1,
    name: "Morning Yoga",
    instructor: "Sarah Johnson",
    day: "Monday",
    startTime: "6:00",
    endTime: "7:00",
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Cardio Kickboxing",
    instructor: "Mike Chen",
    day: "Monday",
    startTime: "8:00",
    endTime: "9:00",
    color: "bg-red-500"
  },
  {
    id: 3,
    name: "Strength Training",
    instructor: "Lisa Rodriguez",
    day: "Monday",
    startTime: "17:00",
    endTime: "18:00",
    color: "bg-green-500"
  },
  {
    id: 4,
    name: "Zumba",
    instructor: "Maria Garcia",
    day: "Tuesday",
    startTime: "6:30",
    endTime: "7:30",
    color: "bg-purple-500"
  },
  {
    id: 5,
    name: "Pilates",
    instructor: "David Kim",
    day: "Tuesday",
    startTime: "18:00",
    endTime: "19:00",
    color: "bg-yellow-500"
  },
  {
    id: 6,
    name: "HIIT Training",
    instructor: "Alex Thompson",
    day: "Wednesday",
    startTime: "6:00",
    endTime: "7:00",
    color: "bg-orange-500"
  },
  {
    id: 7,
    name: "Spinning",
    instructor: "Jennifer Lee",
    day: "Wednesday",
    startTime: "19:00",
    endTime: "20:00",
    color: "bg-pink-500"
  },
  {
    id: 8,
    name: "Core & Abs",
    instructor: "Chris Wilson",
    day: "Thursday",
    startTime: "6:30",
    endTime: "7:30",
    color: "bg-indigo-500"
  },
  {
    id: 9,
    name: "Boxing",
    instructor: "Tony Martinez",
    day: "Thursday",
    startTime: "18:30",
    endTime: "19:30",
    color: "bg-red-600"
  },
  {
    id: 10,
    name: "Stretch & Flex",
    instructor: "Emma Davis",
    day: "Friday",
    startTime: "6:00",
    endTime: "7:00",
    color: "bg-teal-500"
  },
  {
    id: 11,
    name: "Boot Camp",
    instructor: "Ryan O'Connor",
    day: "Friday",
    startTime: "17:00",
    endTime: "18:00",
    color: "bg-gray-600"
  },
  {
    id: 12,
    name: "Yoga Flow",
    instructor: "Sarah Johnson",
    day: "Saturday",
    startTime: "8:00",
    endTime: "9:00",
    color: "bg-blue-500"
  },
  {
    id: 13,
    name: "Family Fitness",
    instructor: "Lisa Rodriguez",
    day: "Saturday",
    startTime: "10:00",
    endTime: "11:00",
    color: "bg-green-500"
  },
  {
    id: 14,
    name: "Senior Stretch",
    instructor: "Emma Davis",
    day: "Sunday",
    startTime: "9:00",
    endTime: "10:00",
    color: "bg-teal-500"
  },
  {
    id: 15,
    name: "Meditation",
    instructor: "David Kim",
    day: "Sunday",
    startTime: "18:00",
    endTime: "19:00",
    color: "bg-purple-500"
  }
] as ClassData[];

// Generate time slots from 6am to 9pm in 30-minute intervals
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 6; hour <= 21; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push(time);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Helper function to convert time to minutes for comparison
const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

// Helper function to check if a class is active at a given time
const isClassActive = (classData: ClassData, timeSlot: string) => {
  const slotMinutes = timeToMinutes(timeSlot);
  const startMinutes = timeToMinutes(classData.startTime);
  const endMinutes = timeToMinutes(classData.endTime);
  return slotMinutes >= startMinutes && slotMinutes < endMinutes;
};

// Helper function to get class for a specific day and time
const getClassForTimeSlot = (day: string, timeSlot: string) => {
  return sampleClasses.find(classData => 
    classData.day === day && isClassActive(classData, timeSlot)
  );
};

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-[#e8073b] to-red-600">
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              className={`${fugazOne.className} text-5xl md:text-7xl font-bold text-white mb-4`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              CLASS SCHEDULE
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Weekly fitness classes and activities
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`${fugazOne.className} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6`}>
            WEEKLY SCHEDULE
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our diverse range of fitness classes led by experienced instructors. All classes are included in your membership!
          </p>
        </motion.div>

        {/* Day Navigation */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(selectedDay === day ? null : day)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedDay === day
                    ? 'bg-[#e8073b] text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Schedule Table */}
        <motion.div 
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="min-w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-8 border-b border-gray-200 dark:border-gray-700">
              {/* Time column header */}
              <div className="p-4 bg-gray-50 dark:bg-gray-700 font-semibold text-gray-900 dark:text-white">
                Time
              </div>
              {/* Day headers */}
              {days.map((day) => (
                <div 
                  key={day}
                  className={`p-4 font-semibold text-center text-gray-900 dark:text-white ${
                    selectedDay === day ? 'bg-[#e8073b] text-white' : 'bg-gray-50 dark:bg-gray-700'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Time slots */}
            {timeSlots.map((timeSlot, timeIndex) => (
              <div 
                key={timeSlot}
                className={`grid grid-cols-8 border-b border-gray-200 dark:border-gray-700 ${
                  timeIndex % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'
                }`}
              >
                {/* Time slot */}
                <div className="p-3 text-sm font-medium text-gray-600 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600">
                  {timeSlot}
                </div>
                
                {/* Day columns */}
                {days.map((day) => {
                  const classData = getClassForTimeSlot(day, timeSlot);
                  const isStartTime = classData && timeSlot === classData.startTime;
                  
                  return (
                    <div 
                      key={day}
                      className={`p-3 min-h-[60px] border-r border-gray-200 dark:border-gray-600 ${
                        selectedDay && selectedDay !== day ? 'opacity-30' : ''
                      }`}
                    >
                      {isStartTime && classData && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`${classData.color} text-white p-2 rounded-lg text-xs font-medium shadow-md`}
                        >
                          <div className="font-bold mb-1">{classData.name}</div>
                          <div className="text-xs opacity-90">{classData.instructor}</div>
                          <div className="text-xs opacity-90">
                            {classData.startTime} - {classData.endTime}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Class Legend */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`${fugazOne.className} text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center`}>
            CLASS TYPES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array.from(new Set(sampleClasses.map(c => c.color))).map((color) => {
              const classType = sampleClasses.find(c => c.color === color);
              return (
                <div key={color} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className={`w-4 h-4 ${color} rounded-full`}></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {classType?.name.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16 py-16 bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`${fugazOne.className} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6`}>
            JOIN A CLASS TODAY
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            All classes are included in your membership. No additional fees required!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#e8073b] to-red-600 hover:from-red-700 hover:to-red-700 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET MEMBERSHIP
            </motion.a>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT US
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 