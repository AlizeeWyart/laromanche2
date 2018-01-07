function indexCaroussel () {

  // Récupérer le n° de la photo
  dataImg = $('#cover-index').data("img");
  console.log("dataImg = " + dataImg);

  // Lui donner le n° +1 et récupérer l'URL
  if (dataImg < 3) {
    dataImgNext = dataImg + 1  ;
    $('#cover-index').data("img", dataImgNext) ;
    console.log("dataImgNext = " + dataImgNext);
  } else {
    dataImgNext = 1  ;
    $('#cover-index').data("img", dataImgNext) ;
    console.log("dataImgNext = " + dataImgNext);
  }

  // CHANGER D'IMAGES
  imgUrlNext = "url(img/index" + dataImgNext + ".png)";
  console.log(imgUrlNext);
  $('#cover-index').css("background-image", imgUrlNext);

  // CHANGER DE TEXTE
  oldTxt = "txt" + dataImg;
  newTxt = "txt" + dataImgNext;
  $('.' + oldTxt).css("opacity","0");
  $('.' + newTxt).css("opacity","100");
  console.log(newTxt);


  setTimeout(function () {
    indexCaroussel();
  }, 5000);

}

setTimeout(function () {
    indexCaroussel();
  }, 3000);

