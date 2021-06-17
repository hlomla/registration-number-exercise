function RegNo(regArray) {
    var regList = regArray || [];
    var filteredReg = []

    function regNoSelected(registrations) {
        var regTowns = registrations

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
    function regError(reg) {
        if (reg === "") {
            return "Please enter a registration number!"
        }
        else if (regList.includes(reg)) {
            return "Registration already added!"
        }
        else if(reg !== '') {
            if(reg === 'Invalid Entry!')
            return;
    }
}
    function successMessage() {
            return "Registration number added successfully!"
        
    }
    function regErrTime() {
        return " "
    }

    return {
        regNoSelected,
        setRegNo,
        getRegList,
        regError,
        regErrTime,
        successMessage
    }
}