var regInputElem = document.querySelector('.text-input')
var addBtnElem = document.querySelector('.Add')
var clearBtnElem = document.querySelector('.Clear')
var showBtnElem = document.querySelector('.Show')
var showAllBtnElem = document.querySelector('.Show-All')
var regOutput = document.querySelector('.regNo-output')

var regNoArray = [];

if (localStorage['regNumbers']) {
  regNoArray = JSON.parse(localStorage.getItem('regNumbers'))

}
var regInstance = RegNo(regNoArray);


addBtnElem.addEventListener('click', function () {
 // var regInputElem = document.querySelector('.text-input').value
 regOutput.innerText = "";
  var theReg = regInstance.regNoSelected(regInputElem.value);

  for(let i = 0; i < theReg.length; i++){
    var list = document.createElement('button')
    list.classList.add("btn")
    list.innerHTML = theReg[i];
    regOutput.appendChild(list)
  }
  localStorage.setItem('regNumbers', JSON.stringify(regNoArray))
  //regOutput.innerHTML = regInstance.getRegList()
});

function filter(){
  var storedRegNo = JSON.parse(localStorage.getItem('regNumbers'))
  var specificTownReg = document.querySelector('input[name="location"]:checked')
  // var singleReg = regInstance.getRegList(addBtnElem.value)
  
  // var checkedTown = regInstance.setRegNo(townRegNumbers)
  // storedRegNo = storedRegNo
 if(specificTownReg){
  var townRegNumbers = specificTownReg.value;
   for(let i = 0; i < storedRegNo.length; i++){
     if(storedRegNo[i].startsWith(townRegNumbers)){
     //  console.log(storedRegNo[i])
       var list = document.createElement('button')
      list.classList.add("btn2")
      list.innerText = storedRegNo[i];
     
      regOutput.appendChild(list) 
     }
     
   }
 }
};

showAllBtnElem.addEventListener('click', function () {
  //regOutput.innerHTML = regInstance.getRegList()
  var storedRegNo = JSON.parse(localStorage.getItem('regNumbers'))
  
  for(let i = 0; i < storedRegNo.length; i++){
    //  console.log(storedRegNo[i])
      var list = document.createElement('button')
     list.classList.add("btn3")
     list.innerText = storedRegNo[i];
    
     regOutput.appendChild(list)    
  }
 
});

clearBtnElem.addEventListener('click', function () {
  localStorage.clear();
  location.reload()
});

showBtnElem.addEventListener('click', filter);