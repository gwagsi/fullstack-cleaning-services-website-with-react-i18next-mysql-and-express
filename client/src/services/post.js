import http from "../http-common";

const getAll = () => {
  return http.get("/posts");
};

const get = id => {
  return http.get(`/post/${id}`);
};

const create = data => {
  return http.post("/post", data);
};

const update = (id, data) => {
  return http.put(`/post/${id}`, data);
};

const remove = id => {
  return http.delete(`/post/${id}`);
};

const removeAll = () => {
  return http.delete(`/post`);
};

const findByTitle = title => {
  return http.get(`/post?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};