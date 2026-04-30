// 'use client';

// import React from 'react';
// import Image from 'next/image';

// interface BookFreeDemoModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const BookFreeDemoModal: React.FC<BookFreeDemoModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div 
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
//         onClick={onClose}
//       />

//       {/* Modal Container */}
//       <div className="relative bg-white rounded-[32px] w-full max-w-[1000px] flex overflow-hidden shadow-2xl z-10 font-['Montserrat'] min-h-[600px]">
        
//         {/* Background wavy lines */}
//         <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
//           <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid slice">
//             <path d="M600 -100 C700 100, 500 300, 800 600" stroke="url(#pink-gradient)" strokeWidth="1" />
//             <path d="M620 -100 C720 100, 520 300, 820 600" stroke="url(#pink-gradient)" strokeWidth="1" />
//             <path d="M640 -100 C740 100, 540 300, 840 600" stroke="url(#pink-gradient)" strokeWidth="1" />
//             <path d="M660 -100 C760 100, 560 300, 860 600" stroke="url(#pink-gradient)" strokeWidth="1" />
            
//             <path d="M-100 200 C100 250, 300 450, 500 700" stroke="url(#blue-gradient)" strokeWidth="1" />
//             <path d="M-100 220 C100 270, 300 470, 500 720" stroke="url(#blue-gradient)" strokeWidth="1" />
//             <path d="M-100 240 C100 290, 300 490, 500 740" stroke="url(#blue-gradient)" strokeWidth="1" />
//             <path d="M-100 260 C100 310, 300 510, 500 760" stroke="url(#blue-gradient)" strokeWidth="1" />

//             <defs>
//               <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#FF66CC" />
//                 <stop offset="100%" stopColor="#CC33FF" />
//               </linearGradient>
//               <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#3399FF" />
//                 <stop offset="100%" stopColor="#0066FF" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>

//         {/* Close Button */}
//         <button 
//           onClick={onClose}
//           className="absolute top-6 right-6 z-20 text-gray-400 hover:text-gray-800 transition-colors bg-white/50 rounded-full p-1"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <line x1="18" y1="6" x2="6" y2="18"></line>
//             <line x1="6" y1="6" x2="18" y2="18"></line>
//           </svg>
//         </button>

//         {/* Left Side - Image Collage */}
//         <div className="w-[45%] relative z-10 hidden md:block pl-8 py-12">
//           <div className="relative w-full h-full flex flex-col items-center justify-center">
            
//             {/* Top Left - Squircle Image */}
//             <div className="absolute top-0 left-0 w-[180px] h-[200px] rounded-[30px] overflow-hidden shadow-lg z-20">
//               <Image 
//                 src="/assets/why-choose/how-will-3.png" 
//                 alt="Student writing" 
//                 fill 
//                 className="object-cover"
//               />
//             </div>

//             {/* Top Right - Circle Image */}
//             <div className="absolute top-[20px] right-0 w-[220px] h-[220px] rounded-full overflow-hidden shadow-lg z-10">
//               <Image 
//                 src="/assets/why-choose/how-will-1.png" 
//                 alt="Students discussing" 
//                 fill 
//                 className="object-cover"
//               />
//             </div>

//             {/* Bottom - Large Circle Image */}
//             <div className="absolute bottom-0 left-[-20px] w-[320px] h-[320px] rounded-full overflow-hidden shadow-xl z-30 border-4 border-white">
//               <Image 
//                 src="/assets/why-choose/how-will-2.png" 
//                 alt="Student thinking" 
//                 fill 
//                 className="object-cover"
//               />
//             </div>
            
//           </div>
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full md:w-[55%] p-10 md:p-14 relative z-10 flex flex-col justify-center">
//           <h2 className="text-[32px] font-extrabold text-center mb-10 text-black">
//             Book Free Demo
//           </h2>

//           <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
//             {/* Name and Mobile Row */}
//             <div className="flex flex-col sm:flex-row gap-5">
//               <div className="flex-1">
//                 <label className="block text-sm text-gray-500 font-medium mb-1.5 ml-1">Full Name</label>
//                 <input 
//                   type="text" 
//                   className="w-full bg-[#D7EEF7] border-none rounded-xl px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-[#1897D8]/50"
//                 />
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm text-gray-500 font-medium mb-1.5 ml-1">Mobile Number</label>
//                 <input 
//                   type="tel" 
//                   className="w-full bg-[#D7EEF7] border-none rounded-xl px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-[#1897D8]/50"
//                 />
//               </div>
//             </div>

//             {/* Course and Target Year Row */}
//             <div className="flex flex-col sm:flex-row gap-5">
//               <div className="flex-[2]">
//                 <label className="block text-sm text-gray-500 font-medium mb-1.5 ml-1">Course</label>
//                 <div className="relative">
//                   <select className="w-full bg-[#D7EEF7] border-none rounded-xl px-4 py-3 text-gray-800 outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-[#1897D8]/50">
//                     <option value="" disabled selected>Choose Course</option>
//                     <option value="gs-foundation">GS Foundation</option>
//                     <option value="mentorship">Mentorship</option>
//                     <option value="optional">Optional Subjects</option>
//                   </select>
//                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
//                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                       <polyline points="6 9 12 15 18 9"></polyline>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm text-gray-500 font-medium mb-1.5 ml-1">Target Year For UPSC CSE</label>
//                 <div className="relative">
//                   <select className="w-full bg-[#D7EEF7] border-none rounded-xl px-4 py-3 text-gray-800 outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-[#1897D8]/50">
//                     <option value="2025">2025</option>
//                     <option value="2026" selected>2026</option>
//                     <option value="2027">2027</option>
//                   </select>
//                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
//                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                       <polyline points="6 9 12 15 18 9"></polyline>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Center Selection */}
//             <div>
//               <label className="block text-sm text-gray-500 font-medium mb-1.5 ml-1">Center</label>
//               <div className="relative">
//                 <select className="w-full bg-[#D7EEF7] border-none rounded-xl px-4 py-3 text-gray-800 outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-[#1897D8]/50">
//                   <option value="" disabled selected>Choose Center</option>
//                   <option value="delhi">New Delhi</option>
//                   <option value="hyderabad">Hyderabad</option>
//                   <option value="pune">Pune</option>
//                 </select>
//                 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
//                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                     <polyline points="6 9 12 15 18 9"></polyline>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Expectations */}
//             <div>
//               <label className="block text-sm text-gray-500 font-medium mb-1.5 ml-1">What are your expectation from the Course ?</label>
//               <textarea 
//                 rows={3}
//                 className="w-full bg-[#D7EEF7] border-none rounded-xl px-4 py-3 text-gray-800 outline-none resize-none focus:ring-2 focus:ring-[#1897D8]/50"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center pt-4">
//               <button 
//                 type="submit"
//                 className="bg-gradient-to-r from-[#2DB4FF] to-[#0A6296] text-white font-semibold text-[16px] px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
//               >
//                 Book Your Session
//               </button>
//             </div>

//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default BookFreeDemoModal;

'use client';

import React from 'react';
import Image from 'next/image';

interface BookFreeDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookFreeDemoModal: React.FC<BookFreeDemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-[32px] w-full max-w-[1300px] flex overflow-hidden shadow-2xl z-10 font-['Montserrat'] min-h-[600px]">
        
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/assets/free-demo-bgs.png"
            alt="Background styling"
            fill
            className="object-cover opacity-80"
          />
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 text-gray-400 hover:text-gray-800 transition-colors bg-white/50 rounded-full p-1"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Left Side - Image Collage */}
        <div className="w-[45%] relative z-10 hidden md:flex items-center justify-center pl-4 py-8">
          {/* Fixed dimensions container to maintain perfect overlapping ratios */}
          <div className="relative w-[380px] h-[480px]">
            
            {/* Top Left - Squircle Image */}
            <div className="absolute top-[30px] left-[10px] w-[170px] h-[170px] rounded-[35px] overflow-hidden shadow-lg z-10 bg-gray-200">
              <Image
                src="/assets/why-choose/how-will-3.png"
                alt="Student writing"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Right - Circle Image */}
            <div className="absolute top-[20px] right-[-20%] w-[275px] h-[248px] rounded-[132px] overflow-hidden shadow-md z-20 bg-gray-200">
              <Image
                src="/assets/why-choose/how-will-1.png"
                alt="Students discussing"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom - Large Circle Image */}
            <div className="absolute bottom-[-10%] left-[30px] w-[400px] h-[300px] rounded-[300px] overflow-hidden shadow-2xl z-30 ">
              <Image
                src="/assets/why-choose/how-will-2.png"
                alt="Student thinking"
                fill
                className="object-cover"
              />
            </div>
            
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-[55%] p-10 md:p-14 relative z-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-10 text-black">
            Book Free Demo
          </h2>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name and Mobile Row */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1">
                <label className="block text-sm text-[#00000080] font-medium mb-1.5 ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#D7EEF7] border-none rounded-xl px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-[#1897D8]/50"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-[#00000080] font-medium mb-1.5 ml-1">Mobile Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-[#D7EEF7] border-none rounded-xl px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-[#1897D8]/50"
                />
              </div>
            </div>

            {/* Course and Target Year Row */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1 min-w-0">
                <label className="block text-sm text-[#00000080] font-medium mb-1.5 ml-1">Course</label>
                <div className="relative">
                  <select defaultValue="" className="w-full bg-[#D7EEF7] border-none rounded-xl px-4 py-3 text-gray-800 outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-[#1897D8]/50">
                    <option value="" disabled>Choose Course</option>
                    <option value="gs-foundation">GS Foundation</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="optional">Optional Subjects</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-800">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-sm text-[#00000080] font-medium mb-1.5 ml-1 truncate">Target Year For UPSC CSE</label>
                <div className="relative">
                  <select defaultValue="2026" className="w-full bg-[#D7EEF7] border-none rounded-xl px-4 py-3 text-gray-800 outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-[#1897D8]/50">
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-800">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Selection */}
            <div>
              <label className="block text-sm text-[#00000080] font-medium mb-1.5 ml-1">Center</label>
              <div className="relative">
                <select defaultValue="" className="w-full bg-[#D7EEF7] border-none rounded-xl px-4 py-3 text-gray-800 outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-[#1897D8]/50">
                  <option value="" disabled>Choose Center</option>
                  <option value="delhi">New Delhi</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-800">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* Expectations */}
            <div>
              <label className="block text-sm text-[#00000080] font-medium mb-1.5 ml-1">What are your expectation from the Course ?</label>
              <textarea 
                rows={3}
                className="w-full bg-[#D7EEF7] border-none rounded-xl px-4 py-3 text-gray-800 outline-none resize-none focus:ring-2 focus:ring-[#1897D8]/50"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button 
                type="submit"
                className="text-white font-semibold text-[18px] px-10 py-3.5 rounded-full shadow-[0px_4px_32px_0px_#0000001A] hover:scale-105 hover:shadow-xl transition-all duration-300"
                style={{ background: 'linear-gradient(90deg, rgba(0, 159, 238, 0.8) 34.5%, #005B88 100%)' }}
              >
                Book Your Session
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default BookFreeDemoModal;
