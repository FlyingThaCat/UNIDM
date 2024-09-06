import React from 'react';
import { motion } from 'framer-motion';

export const ScreenWarning = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-black p-6 rounded shadow-lg max-w-sm mx-auto">
        <h2 className="text-xl font-bold">Warning</h2>
        <p className="mt-2 text-justify">This app is currently unoptimized for phone and tablet devices. With the current deadline, i cant finish it on time but i will update it again if i have time tommorow</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};
