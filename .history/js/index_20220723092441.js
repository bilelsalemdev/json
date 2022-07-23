const renderPosts = async () => {
  let uri = "http://localhost:3000/posts";
  const res = await fetch(uri);
  const posts = await res.json();
  let template='';
  posts.forEach(post =>{
    template += ` 
    <div class="post">
    <h2>${post.title}</h2>
    <p><small>${post.age}</small></p>
    <p>${post.body.slice(200)}</p>
    <a href="/details.html">read more ...</a>
    </div>
    `
  })
};
window.addEventListener("DOMContentLoaded", () => renderPosts());
