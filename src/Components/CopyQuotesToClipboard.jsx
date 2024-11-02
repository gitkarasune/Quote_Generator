import React, { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";

const CopyQuotesToClipboard = ({ quote, author }) => {
  const [ showAlert, setShowAlert ] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quote}" - ${author}`);
    setShowAlert(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        id="FaIcon"
        onClick={copyToClipboard}
        className="bg-blue-300 mr-2 p-2 rounded-lg text-blue-400 hover:text-blue-500 transition-colors duration-200 focus:outline-none"
        title="Copy Quote"
      >
        <FaCopy />
      </button>

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full mx-4 transform transition-all duration-300 ease-in-out scale-100 opacity-100">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FaCopy className="h-8 w-8 text-blue-200" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">Copied!</h3>
                <p className="mt-1 text-sm text-gray-500">
                  The quote has been copied to your clipboard.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={() => setShowAlert(false)}
                className="w-full inline-flex justify-center rounded-md border border-transparent px-2 py-2 bg-blue-500 font-medium text-white hover:bg-blue-500 focus:outline-none sm:text-sm"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CopyQuotesToClipboard;
