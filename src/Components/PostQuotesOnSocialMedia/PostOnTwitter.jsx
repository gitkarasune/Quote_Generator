import React from "react";
import { FaTwitter } from "react-icons/fa";

const PostOnTwitter = ({ quote, author }) => {
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(
      quote
    )}" - ${encodeURIComponent(author)}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="flex space-x-4">
      <button
        id="FaIcon"
        onClick={shareOnTwitter}
        className="bg-blue-300 mr-2 p-2 rounded-lg text-blue-400 hover:text-blue-500 transition-colors duration-200 focus:outline-none"
        title="Share on Twitter"
      >
        <FaTwitter />
      </button>
    </div>
  );
};

export default PostOnTwitter;
