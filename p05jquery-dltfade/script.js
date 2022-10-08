$(document).ready(function () {
    $(".data").click(function () {
      let isi = $(this).text();
      let tid = $(this).prop("id");
      let rid = tid.split("__");
      let id_baris = rid[1];
      let nama_mhs = $("#nama_mhs__" + id_baris).text();
  
      if (isi == "Hapus") {
        let konfirmasi = confirm(
          `Are you sure to delete  ${nama_mhs}'s data ??`
        );
        if (!konfirmasi) return;
  
        $("#baris__" + id_baris).fadeOut();
      } else {
        alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
      }
    });
  });