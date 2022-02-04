$(document).ready( function() {
  //페이지가 로드되면 실행한다.
  filter2('고');

  //세구를 기본

});

function filter() {
    //검색
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

  // 검색은 통합으로 되는 필터
  // function filter2(c) {

  //   var item, i, icon;

  //   item = document.getElementsByClassName("item");

  //   if (c == "모두") c = "";

  //   for (i = 0; i < item.length; i++) {
  //     icon = item[i].getElementsByClassName("icon");
  //     if (icon[0].innerHTML.toUpperCase().indexOf(c) > -1) {
  //       item[i].style.display = "flex";
  //     } else {
  //       item[i].style.display = "none";
  //     }
  //   }
  // }
 
  function filter2(c) {
      //필터
      var c;

      if(c=='고') $(".container").load("gosegu.html");
      else if(c=='릴') $(".container").load("lilpa.html");
      else if(c=='아') $(".container").load("ine.html");
      else if(c=='징') $(".container").load("jing.html");
      else if(c=='챤') $(".container").load("vichan.html");
  }
  
