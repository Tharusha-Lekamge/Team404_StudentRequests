const panel = document.getElementById("panel-body");
var text = document.getElementById("form-control");
const ul = document.getElementById("media-list");

panel.addEventListener("click",(e)=>{
    e.preventDefault();
    if (e.target.tagName === "BUTTON"){
        let message = (panel.children[0].value);
        // console.log(message)
        const li = document.createElement("li");
        li.classList.add("media");
        li.innerHTML=` 
        <a href="#" class="pull-left">
        <img src="profile.png" alt="" class="img-circle">
        </a>
        <div class="media-body">
        <strong class="text-success">Me</strong>
        <p>
        ${message}
        </p>
        </div>`
        ul.appendChild(li);
        text.value="";

    }
})