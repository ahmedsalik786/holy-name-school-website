import React from "react";

const OurEvents = () => {
  return (
    <div>
      <h1 className="text-blue text-center  text-2xl font-extrabold">
        Our Events
      </h1>
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                {/* Logo can go here */}
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Navigation Links */}
                <a
                  href="#"
                  className="border-b-2 border-transparent hover:border-indigo-600 px-3 py-2 text-sm font-medium"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="border-b-2 border-transparent hover:border-indigo-600 px-3 py-2 text-sm font-medium"
                >
                  Academic
                </a>
                {/* ... other navigation links */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
