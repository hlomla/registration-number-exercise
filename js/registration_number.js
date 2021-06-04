var regInputElem = document.querySelector('.text-input')
var addBtnElem = document.querySelector('.Add')
var clearBtnElem = document.querySelector('.Clear')
var showBtnElem = document.querySelector('.Show-All')
var regOutput = document.querySelector('.regNo-output')

var regNoArray = [];

if (localStorage['regNumbers']) {
    regNoArray = JSON.parse(localStorage.getItem('regNumbers'))
  
  }
var regInstance = RegNo(regNoArray);


addBtnElem.addEventListener('click', function(){
// var theRegNo = document.querySelector('input[name="location"]:checked')

var theReg = regInstance.regNoSelected(regInputElem.value);
for(let i = 0; i < theReg.length; i++){
    regOutput.innerHTML = regInstance.regNoSelected(theReg, regInputElem.value)
    localStorage.setItem('regNumbers', JSON.stringify(regInstance.getRegList()))
    
}

})

showBtnElem.addEventListener('click', function() {
    regOutput.innerHTML = regInstance.getRegList()
})

clearBtnElem.addEventListener('click', function () {
    localStorage.clear();
    location.reload()
  })

//   addBtnElem.addEventListener('click', function(){
//     localStorage.setItem('regNumbers', JSON.stringify(regInstance.regNoSelected(regInputElem.value)))
// // var theRegNo = document.querySelector('input[name="location"]:checked')

// var theReg = regInstance.regNoSelected(regInputElem.value);
// for(let i = 0; i < theReg.length; i++){
//     regOutput.innerHTML += '<li>'+theReg[i]+'</li>';
// }
