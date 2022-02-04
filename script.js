function filter() {

    var value, name, item, i;

    value = document.getElementById("value").value.toUpperCase();
    item = document.getElementsByClassName("item");

    for (i = 0; i < item.length; i++) {
      name = item[i].getElementsByClassName("name");
      if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
        item[i].style.display = "flex";
      } else {
        item[i].style.display = "none";
      }
    }
  }


  function filter2(c) {

    var item, i, icon;

    item = document.getElementsByClassName("item");

    if (c == "모두") c = "";

    for (i = 0; i < item.length; i++) {
      icon = item[i].getElementsByClassName("icon");
      if (icon[0].innerHTML.toUpperCase().indexOf(c) > -1) {
        item[i].style.display = "flex";
      } else {
        item[i].style.display = "none";
      }
    }
  }