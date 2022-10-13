$(document).ready(() => {
  for (let i = 0; i < 4; i++) {
    $(`.${i + 1}`).click(() => {
      $(`.${i + 1}`).css({ "font-weight": "bold", color: "#3815B5B" });
      $(`.${i + 1}`)
        .siblings()
        .css({ "font-weight": "normal", color: "#262626" });

      $(`.konten-${i}`).slideToggle("slow");
      $(`.konten-${i}`).siblings().css("display", "none");
    });
  }

  $(".tentang").click(function () {
    $(".konten").slideToggle("slow");
    $(".konten").siblings().hide();
  });
  $(".menu-tugas").click(function () {
    $(".tugas").slideToggle("slow");
    $(".tugas").siblings().hide();
  });
  $(".menu-kontak").click(function () {
    $(".kontak").slideToggle("slow");
    $(".kontak").siblings().hide();
  });
});
