'use strict';

let allMobiles = [];

function Mobile(userName, type, price, condition){
    this.userName = userName,
    this.type = type,
    this.price = 0,
    this.condition = condition,

    allMobiles.push(this);
}


Mobile.prototype.mobilePrice = function(){
    this.price.push(Math.floor(Math.random() * (500 - 100) ) + 100);
}

// console.log(allMobiles.price)


Mobile.prototype.condition = function(){
    if(mobilePrice() < 200){
        this.condition = 'Used';
    } else if (mobilePrice() >= 200){
        this.condition = 'New';
    }
}


let form = document.getElementById('form');
form.addEventListener('submit', submitter);

function submitter(event){
    event.preventDefault();

    let userName = event.target.userName.value;
    // this.userName = userName;

    let type = event.target.type.value;

    // let price = ;

    
    // newInstance.render();
    
    
    let newInstance = new Mobile(userName, type, price, condition);
}

let resultDiv = document.getElementById('result');
let table = document.createElement('table');
resultDiv.appendChild(table);

Mobile.prototype.render = function () {
    let firstTh = document.createElement('th');
    table.appendChild(firstTh);
    firstTh.textContent = 'User';

    let secTh = document.createElement('th');
    table.appendChild(secTh);
    secTh.textContent = 'Type';

    let thirdTh = document.createElement('th');
    table.appendChild(thirdTh);
    thirdTh.textContent = 'Price';

    let fourthTh = document.createElement('th');
    table.appendChild(fourthTh);
    fourthTh.textContent = 'Condition';

    // let firstRow =
}

// console.log(allMobiles.price)