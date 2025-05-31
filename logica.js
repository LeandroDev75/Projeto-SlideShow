





let arrayImagensAnimais = ["/img/Fotos animais 1366x768/1.jpg", "/img/Fotos animais 1366x768/2.jpg", "/img/Fotos animais 1366x768/3.jpg", 
"/img/Fotos animais 1366x768/4.jpg", "/img/Fotos animais 1366x768/5.jpg", "/img/Fotos animais 1366x768/6.jpg", "/img/Fotos animais 1366x768/7.jpg"];

function alteraImagem() {

let indiceImagem = Math.floor(Math.random() * arrayImagensAnimais.length);

let tagImg = document.querySelector(".slideShow");
tagImg.src = arrayImagensAnimais[indiceImagem];

}

setInterval(alteraImagem, 2000);