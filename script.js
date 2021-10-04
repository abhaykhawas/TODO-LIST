const firebaseConfig = {
    apiKey: "AIzaSyBEucPuUtb_vbR8RJRla7-kjVvcWT4Scvw",
    authDomain: "testing-d0664.firebaseapp.com",
    databaseURL: "https://testing-d0664-default-rtdb.firebaseio.com",
    projectId: "testing-d0664",
    storageBucket: "testing-d0664.appspot.com",
    messagingSenderId: "358791211092",
    appId: "1:358791211092:web:d1e1cd1444a59e5d3225c1"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

onload = function() {

    const tasks = firebase.database().ref('Todo');
    tasks.on('value', (snap) => {
        const todos = snap.val();
        // console.log(todos)
        const taskList = [];
        for (let id in todos) {
          taskList.push({ id, ...todos[id] });
 
        }
        for(var i=0; i<taskList.length;i++){
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(taskList[i].todo));
            ul.appendChild(li);
            // console.log(taskList[i].todo)
            // console.log(taskList[i].id)
        }
        document.querySelectorAll("li").forEach(element => {
            element.addEventListener('click', ()=>{
                for (let id in todos) {
                    console.log({ id, ...todos[id] })
                }
                // console.log(element.innerHTML)
            })
        });
      });
};

var ul = document.getElementById("list");
var input = document.getElementById("input")
var submit = document.getElementById("submit")
var lis = document.querySelectorAll("li")

submit.addEventListener("click", () =>{
    if(input.value != ''){
        var ul = document.querySelector('ul');
        ul.innerHTML = '';
        // var li = document.createElement("li");
        // li.appendChild(document.createTextNode(input.value));
        // console.log(li)
        // ul.appendChild(li);
        // console.log(ul)
        b = input.value ;
        let todoRef = firebase.database().ref('Todo');
        // console.log(todoRef)
        let a = todoRef.push();
        a.set({
            todo:b
        })
        alert("Done")
        input.value = '';
    }

    lis = document.querySelectorAll("li")
    // console.log(lis)
    document.querySelectorAll("li").forEach(element => {
        element.addEventListener('click', ()=>{
            element.remove()
            console.log(element.innerHTML)
        })
    });
})


document.querySelectorAll(".list li").forEach(element => {
    element.addEventListener('click', ()=>{
        element.remove()
        console.log(element.innerHTML)
    })
});