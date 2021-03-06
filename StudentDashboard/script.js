const elem = document.getElementById("card");
let no = 2;
elem.addEventListener("click", (e)=>{
    e.preventDefault();
    if (e.target.tagName === "BUTTON"){
        const tBody = document.getElementById("tableBody");
        const tr = document.createElement("tr");
        tr.innerHTML=` 
        <th scope="row">${no}</th>
        <td>Leave</td>
        <td><input type="checkbox" name="approvalStatus" id="approvalStatus"></td>`
        tBody.appendChild(tr);
        no++;

    }
})