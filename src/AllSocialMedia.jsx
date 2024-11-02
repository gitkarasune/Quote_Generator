import React from "react";
import PostOnFacebook from "./Components/PostQuotesOnSocialMedia/PostOnFacebook";
import PostOnLinkedin from "./Components/PostQuotesOnSocialMedia/PostOnLinkedin";
import PostOnTwitter from "./Components/PostQuotesOnSocialMedia/PostOnTwitter";
import CopyQuotesToClipboard from "./Components/CopyQuotesToClipboard";

const AllSocialMedia = ({ quote, author, error }) => {
  return (
    <div className="flex justify-between items-center">
      {error ? (
        <div className="setAnyToDisplayNone">
          <CopyQuotesToClipboard quote={quote} author={author} />
        </div>
      ) : (
        <CopyQuotesToClipboard quote={quote} author={author} />
      )}

      {error ? (
        <div className="flex justify-between items-center setAnyToDisplayNone">
          <PostOnTwitter quote={quote} author={author} />
          <PostOnLinkedin quote={quote} author={author} />
          <PostOnFacebook quote={quote} author={author} />
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <PostOnTwitter quote={quote} author={author} />
          <PostOnLinkedin quote={quote} author={author} />
          <PostOnFacebook quote={quote} author={author} />
        </div>
      )}
    </div>
  );
};

export default AllSocialMedia;
