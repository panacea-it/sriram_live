'use client';

import React from 'react';
import { X } from 'lucide-react';

interface EnquiryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryFormModal: React.FC<EnquiryFormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300 flex flex-col md:flex-row min-h-[500px]">
        
        {/* Left Side: Image Section */}
        <div className="hidden md:block md:w-[45%] relative">
          <img 
            src="/assets/modal-img-1.png" 
            alt="Sriram's IAS" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Form Section */}
        <div className="flex-1 p-6 md:p-10 flex flex-col justify-center bg-white relative">
          {/* Close Button */}
          <button 
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 hover:bg-gray-100 rounded-full text-gray-400 transition-colors z-20"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Enquiry Form</h2>
            <span className="text-2xl">📋</span>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400 font-normal ml-1">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-[#E0F2F9] border-none rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-[#20A0E0] outline-none transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400 font-normal ml-1">Mobile Number</label>
              <input 
                type="tel" 
                className="w-full bg-[#E0F2F9] border-none rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-[#20A0E0] outline-none transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400 font-normal ml-1">Email ID</label>
              <input 
                type="email" 
                className="w-full bg-[#E0F2F9] border-none rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-[#20A0E0] outline-none transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400 font-normal ml-1">Course</label>
              <div className="relative">
                <select 
                  className="w-full bg-[#E0F2F9] border-none rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-[#20A0E0] outline-none appearance-none transition-all cursor-pointer text-gray-600"
                  defaultValue=""
                >
                  <option value="" disabled hidden>Choose course</option>
                  <option value="gs-foundation">GS Foundation Course</option>
                  <option value="optional">Optional Subjects</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400 font-normal ml-1">Center</label>
              <div className="relative">
                <select 
                  className="w-full bg-[#E0F2F9] border-none rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-[#20A0E0] outline-none appearance-none transition-all cursor-pointer text-gray-600"
                  defaultValue=""
                >
                  <option value="" disabled hidden>Choose course</option>
                  <option value="gs-foundation">GS Foundation Course</option>
                  <option value="optional">Optional Subjects</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>


            <div className="pt-4">
              <button 
                type="submit"
                className="w-full text-white font-medium py-3 rounded-xl shadow-md hover:brightness-105 active:scale-[0.99] transition-all"
                style={{
                  background: 'linear-gradient(90deg, #37B6E9 0%, #0077B6 100%)'
                }}
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryFormModal;
