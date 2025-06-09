let body=  document.getElementById("body");
let lightBtn = document.getElementById("lightBtn");
let darkBtn = document.getElementById("darkBtn")

let darkFunction = ()=>{

  // body color change
  body.classList.add("bg-dark");
  body.classList.remove("bg-light");

  // btn color change
  darkBtn.classList.add("d-none");
  lightBtn.classList.remove("d-none");

  // text color change
  body.classList.remove("text-dark");
  body.classList.add("text-light");
}


let lightFunction = ()=>{

  // body color change
  body.classList.remove("bg-dark");
  body.classList.add("bg-light");

  // btn color change
  darkBtn.classList.remove("d-none");
  lightBtn.classList.add("d-none");

  // text color change
  body.classList.remove("text-light");
  body.classList.add("text-dark")

}




  let card2= document.getElementById("card2");
  card2.classList.remove("d-none");
  card.classList.add("d-none");
  cardHolder.classList.add("d-none");