var regInputElem = document.querySelector('.text-input')
var addBtnElem = document.querySelector('.Add')
var clearBtnElem = document.querySelector('.Clear')
var showBtnElem = document.querySelector('.Show')
var showAllBtnElem = document.querySelector('.Show-All')
var regOutput = document.querySelector('.regNo-output')
var regErrorElem = document.querySelector('.regErrs')

var regNoArray = [];

if (localStorage['regNumbers']) {
  regNoArray = JSON.parse(localStorage.getItem('regNumbers'))

}

var regInstance = RegNo(regNoArray);

document.body.onload = (()=> {
 
  var storedRegNo = JSON.parse(localStorage.getItem('regNumbers'))

  for (let i = 0; i < storedRegNo.length; i++) {
    var list = document.createElement('button')
    list.classList.add("btn4")
    list.innerText = storedRegNo[i];

    regOutput.appendChild(list)
  }
}) 



addBtnElem.addEventListener('click', function () {
  setTimeout(function () { regErrorElem.innerHTML = regInstance.regErrTime() }, 3000);


  regOutput.innerText = "";
  
  if (regInputElem.value === '') {

    const regErrMessage = regInstance.regError(regInputElem.value);
    regErrorElem.innerHTML = regErrMessage;
    return;
  }


  var theReg = regInstance.regNoSelected(regInputElem.value);

  if (theReg !== "") {
    if (theReg === 'Invalid Entry!') {
      regErrorElem.innerHTML = theReg;
      return;
    }
    regErrorElem.innerHTML = regInstance.successMessage();
    for (let i = 0; i < theReg.length; i++) {
      var list = document.createElement('button')
      list.classList.add("btn")
      list.innerHTML = theReg[i];
      regOutput.appendChild(list)
    }
  }
  localStorage.setItem('regNumbers', JSON.stringify(regNoArray))
});

function filter() {
  var storedRegNo = JSON.parse(localStorage.getItem('regNumbers'))
  var specificTownReg = document.querySelector('input[name="location"]:checked')

  if (specificTownReg) {
    var townRegNumbers = specificTownReg.value;
    for (let i = 0; i < storedRegNo.length; i++) {
      if (storedRegNo[i].startsWith(townRegNumbers)) {

        var list = document.createElement('button')
        list.classList.add("btn2")
        list.innerText = storedRegNo[i];

        regOutput.appendChild(list)
      }

    }
  }
};

showAllBtnElem.addEventListener('click', function () {
  var storedRegNo = JSON.parse(localStorage.getItem('regNumbers'))

  for (let i = 0; i < storedRegNo.length; i++) {
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