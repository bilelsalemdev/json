const id= new URLSearchParams(window.location.search).get('id');
const renderDetails = async () => {
    const res = await fetch("http://localhost:3000/posts" + id); 
    
}
window.addEventListener("DOMContentLoaded", () => renderDetails());