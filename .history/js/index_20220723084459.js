const renderPosts = async () => {
  let uri = "http://localhost:3000/posts";
  const res = await fetch(uri);
  const posts = await res.json();
};
window.addEventListener("DOMContentLoaded", () => renderPosts());
