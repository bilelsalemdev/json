const container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");

const renderPosts = async () => {
  let uri = "http://localhost:3000/posts?_sort=age";
  const res = await fetch(uri);
  const posts = await res.json();
  let template = "";
  posts.forEach((post) => {
    template += ` 
    <div class="post">
    <h2>${post.title}</h2>
    <p><small>${post.age}</small> years old</p>
    <p>${post.body.slice(200)}</p>
    <a href="/details.html?id=${post.id}">read more ...</a>
    </div>
    `;
  });
  container.innerHTML = template;
};
searchForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim());
})
window.addEventListener("DOMContentLoaded", () => renderPosts());
