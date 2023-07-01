import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "POSTS_REQUEST":
      return { ...state, loadingPosts: true };
    case "POSTS_SUCCESS":
      return {
        ...state,
        loadingPosts: false,
        posts: action.payload,
        errorPosts: "",
      };
    case "POSTS_FAIL":
      return { ...state, errorPosts: action.payload, loadingPosts: false };
    case "USERS_REQUEST":
      return { ...state, loadingUsers: true };
    case "USERS_SUCCESS":
      return {
        ...state,
        loadingUsers: false,
        users: action.payload,
        errorUsers: "",
      };
    case "USER_SUCCESS":
      return {
        ...state,
        loadingUsers: false,
        user: action.payload,
        errorUsers: "",
      };
    case "USERS_FAIL":
      return { ...state, errorUsers: action.payload, loadingUsers: false };
    default:
      return state;
  }
};
export default function HomePage() {
  const { query, userId } = useParams();
  const [state, dispatch] = useReducer(reducer, {
    loadingPosts: false,
    errorPosts: "",
    posts: [],
    loadingUsers: false,
    errorUsers: "",
    users: [],
    user: {},
  });
  const {
    loadingPosts,
    errorPosts,
    posts,
    loadingUsers,
    errorUsers,
    users,
    user,
  } = state;
  const loadPosts = async () => {
    dispatch({ type: "POSTS_REQUEST" });
    try {
      const { data } = await axios.get(
        userId
          ? "https://jsonplaceholder.typicode.com/posts?userId=" + userId
          : "https://jsonplaceholder.typicode.com/posts"
      );
      const filterPosts = query
        ? data.filter(
            (x) => x.title.indexOf(query) >= 0 || x >= x.body.indexOf(query)
          )
        : data;
      dispatch({ type: "POSTS_SUCCESS", payload: filterPosts });
    } catch (err) {
      dispatch({ type: "POSTS_FAIL", payload: err.message });
    }
  };
  const loadUsre = async () => {
    dispatch({ type: "USERS_REQUEST" });
    try {
      const { data } = await axios.get(
        userId
          ? "https://jsonplaceholder.typicode.com/users/" + userId
          : "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: userId ? "USER_SUCCESS" : "USERS_SUCCESS",
        payload: data,
      });
    } catch (err) {
      dispatch({ type: "USERS_FAIL", payload: err.message });
    }
  };
  useEffect(() => {
    loadPosts();
    loadUsre();
  }, [query, userId]);
  return (
    <div className="blog">
      <div className="content">
        <h1>
          {query
            ? `Results for "${query}"`
            : userId
            ? `${user.name} 's Posts`
            : "Posts"}
        </h1>
        {loadingPosts ? (
          <div>Loading...</div>
        ) : errorPosts ? (
          <div>Error:{errorPosts}</div>
        ) : posts.length === 0 ? (
          <div>No post found</div>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <h2>{post.title}</h2>
                </Link>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="Sidebar">
        <h2>Authors</h2>
        {loadingUsers ? (
          <div>Loading...</div>
        ) : errorUsers ? (
          <div>Error:{errorUsers}</div>
        ) : users.length === 0 ? (
          <div>No user found</div>
        ) : userId ? (
          <div>
            <h2>{user.name}'s Profile</h2>
            <ul>
              <li>Email:{user.email}</li>
              <li>Phone:{user.phone}</li>
              <li>Website:{user.website}</li>
            </ul>
          </div>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
