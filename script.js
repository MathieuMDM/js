$("#bouton").click(function () {
  $(".collapse").collapse("toggle");
});
$("#contenu").on("hide.bs.collapse", function () {
  $("#bouton").html('<i class="fas fa-arrow-down"></i> Ouvrir');
});
$("#contenu").on("show.bs.collapse", function () {
  $("#bouton").html('<i class="fas fa-arrow-up"></i> Fermer');
});
