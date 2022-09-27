var hidow = false;

$(".open").on("click", function (event) {
  if (!hidow) {
    $(".second").css("display", "block");
    $(".open").css("transform", "rotate(45deg)");
    $(".menu").css("background-color" , "#cbcbcb");
    // $("body").css("overflow", "hidden");
    $(".content").css("display","none");

    $("a").css("color","black");
    $("span").css("color","black");
    $(".open").css("color","black");

    hidow = true;
  } else {
    $(".second").css("display", "none");
    $(".open").css("transform", "rotate(0deg)");
    $(".menu").css("background-color" , "transparent");

    $(".content").css("display","initial");

    $("body").css("overflow", "scroll");

    $("a").css("color","black");
    $("span").css("color","black");
    $(".open").css("color","black");

    hidow = false;

  }
});



var lang = "ita";

$(".IT").on("click", function (event) {
  lang = "ita";
  $(".ita").css("display", "block");
  $(".introita").css("display", "block");
  $(".nextProjIta").css("display", "block");
  $(".domandaIta").css("display", "block");
  $(".eng").css("display", "none");
  $(".introeng").css("display", "none");
  $(".nextProjEng").css("display", "none");
  $(".domandaEng").css("display", "none");
  $(".EN").css("opacity", "0.3");
  $(".IT").css("opacity", "1");
  sessionStorage.setItem("language", "ita");
});

$(".EN").on("click", function (event) {
  lang = "eng";
  $(".ita").css("display", "none");
  $(".introita").css("display", "none");
  $(".nextProjIta").css("display", "none");
  $(".domandaIta").css("display", "none");
  $(".eng").css("display", "block");
  $(".introeng").css("display", "block");
  $(".nextProjEng").css("display", "block");
  $(".domandaEng").css("display", "block");
  $(".IT").css("opacity", "0.3");
  $(".EN").css("opacity", "1");
  sessionStorage.setItem("language", "eng");
});

// console.log(lang)

if (lang == "ita") {
  $(".ita").css("display", "block");
  $(".introita").css("display", "block");
  $(".nextProjIta").css("display", "block");
  $(".domandaIta").css("display", "block");
  $(".eng").css("display", "none");
  $(".introeng").css("display", "none");
  $(".nextProjEng").css("display", "none");
  $(".domandaEng").css("display", "none");
  $(".EN").css("opacity", "0.3");
  language = "ita";
} else {
  $(".ita").css("display", "none");
  $(".introita").css("display", "none");
  $(".nextProjIta").css("display", "none");
  $(".domandaIta").css("display", "none");
  $(".eng").css("display", "block");
  $(".introeng").css("display", "block");
  $(".nextProjEng").css("display", "block");
  $(".domandaEng").css("display", "block");
  $(".IT").css("opacity", "0.3");
}

$(document).ready(function () {
  var language = sessionStorage.getItem("language");
  if (language == null || language == "ita") {
    sessionStorage.setItem("language", "ita");
    console.log("sito caricato corrrettamente");
    // Show popup here
    lang = "ita";
  } else {
    sessionStorage.setItem("language", "eng");
    lang = "eng";
    $(".ita").css("display", "none");
    $(".introita").css("display", "none");
    $(".nextProjIta").css("display", "none");
    $(".domandaIta").css("display", "none");
    $(".eng").css("display", "block");
    $(".introeng").css("display", "block");
    $(".nextProjEng").css("display", "block");
    $(".domandaEng").css("display", "block");
    $(".IT").css("opacity", "0.3");
    $(".EN").css("opacity", "1");

    console.log("website correctly uploaded");
  }
});

function setMargin() {
  var height_of_video = $("#myVideo").css("height");
  var height_of_container = $("#containervideo").css("height");
  var bodystyle = $("body").css("overflow");

  if (bodystyle == "scroll") {
    if (height_of_video < height_of_container) {
      $("#containervideo").css("height", height_of_video);
      $(".containerprogetti").css("top", height_of_video);
    } else {
      $("#myVideo").css("height", "auto");
      $("#containervideo").css("height", "70vh");
      $(".containerprogetti").css("top", "65vh");
    }
  }
}
window.onload = setMargin;
window.onresize = setMargin;

var playvid = false;

function fullsizevideo() {
  var vid = document.getElementById("myVideo");
  var bodystyle = $("body").css("overflow");

  $("#containervideo").toggleClass("closer");

  if (!playvid) {
    $("#containervideo").css("height", "100vh");
    $("#containervideo").css("max-height", "100vh");
    $(".containerprogetti").css("top", "100vh");
    $("body").css("overflow", "hidden");
    vid.muted = false;
    window.scrollTo(0, 0);
    playvid = true;
  } else {
    $("#containervideo").css("height", "70vh");
    $("#containervideo").css("max-height", "70vh");
    $(".containerprogetti").css("top", "65vh");
    $("body").css("overflow", "scroll");
    vid.muted = true;
    playvid = false;
  }
}

var playsound = false;

function attivasound() {
  var vid = document.getElementById("myVideosmall");

  if (!playsound) {
    $("#icona").css("display", "none");
    $("#icona2").css("display", "block");
    vid.muted = false;
    playsound = true;
  } else {
    $("#icona").css("display", "block");
    $("#icona2").css("display", "none");
    vid.muted = true;
    playsound = false;
  }
}

function attivanextprogetto() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 600) {
    $(".altriprogetti").css("display", "flex");
    // $(".altriprogetti").css("z-index","69");
    // $(".nextprogetto").css("z-index","69");
    // $(".prevprogetto").css("z-index","69");
  } else {
    $(".altriprogetti").css("display", "none");
    // $(".altriprogetti").css("z-index","2");  
    // $(".nextprogetto").css("z-index","2");
    // $(".prevprogetto").css("z-index","2");
  }
}
window.onscroll = attivanextprogetto;
window.onload = attivanextprogetto;

function allargadx() {
  $(".nextprogetto").css("flex", "62%");
  $(".prevprogetto").css("flex", "38%");
}

function allargasx() {
  $(".nextprogetto").css("flex", "38%");
  $(".prevprogetto").css("flex", "62%");
}

function balance() {
  $(".nextprogetto").css("flex", "50%");
  $(".prevprogetto").css("flex", "50%");
}
function go01() {
    window.location.href = "../projects/01TIC.html";
}
function go02() {
    window.location.href = "../projects/02DISSIT.html";
}
function go03() {
    window.location.href = "../projects/03SICKO.html";
}
function go04() {
    window.location.href = "../projects/04CRYBABY.html";
}
function go05() {
    window.location.href = "../projects/05MOR.html";
}   
function go06() {
    window.location.href = "../projects/06RUMO.html";
}
function go07() {
    window.location.href = "../projects/07UAI.html";
}
function go08() {
    window.location.href = "../projects/08SOURDATA.html";
}
function go09() {
    window.location.href = "../projects/09FREYA.html";
}
function go10() {
    window.location.href = "../projects/10NEXNET.html";
}
function go11() {
    window.location.href = "../projects/11USTRESS.html";
}
function go12() {
    window.location.href = "../projects/12DISCORDIA.html";
}
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});
