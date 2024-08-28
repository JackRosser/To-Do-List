let button = document.querySelector("button");
let body = document.querySelector("body");

let createForm = function () {
  let form = document.createElement("form");
  let close = document.createElement("div");
  close.id = "close";
  let labelCalendar = document.createElement("label");
  labelCalendar.for = "calendar";
  let calendar = document.createElement("input");
  calendar.type = "date";
  calendar.id = "calendar";
  let textLabel = document.createElement("label");
  textLabel.for = "todo";
  let textArea = document.createElement("textarea");
  textArea.id = "todo";
  textArea.rows = "4";
  textArea.cols = "50";
  textArea.placeholder = "Insert task here";
  let submit = document.createElement("button");
  submit.type = "submit";
  submit.id = "submit";
};
