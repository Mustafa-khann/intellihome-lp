import React from 'react';

import config from '../config/index.json';

interface AboutOverlayProps {
  section: string;
  onClose: () => void;
}

const AboutOverlay: React.FC<AboutOverlayProps> = ({ section, onClose }) => {
  const { about } = config;
  const selectedSection = about.sections.find((s) => s.name === section);

  if (!selectedSection) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
      <div className="relative p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {selectedSection.name}
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">{selectedSection.content}</p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOverlay;
