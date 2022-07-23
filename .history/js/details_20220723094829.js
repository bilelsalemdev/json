const id= new URLSearchParams(window.location.search).get('id');
cosnt container = document.querySelector('.container');
const renderDetails = async () => {
    const res = await fetch("http://localhost:3000/posts/" + id);
    const post = await res.json();
    const template =` 
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `
}
window.addEventListener("DOMContentLoaded", () => renderDetails());