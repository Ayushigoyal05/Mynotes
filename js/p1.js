console.log("project 1");
shownotes();
let addbt = document.getElementById('addbtn');
console.log(addbt);
addbt.addEventListener("click", (e) => {
    let addtitle = document.getElementById("addtitle");
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj={
        title:addtitle.value,
        text:addtxt.value

    }

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    addtitle.value=""
    // console.log(notesObj);
    shownotes();
})
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = ""
    notesObj.forEach(function (element, index) {
        html += `
            <div class=" notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="delnote(this.id)" class="btn btn-primary">DELETE NOTE</button>
        </div>
      </div>
      `
    });
    let noteele = document.getElementById("notes");
    if (notesObj.lenght != 0) {
        noteele.innerHTML = html;
    }
    else {
        noteele.innerHTML = `Nothing to show in notes .Write your own note to add  notes`
    }

}
//function to delete a node
function delnote(index) {
    // console.log("I am deleting");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}

let search = document.getElementById('searchtxt');
search.addEventListener("input", function () {
    // console.log("input event fire");
    let inputval = search.value.toLowerCase();
    let notecard = document.getElementsByClassName("notecard");
    Array.from(notecard).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";

        }
        else {
            element.style.display = "none";
        }

    })
})