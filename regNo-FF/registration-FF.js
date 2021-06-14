function RegNo(regArray) {
    var regList = regArray || [];
    var filteredReg = []

    function regNoSelected(registrations) {
        var regTowns = registrations.trim().toUpperCase()
        //Regex Formats for towns
        var regex = /^C(A|Y|W)\s[0-9]{6}$/
        if (regex.test(regTowns)) {
            if (!regList.includes(regTowns))
                regList.push(regTowns)
            console.log(regList);
            return regList
        }

    }

    function setRegNo(reg) {
        filteredReg = []
        for (var i = 0; i < regList.length; i++) {
            if (!regList[i].startsWith(reg)) {
                filteredReg.push(regList[i])
            }
        }
        return filteredReg
    }

    function getRegList() {
        return regList
    }
    function regError() {
        if(regList.length === 0-5 && regList === " "){
            return "Please enter a registration number!"
        }
        if(regList)
    }

    return {
        regNoSelected,
        setRegNo,
        getRegList,
        regError
    }
}