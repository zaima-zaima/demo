function $(select) {
  return document.getElementsByClassName(select)[0];
}

$("menu-button").onclick = () => {
  $("toggle").classList.remove("hide");
  $("toggle").classList.add("show");
};

$("close").onclick = () => {
  $("toggle").classList.remove("show");
  $("toggle").classList.add("hide");
};
