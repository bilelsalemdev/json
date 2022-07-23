const renderPosts = async () => {
  let uri = "http://localhost:3000/posts";
  const res = await fetch(uri)
};
window.addEventListener("DOMContentLoaded", () => renderPosts());
