let myleads= []
let oldleads=[]
let inputEL= document.getElementById("input-el")
let inputBtn =document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn =document.getElementById("delete-btn")


function render(leads){
let listitem= ""

for (let i = 0; i < leads.length; i++) {
  listitem += `
  <li>
     <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
   </a>
 </li>`
}
ulEl.innerHTML=listitem
}


let leadsFromLocalStorage= JSON.parse(localStorage.getItem("myleads"))
if (leadsFromLocalStorage) {
  myleads=leadsFromLocalStorage
render(myleads)
}
deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myleads=[]
  render(myleads)
})
inputBtn.addEventListener("click", function () {
 myleads.push(inputEL.value)
 inputEL.value= " "
 localStorage.setItem("myleads",JSON.stringify(myleads))
 
 render(myleads)
})
