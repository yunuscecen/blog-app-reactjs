import React from "react";
import { connect } from "react-redux";
import BlogDetails from "./BlogDetails";

const BlogDetailsPage = props => {
  return <BlogDetails {...props.blog} />;
};

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find(blog => {
      return blog.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(BlogDetailsPage);
