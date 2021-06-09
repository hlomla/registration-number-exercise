function RegNo(regArray) {
    var regList = regArray || [];

    function regNoSelected(registrations) {
        var filteredReg =[];
        for (var i = 0; i < filteredReg.length; i++) {
            if (registrations.startsWith('CA') || registrations.startsWith('CY') || registrations.startsWith('CL')) {

                filteredReg.push(registrations)
            }
        }
        return filteredReg

    }
    function display(reg){
        regList.unshift(reg)
    }
    function setRegNo(reg) {
        if (!regList.includes(reg.toUpperCase())) {
            regList.push(reg.toUpperCase())
        }
    }

    function getRegList() {
        return regList
    }

    return {
        regNoSelected,
        setRegNo,
        getRegList,
        display
    }
}