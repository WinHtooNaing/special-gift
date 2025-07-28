// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function LoveNotePage() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-rose-300">
//       <div
//         className="relative w-[280px] h-[160px] cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {/* Envelope back */}
//         <div className="absolute inset-0 bg-rose-400 rounded-lg shadow-lg" />

//         {/* Note sliding out */}
//         <motion.div
//           initial={{ y: 60, opacity: 0 }}
//           animate={isOpen ? { y: -30, opacity: 1 } : { y: 60, opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute left-1/2 -translate-x-1/2 top-0 w-[220px] h-[120px] bg-white rounded-md shadow-lg p-3 text-center"
//         >
//           <h2 className="text-rose-600 font-bold text-base">Dear My Babe 💕</h2>
//           <p className="text-rose-700 text-xs mt-1 leading-snug">
//             You are my favorite story, my sweetest melody, and my forever love.
//             💌
//           </p>
//         </motion.div>

//         {/* Envelope flap */}
//         <motion.div
//           className="absolute top-0 left-0 w-full h-[90px] bg-rose-500 origin-bottom rounded-t-md shadow-md"
//           animate={{ rotateX: isOpen ? -180 : 0 }}
//           transition={{ duration: 0.8 }}
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-base">❤️</span>
//           </div>
//         </motion.div>

//         {/* Envelope front (bottom part) */}
//         <div className="absolute bottom-0 w-full h-[100px] bg-rose-500 rounded-b-md shadow-md flex items-center justify-center">
//           <span className="text-sm">❤️</span>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LoveNotePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-rose-300">
      <div
        className="relative w-[280px] h-[160px] cursor-pointer perspective-[1000px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Envelope back (backmost) */}
        <div className="absolute inset-0 bg-rose-400 rounded-lg shadow-lg z-0" />

        {/* Note sliding out (in front of envelope back) */}
        <motion.div
          initial={false}
          animate={isOpen ? { y: -50, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute left-1/2 -translate-x-1/2 top-0 z-10 w-[220px] h-[120px] bg-white rounded-md shadow-lg p-3 text-center"
        >
          <h2 className="text-rose-600 font-bold text-base">Dear My Babe 💕</h2>
          <p className="text-rose-700 text-xs mt-1 leading-snug">
            I will love you until my very last breath.
            <br />
            You are my always and forever. 💖
          </p>
        </motion.div>

        {/* Envelope bottom (middle front) */}
        <div className="absolute bottom-0 w-full h-[100px] bg-rose-500 rounded-b-md shadow-md flex items-center justify-center z-20">
          <span className="text-sm">❤️</span>
        </div>

        {/* Flap (top/frontmost) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[90px] bg-rose-500 origin-top rounded-t-md shadow-lg z-30"
          animate={{ rotateX: isOpen ? -180 : 0 }}
          transition={{ duration: 0.8 }}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "top",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg">💌</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
