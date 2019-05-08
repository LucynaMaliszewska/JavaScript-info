// Na przykładzie <h2 id= "page-title">Kung Fu Your Net Skills!</h2>

var title = document.getElementById("page-title");

title.setAttribute("style", "position: relative;", "left: 10px");

title.style.top = "10px";
title.style.color = "red";
title.style.backgroundColor = "blue";

/* Otrzymamy: <h2 id= "page-title"; style= "postion: relative; top: 10px;
 color: red; background-color: blue;">Kung Fu Your Net Skills!</h2> */