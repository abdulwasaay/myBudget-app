var valI = document.getElementById("mid-2");
var valP = document.getElementById("mid");
var valO = document.getElementById("mon-2");
var valL = document.getElementById("mid-3");
var valK = document.getElementById("mon-4");
var des = document.getElementById("descript-1");
var descript = document.getElementById("descript-2");
var err = document.getElementById("recall");
var error = document.getElementById("recall-2");
var dat = document.getElementById("date-2");
var dates = document.getElementById("date");
let div = document.getElementById("div-1");
let divs = document.getElementById("div-2");
var category = document.getElementById("select");
var num = [0];
var num2 = [];
let arr=[];
let expenses={}
document.getElementById("first").addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("first").style.boxShadow = "5px 5px 20px gray";
        document.getElementById("first").style.transform = "scale(1.1)";
        setTimeout(() => {
            document.getElementById("first").style.boxShadow = "";
            document.getElementById("first").style.transform = "scale(1)";
        }, 80);
    }, 20);
    if (des.value === "" && valO.value === "" && dates.value === "") {
        err.innerText = "ERROR ! Please enter the Description , Amount and date  .";
    }
    else if (des.value === "" && valO.value === "") {
        err.innerText = "ERROR ! Please enter the Description and Amount  .";
    }
    else if (des.value === "" && dates.value === "") {
        err.innerText = "ERROR ! Please enter the Description and Date  .";
    }
    else if (valO.value === "" && dates.value === "") {
        err.innerText = "ERROR ! Please enter the Amount and Date  .";
    }
    else if (valO.value === "") {
        err.innerText = "ERROR ! Please enter the Amount  .";
    }
    else if (des.value === "") {
        err.innerText = "ERROR ! Please enter the Description  .";
    }
    else if (dates.value === "") {
        err.innerText = "ERROR ! Please enter the Date  .";
    }
    else {
        valP.innerHTML = valO.value;
        valI.innerHTML = valO.value;
        err.innerText = "";
        let id = Math.random(1) * 1000000;
        var elemn = "<div class=" + "dives id =" + id + " >  <p>" + des.value + "</p><p class=" + "child>" + valO.value +
            "</p><p class=" + "child>" + dates.value + "</p><button class=" + "child-2 onclick = clicks(" + id + ") > X </button></div>";
        div.insertAdjacentHTML("beforeend", elemn);
        des.value = "";
        valO.value = "";
        dates.value = "";
    }
});
document.getElementById("second").addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("second").style.boxShadow = "5px 5px 20px gray";
        document.getElementById("second").style.transform = "scale(1.1)";
        setTimeout(() => {
            document.getElementById("second").style.boxShadow = "";
            document.getElementById("second").style.transform = "scale(1)";
        }, 80);
    }, 20);
    if (descript.value === "" && valK.value === "" && dat.value === "") {
        error.innerText = "ERROR ! Please enter the Description , Amount and date  .";
    }
    else if (descript.value === "" && valK.value === "") {
        error.innerText = "ERROR ! Please enter the Description and Amount  .";
    }
    else if (descript.value === "" && dat.value === "") {
        error.innerText = "ERROR ! Please enter the Description and Date  .";
    }
    else if (valK.value === "" && dat.value === "") {
        error.innerText = "ERROR ! Please enter the Amount and Date  .";
    }
    else if (valK.value === "") {
        error.innerText = "ERROR ! Please enter the Amount  .";
    }
    else if (descript.value === "") {
        error.innerText = "ERROR ! Please enter the Description  .";
    }
    else if (dat.value === "") {
        error.innerText = "ERROR ! Please enter the Date  .";
    }
    else if(category.value==="Categories"){
        error.innerText = "ERROR ! Please enter the Category  .";
    }
    else {
        if (parseInt(valI.innerHTML) >= valK.value) {
            expenses.description=descript.value;
            expenses.amount= valK.value;
            expenses.date=dat.value;
            arr.push(expenses);
            let con= parseInt(valK.value);
            let cons= parseInt(valL.innerHTML);
            valL.innerHTML = cons+con;
            valI.innerHTML = valI.innerHTML - valK.value;
            expenses.totalBudget= parseInt(valI.innerHTML);
            error.innerText = "";
            let ids = Math.random(1) * 100000000;
            let len=arr.length-1;
            var elemnt = "<div class=" + "dives id =" + ids + "> <p>" + descript.value + "</p><p class=" + "child id="+len+">" + valK.value +
                "</p><p class=" + "child>" + dat.value + "</p><button class="
                + "child-2 onclick=" + " unclicks(" + ids +","+len + ")> X </button></div>";
            divs.insertAdjacentHTML("beforeend", elemnt);
            descript.value = "";
            valK.value = "";
            dat.value = "";
        }
        else {
            error.innerText = "ERROR ! You have no budget available  .";
        }
    }

});
function clicks(id) {
    document.getElementById(id).style.display = "none";
    valP.innerHTML = 0;
    valI.innerHTML = 0;
}
function unclicks(ids , len) {
    document.getElementById(ids).style.display = "none";
    var consta = parseInt(valL.innerHTML);
    var contant = parseInt(valI.innerHTML);
    valL.innerHTML= consta- document.getElementById(len).innerHTML;
    valI.innerHTML= contant + parseInt(document.getElementById(len).innerHTML);
}
