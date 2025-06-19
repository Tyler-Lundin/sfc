"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shirt, Dumbbell, Droplets, ShoppingBag } from "lucide-react";

interface MerchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MerchDrawer({ isOpen, onClose }: MerchDrawerProps) {
  const merchItems = [
    {
      id: 1,
      name: "Gym Apparel",
      icon: Shirt,
      description: "Performance wear & casual fitness clothing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Fitness Equipment",
      icon: Dumbbell,
      description: "Weights, resistance bands & accessories",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Hydration",
      icon: Droplets,
      description: "Water bottles & supplements",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Gym Bags",
      icon: ShoppingBag,
      description: "Duffel bags & backpacks",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-[90]"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-[95] bg-white dark:bg-gray-900 rounded-t-3xl shadow-2xl max-h-[80vh] overflow-hidden"
          >
            {/* Handle */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
            </div>
            
            {/* Header */}
            <div className="px-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Merchandise
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Get your Suncrest Fitness gear
              </p>
            </div>
            
            {/* Content */}
            <div className="px-6 py-6 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-2 gap-4">
                {merchItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group cursor-pointer"
                  >
                    <div className={`bg-gradient-to-br ${item.color} p-4 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="flex flex-col items-center text-center space-y-2">
                        <item.icon className="w-8 h-8" />
                        <h3 className="font-semibold text-sm">{item.name}</h3>
                        <p className="text-xs opacity-90 leading-tight">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-6"
              >
                <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  View All Merchandise
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 