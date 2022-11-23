document.addEventListener("DOMContentLoaded", function(){
  const sidenav = document.querySelectorAll(".sidenav");
  const parallax = document.querySelectorAll(".parallax");

  M.sidenav.init(sidenav);
  M.parallax.init(parallax);
});
