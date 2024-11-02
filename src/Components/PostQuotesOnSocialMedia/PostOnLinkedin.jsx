import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const PostOnLinkedin = ({ quote, author }) => {
  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      window.location.href
    )}&title=${encodeURIComponent(
      "Inspiring Quote"
    )}&summary="${encodeURIComponent(quote)}" - ${encodeURIComponent(author)}`;
    window.open(linkedInUrl, "_blank");
  };

  return (
    <button
      id="FaIcon"
      onClick={shareOnLinkedIn}
      className="bg-blue-300 mr-2 p-2 rounded-lg text-blue-700 hover:text-blue-800 transition-colors duration-200 focus:outline-none"
      title="Share on LinkedIn"
    >
      <FaLinkedinIn />
    </button>
  );
};

export default PostOnLinkedin;
