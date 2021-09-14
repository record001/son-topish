

let ism = prompt("Ismingizni kiriting :");
let conf = confirm(` Assalomu alaykum ${ism} ! \n Siz 0 dan 20 gacha bo'lgan sonlarni kiritishigiz kerak va siz o'yagan son \n men o'ylagan songa teng bo'lsa g'olib bo'lasiz \n O'yinni boshlashga tayyormisiz ?`);



let sonlar_toplami = [];
let kiritilgan_sonlar;
let oyna = document.querySelector("#son");
let urinish = document.querySelector("#urinishlar");

let random = Math.floor(Math.random() * 20 + 1);
let a = "javob";

for (let i = 0; i < 20; i++) {
  kiritilgan_sonlar = Number(prompt("O`ylagan soningizni kiriting: "));

  sonlar_toplami.push(kiritilgan_sonlar);

  if (random === kiritilgan_sonlar || kiritilgan_sonlar === a) {
    alert(
      `Siz g'olibsiz, siz ${sonlar_toplami.length} chi urunishda meni mag'lub etdingiz `
    );
    break;
  } else if(random > kiritilgan_sonlar){
    alert("Men o`ylagan son bundan kattaroq edi, qayta urinib ko`ring");
  } else if (random < kiritilgan_sonlar){
    alert("Men o`ylagan son bundan kichikroq edi, qayta urinib ko`ring");
  }

  // console.log(sonlar_toplami);
  // console.log(sonlar_toplami.length);
}

oyna.textContent = sonlar_toplami;
urinish.textContent = sonlar_toplami.length;