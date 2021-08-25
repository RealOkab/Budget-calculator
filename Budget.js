let firstInput = document.querySelector(".jumboInputs");
let secondInput = document.querySelectorAll(".jumboInputs")[1];
let thirdInput = document.querySelector(".big");
let addButton = document.querySelector("#okab");
let incomeSpace = document.querySelector(".income");
let expensesSpace = document.querySelector(".expenses");
let expenseChange = document.querySelector(".obed");
let incomeChange = document.querySelectorAll(".obed")[1];
let deleteButton = document.querySelectorAll(".income .fine-girl");
let spanSelection = document.querySelectorAll(".newS");
let spanSelection3 = document.querySelectorAll("span")[3];
let jk = document.querySelectorAll("span");
let Dnon = document.querySelector("#Dnon");
let Dnone = document.querySelector("#Dnone");

let ol = document.querySelectorAll("ol")[1];
let ole = document.querySelectorAll("ol")[0];
let lis1 = document.querySelectorAll(".income li");

let lister = document.querySelector(".list");

let firstInputValue = firstInput.value;
let secondInputValue = parseInt(secondInput.value);

let asd = document.querySelector(".asd")
let newH1 = document.querySelector(".newH1")



expenseChange.addEventListener("click", function () {
  expenseChange.classList.add("selected");
  incomeChange.classList.remove("selected");
});
incomeChange.addEventListener("click", function () {
  incomeChange.classList.add("selected");
  expenseChange.classList.remove("selected");
});

addButton.addEventListener("click", function (event) {
  if (expenseChange.classList[1] === "selected") {
    let li = document.createElement("li");
    let expButtonD = document.createElement("button");
    let sp2 = document.createElement("span");
    sp2.setAttribute("class", "new-S");
    let newSpan1 = document.createElement("sapn");
    newSpan1.setAttribute("class", "newSpan1");

    li.innerHTML = firstInput.value + " => " + " $ ";
    expensesSpace.appendChild(ol);
    ol.appendChild(li);
    expButtonD.innerHTML = "Delete";
    expButtonD.setAttribute("class", "fine-girl  btn btn-success ");
    li.appendChild(newSpan1);
    li.appendChild(sp2);
    newSpan1.append(secondInput.value);
    sp2.appendChild(expButtonD);

    expensesSpace.appendChild(ol);
  }
  if (incomeChange.classList[1] === "selected") {
    let lipo = document.createElement("li");
    let buttonD = document.createElement("button");
    let sp1 = document.createElement("span");
    let newSpan = document.createElement("span");
    sp1.setAttribute("class", "newS");
    newSpan.setAttribute("class", "newSpan");
    ole.appendChild(lipo);

    lipo.innerHTML = firstInput.value + " => " + " $ ";
    lipo.appendChild(newSpan);
    newSpan.append(secondInput.value);
    lipo.appendChild(sp1);
    sp1.appendChild(buttonD);

    buttonD.innerHTML = " Delete";
    buttonD.setAttribute("class", "fine-girl  btn btn-success ");
    incomeSpace.appendChild(ole);

    incomeSpace.appendChild(ole);
  } else if (firstInput.value === "" || secondInput.value === "") {
    firstInput.value = "";
    secondInput.value = "";
  }
});
/* document.querySelectorAll(".newS").forEach(element => {
  element.addEventListener("click", function () {
    element.remove(parent)
    alert("dfghjk")
  })
}) */

document.addEventListener("click", function (event) {
  if (secondInput.value === "") {
    secondInput.value = 0;
  } else if (firstInput.value === "") {
    firstInput.value = "";
  }
  if (event.path[1].classList[0] === "newS") {
    let bird = event.path[1];
    let fg = event.path[0];
    // console.log(fg);
    //console.log(event.path);
    //console.log(bird);
    fg.remove(bird);
    let po = event.path[2];
    po.remove(bird);
  }


  let sum = 0;
  for (let i = 0; i < bb.length; i++) {
    let bo = parseInt(bb[i].innerHTML);
    sum += bo;
    //console.log(sum);
    Dnon.value = sum;
  }

  thirdInput.value = parseInt(Dnon.value) - parseInt(Dnone.value);

 
});

document.addEventListener("click", function (event) {
  if (secondInput.value === "") {
    secondInput.value = parseInt(0);
  } else if (firstInput.value === "") {
    firstInput.value = "";
  }

  if (event.path[1].classList[0] === "new-S") {
    let ff = event.path[1];
    let tt = event.path[2];
    tt.remove(ff);
    let total = 0;

    for (let g = 0; g < cc.length; g++) {
      let dd = parseInt(cc[g].innerHTML);
      total += dd;
      Dnone.value = total;
      console.log(total);
    }
  }
  thirdInput.value = parseInt(Dnon.value) - parseInt(Dnone.value);

  if(thirdInput.value==="NaN"
    ){
      thirdInput.value=0
    
    }
});
let initialArray = [];
let initialArray2 = [];

let bb = document.getElementsByClassName("newSpan");
let cc = document.getElementsByClassName("newSpan1");

document.addEventListener("click", function (event) {
  if (event.path[0].id === "okab" && incomeChange.classList[1] === "selected") {
    /* initialArray.forEach(function (element) {
      let sum = 0;
      sum += element;
      console.log(sum); */
    // });
   
    let k=firstInput.value[0]
    k.toUpperCase()
    
    let sum = 0;

    for (let i = 0; i < bb.length; i++) {
      let bo = parseInt(bb[i].innerHTML);
      sum += bo;

      // console.log(sum);
      Dnon.value = sum;
    }

    firstInput.value = "";
    secondInput.value = parseInt(0);
  }
  if (
    event.path[0].id === "okab" &&
    expenseChange.classList[1] === "selected"
  ) {
    let total = 0;
    for (let g = 0; g < cc.length; g++) {
      let dd = parseInt(cc[g].innerHTML);
      total += dd;
      Dnone.value = total;
      thirdInput.value = parseInt(Dnon.value) - parseInt(Dnone.value);
    }
  }
  if (secondInput.value === "") {
    secondInput.value = "Enter an input here";
  } else if (firstInput.value === "") {
    firstInput.value = parseInt(0);
  }
  if (Dnone.value === "") {
    Dnone.value = 0;
    thirdInput.value = Dnon;
  }
  thirdInput.value = parseInt(Dnon.value) - parseInt(Dnone.value);
});
if (secondInput.value === "") {
  secondInput.value = parseInt(0);
} else if (firstInput.value === "") {
  firstInput.value = "Enter an income";
}

ole.addEventListener("click", function (e) {
  if (ole.childElementCount === 1) {
    Dnon.value = parseInt(0);
  }
});

ol.addEventListener("click", function (e) {
  if (ol.childElementCount === 1) {
    Dnone.value = parseInt(0);
  }


 
});

document.addEventListener("keydown",function(e){
if(e.key==='Enter' && asd.classList !=="tt"){
  newH1.append("BUDGET FOR MONTH " + asd.value.toUpperCase())
  asd.classList.add("tt")

}
})
