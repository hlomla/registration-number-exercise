var regInputElem = document.querySelector('.text-input')
var addBtnElem = document.querySelector('.Add')
var clearBtnElem = document.querySelector('.Clear')
var showBtnElem = document.querySelector('.Show')
var showAllBtnElem = document.querySelector('.Show-All')
var regOutput = document.querySelector('.regNo-output')

var regNoArray = [];

if (localStorage['regNumbers']) {
  regNoArray = JSON.parse(localStorage.getItem('regNumbers').split(','))

}
var regInstance = RegNo(regNoArray);


addBtnElem.addEventListener('click', function () {
  var theReg = regInstance.setRegNo(regInputElem.value);
  for (let i = 0; i < theReg; i++){
    if (theReg.startsWith('CA') || theReg.startsWith('CY') || theReg.startsWith('CL')) {
  }
  return theReg
}
  regOutput.innerHTML = regInstance.regNoSelected(theReg, regInputElem.value)
  localStorage.setItem('regNumbers', JSON.stringify(regInstance.getRegList()))
  regOutput.innerHTML = regInstance.getRegList()
})

showBtnElem.addEventListener('click', function(){
  var specificTownReg = document.querySelector('input[name="location"]:checked')

  let 
  var selectedReg = regInstance.regNoSelected()
  for (let i = 0; i < selectedReg; i++){
    if (selectedReg.startsWith('CA') || selectedReg.startsWith('CY') || selectedReg.startsWith('CL')) {
  }
  return selectedReg
}
regOutput.innerHTML = regInstance.getRegList(specificTownReg)
})

showAllBtnElem.addEventListener('click', function () {
  regOutput.innerHTML = regInstance.getRegList()
 
})

clearBtnElem.addEventListener('click', function () {
  localStorage.clear();
  location.reload()
})