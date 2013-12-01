function showMonths() {
  var timeAgo = new moment("2013-10-01T11:00:00").fromNow(true);

  $("#timer").html(timeAgo);
}

function toggleMenuClass() {
  $("#navigation-menu").toggleClass("show-menu");
}

function toggleMenu() {
  $("#navigation .logo").click(toggleMenuClass);
}