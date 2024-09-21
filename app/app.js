import * as MODEL from "../model/model.js";

function initListeners() {
  MODEL.changePage("home");
  $("nav a").on("click", (e) => {
    let btnID = e.currentTarget.id;
    console.log(btnID);
    MODEL.changePage(btnID);
  });
}

$(document).ready(function () {
  initListeners();
});

let counter = 0;
export function contact() {
  counter++;
  if (counter > 9 && counter < 14) {
    $("#response").html("STOP");
    $("#response").css("color", "red");
  } else if (counter >= 14) {
    $("#contactBtn").css("display", "none");
    $("#response").css("fontSize", "50px");
  } else {
    $("#response").html("this dog can not be contacted. I am off the grid.");
    $("#borderCollie").attr("src", "./images/border-collie-2gone.png");
  }
}
