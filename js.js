function showsidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hidesidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

const text =document.querySelector(".second-text");
const textLoad= () =>
{
setTimeout(() =>{
   text.textContent="Frontend Deve";
},0);
setTimeout(() =>{
   text.textContent="Junior Deve";
},4000);
setTimeout(() =>{
   text.textContent="Passionate Deve";
},8000);
}
textLoad();
setInterval(textLoad,12000)
