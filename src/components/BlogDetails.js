import React from "react";

const BlogDetails = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export default BlogDetails;
