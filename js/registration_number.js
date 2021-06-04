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


addBtnElem.addEventListener('click', function () {
  var theReg = regInstance.setRegNo(regInputElem.value);
  for (let i = 0; i < theReg; i++){

  }
  regOutput.innerHTML = regInstance.regNoSelected(theReg, regInputElem.value)
  localStorage.setItem('regNumbers', JSON.stringify(regInstance.getRegList()))
  regOutput.innerHTML = regInstance.getRegList()
})

showBtnElem.addEventListener('click', function () {
  var theRegNo = document.querySelector('input[name="location"]:checked')
  regOutput.innerHTML = regInstance.getRegList(theRegNo)
 
})

clearBtnElem.addEventListener('click', function () {
  localStorage.clear();
  location.reload()
})