var ul = document.getElementById("list");
var input = document.getElementById("input")
var submit = document.getElementById("submit")
var lis = document.querySelectorAll("li")

submit.addEventListener("click", () =>{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
    lis = document.querySelectorAll("li")
    console.log(lis)
})


// for(var i =0; i<lis.length; i++){
//  lis = document.querySelectorAll("li")
//  lis[i].addEventListener('click',()=>{
//     // ul.removeChild(ul.childNodes[i])
//     // lis[0].remove()
//     console.log(i)

//  })   
// }

document.querySelectorAll("li").forEach(element => {
    element.addEventListener('click', ()=>{
        console.log(element.innerHTML)
    })
});