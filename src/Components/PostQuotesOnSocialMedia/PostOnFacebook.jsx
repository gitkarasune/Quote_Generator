import React from "react";
import { FaFacebook } from "react-icons/fa";

const PostOnFacebook = ({ quote, author }) => {
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}&quote="${encodeURIComponent(quote)}" - ${encodeURIComponent(author)}`;
    window.open(facebookUrl, "_blank");
  };

  return (
    <button
      id="FaIcon"
      onClick={shareOnFacebook}
      className="bg-blue-300 p-2 rounded-lg text-blue-600 hover:text-blue-700 transition-colors duration-200 focus:outline-none"
      title="Share on Facebook"
    >
      <FaFacebook />
    </button>
  );
};

export default PostOnFacebook;
