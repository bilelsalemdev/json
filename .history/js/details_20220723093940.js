const id= new URLSearchParams(window.location.search).get('id');
const renderDetails = async () => {
    const res = fetch("http://localhost:3000/posts"); 
}
window.addEventListener("DOMContentLoaded", () => renderDetails());