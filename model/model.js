import * as app from "../app/app.js";

export function changePage(pageName) {
  $.get(`pages/${pageName}.html`, function (data) {
    // console.log(data);
    $("#app").html(data);

    if (pageName == "contact") {
      console.log($("contactBtn"));

      $("#contactBtn").on("click", function () {
        app.contact();
      });
    }
  });
}
