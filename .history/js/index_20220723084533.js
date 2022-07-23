const renderPosts = async () => {
  let uri = "http://localhost:3000/posts";
  const res = await fetch(uri);
  const posts = await res.json();
  console.log(posts)
};
window.addEventListener("DOMContentLoaded", () => renderPosts());
