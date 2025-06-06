const notesContainer=document.querySelector('.notes-container');
const createbtn=document.querySelector('.btn');
let notes=document.querySelectorAll('.input-box');

// Load notes from localStorage if available
function showNotes(){
  notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}


createbtn.addEventListener("click",()=>{
   let inputbox=document.createElement('p');
   let img=document.createElement('img');
   inputbox.className='input-box';
   inputbox.setAttribute('contenteditable','true'); 
   img.src='https://img.icons8.com/ios-filled/50/000000/delete-sign.png';
   notesContainer.appendChild(inputbox).appendChild(img);
})

notesContainer.addEventListener('click',(e)=>{
   if(e.target.tagName==='IMG'){
      e.target.parentElement.remove();
      updateStorage();
   }
   else if(e.target.tagName==='P'){
   notes=document.querySelectorAll('.input-box');
   notes.forEach((nt)=>{
      nt.onkeyup=()=>{
         updateStorage();
      }    
   })

}})

document.addEventListener('keydown',(e)=>{
if(e.key==='Enter'){
         document.execCommand('insertLineBreak'); // Prevents default behavior of creating a new paragraph
            e.preventDefault(); // Prevents the default action of the Enter key
}
  }
   )
