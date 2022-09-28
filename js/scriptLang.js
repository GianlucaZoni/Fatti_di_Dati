var hidow = false;

$(".open").on("click", function (event) {
  if (!hidow) {
    $(".second").css("display", "block");
    $(".open").css("transform", "rotate(45deg)");
    $(".bgHider").css("background-color","#cbcbcb");
    // $("body").css("overflow", "scroll");
    hidow = true;
  } else {
    $(".second").css("display", "none");
    $(".open").css("transform", "rotate(0deg)");
    $(".bgHider").css("background-color","transparent");
    // $("body").css("overflow", "hidden");
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
