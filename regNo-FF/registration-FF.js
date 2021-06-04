function RegNo(regArray) {
    var regList = regArray || [];

    function regNoSelected(registrations) {
        var filteredReg = [];
        for (var i = 0; i < filteredReg.length; i++) {
            if (registrations[i].startsWith('CA') || registrations[i].startsWith('CY') || registrations[i].startsWith('CL')) {

                filteredReg.push(registrations[i])
            }
        }
        return filteredReg

    }
    function setRegNo(reg) {
        if (!regList.includes(reg)) {
            regList.push(reg)
        }
    }

    function getRegList() {
        return regList
    }

    return {
        regNoSelected,
        setRegNo,
        getRegList,
    }
}