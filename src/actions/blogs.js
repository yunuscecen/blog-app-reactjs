import database from "./../firebase/firebaseConfig";

export const addBlog = blog => ({
  type: "ADD_BLOG",
  blog,
});
export const addBlogToDatabase = (blogData = {}) => {
  return (dispatch, getState) => {
    const userId = getState().auth.userId;
    const { title = "", description = "", dateAdded = 0 } = blogData;
    const blog = { title, description, dateAdded, userId };
    database
      .ref("blogs")
      .push(blog)
      .then(res => {
        dispatch(
          addBlog({
            id: res.key,
            ...blog,
          })
        );
      })
      .catch(err => {
        console.log("Bir hata oluştu : " + err);
      });
  };
};
export const removeBlog = id => ({
  type: "REMOVE_BLOG",
  id,
});
export const removeBlogFromDatabase = id => {
  return dispatch => {
    return database
      .ref(`blogs/${id}`)
      .remove()
      .then(() => {
        dispatch(removeBlog(id));
      });
  };
};
export const editBlog = (id, updates) => ({
  type: "EDIT_BLOG",
  id,
  updates,
});
export const editBlogFromDatabase = (id, updates) => {
  return dispatch => {
    return database
      .ref(`blogs/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editBlog(id, updates));
      });
  };
};
export const setBlogs = blogs => ({
  type: "SET_BLOGS",
  blogs,
});
export const getBlogsFromDatabase = () => {
  return (dispatch, getState) => {
    const userId = getState().auth.userId;
    return database
      .ref("blogs")
      .once("value")
      .then(snapshot => {
        const blogs = [];
        snapshot.forEach(blog => {
          const result = blog.val();
          if (result.userId == userId) {
            blogs.push({
              id: blog.key,
              ...result,
            });
          }
        });
        dispatch(setBlogs(blogs));
      });
  };
};
export const clearBlogs = () => ({
  type: "CLEAR_BLOGS",
});
