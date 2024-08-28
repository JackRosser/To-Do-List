let button = document.getElementById("new-task");
let body = document.querySelector("body");
let ul = document.querySelector("ul");

let createForm = function () {
  let form = document.createElement("form");

  let close = document.createElement("div");
  close.innerHTML = "<i class='fas fa-window-close'></i>";
  close.id = "close";
  close.onclick = function () {
    form.remove();
  };

  let labelCalendar = document.createElement("label");
  labelCalendar.setAttribute("for", "calendar");
  let calendar = document.createElement("input");
  calendar.type = "date";
  calendar.id = "calendar";

  let textLabel = document.createElement("label");
  textLabel.setAttribute("for", "todo");
  let textArea = document.createElement("textarea");
  textArea.id = "todo";
  textArea.rows = "4";
  textArea.cols = "50";
  textArea.placeholder = "Insert task here";

  let submit = document.createElement("button");
  submit.type = "submit";
  submit.id = "submit";
  submit.innerText = "submit!";

  form.append(close, labelCalendar, calendar, textLabel, textArea, submit);
  body.appendChild(form);

  // qui finisco di creare il form

  // qui inizio il processo per ottenere i dati
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // evita il refresh della pagina

    // posizionandomi qui ottengo i dati dopo che l'utente ha inserito submit
    let taskText = textArea.value;
    let taskDate = calendar.value;

    // qui genero un nuovo LI da inserire dentro UL
    let taskItem = document.createElement("li");
    taskItem.innerText = `${taskDate}: ${taskText}`;
    ul.appendChild(taskItem);

    // finito tutto si autorimuove
    form.remove();

    // Qui vado a mettere cosa succede quando premo LI
    taskItem.addEventListener("click", function (event) {
      let clickedLi = event.target; // Questo è l'elemento <li> su cui è stato fatto clic
      clickedLi.className = "text__barred";
    });
  });
};

button.addEventListener("click", createForm);
