/* @flow */
import instance from "./axiosInstance";

export default {
  fetchPosts: (page: number, per_page: number) => {
    return instance.get(`/wp/v2/posts?_embed&page=${page}&per_page=${per_page}`);
  },
  fetchPostByID: (postID: number) => {
    return instance.get(`/wp/v2/posts?${postID}`);
  }
};
