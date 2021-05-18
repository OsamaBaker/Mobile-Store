'use strict';

let allMobiles = [];
let resultDiv = document.getElementById('result');


function Mobile(userName, type){
    this.userName = userName,
    this.type = type,
    this.price = [],
    this.condition = [];


    allMobiles.push(this);
}

Mobile.prototype.calcPrice = function(){
    this.price.push(Math.floor(Math.random() * (500 - 100) ) + 100);

}

Mobile.prototype.declareCondition= function(){

    if(this.price < 200){
        this.condition.push('Old');
    } else{
        this.condition.push('New');
    }
}



let form = document.getElementById('form');

form.addEventListener('submit', submitHandler);

function submitHandler(event){
    event.preventDefault();

    let userName = event.target.userName.value;
    let phones = event.target.phones.value;

    let newInstance = new Mobile(userName, phones);
    newInstance.calcPrice();
    newInstance.declareCondition();


  
    newInstance.render();
   
   
    localStorage.setItem('mobile',JSON.stringify(allMobiles));
   
}


function cheaklocalstorage(){
    if(localStorage.getItem('mobile')){
      allMobiles=JSON.parse(localStorage.getItem('mobile'));
      render();
    }
  }
let table = document.createElement('table');
resultDiv.appendChild(table)
let titleRow = document.createElement('tr');
table.appendChild(titleRow);

function makeHeader(){

   let userTh = document.createElement('th');
   titleRow.appendChild(userTh);
   userTh.textContent = "User";

   let typeTh = document.createElement('th');
   titleRow.appendChild(typeTh);
   typeTh.textContent = "Type";

   let priceTh = document.createElement('th');
   titleRow.appendChild(priceTh);
   priceTh.textContent = "Price";

   let conditionTh = document.createElement('th');
   titleRow.appendChild(conditionTh);
   conditionTh.textContent = "Condition";

}



Mobile.prototype.render = function(){
  
    
    let secondRow = document.createElement('tr');
    table.appendChild(secondRow);
    
    

    let userName = document.createElement('td');
    secondRow.appendChild(userName);

    let type = document.createElement('td');
    secondRow.appendChild(type);

    let price = document.createElement('td');
    secondRow.appendChild(price);

    let condition = document.createElement('td');
    secondRow.appendChild(condition);

    for(let i=0; i<allMobiles.length; i++){
        
    userName.textContent = this.userName;
    type.textContent = this.type;
    price.textContent = this.price;
    condition.textContent = this.condition;
    }
    
    
   
    
}


function render(){
    let array = [];
    array = JSON.parse(localStorage.getItem('mobile'));
    
    
    

   

    for(let i=0; i<array.length; i++){
        let newSecondRow = document.createElement('tr');
    table.appendChild(newSecondRow);

        let userName = document.createElement('td');
        newSecondRow.appendChild(userName);
    
         let type = document.createElement('td');
         newSecondRow.appendChild(type);
    
         let price = document.createElement('td');
         newSecondRow.appendChild(price);
    
         let condition = document.createElement('td');
         newSecondRow.appendChild(condition);
    userName.textContent = array[i].userName;
     type.textContent = array[i].type;
     price.textContent = array[i].price;
     condition.textContent = array[i].condition;
    }
    
    
   
    
}

makeHeader();
cheaklocalstorage()