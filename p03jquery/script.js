$(document).ready(() => {
  $("td").click(function (event) {
    alert("You take " + $(this).html() + ", Thankyou!");
  });
  $("th").click(function (event) {
    alert("You take " + $(this).html() + ", Thankyou!");
  });
});
