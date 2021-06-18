describe('Registration Number Function', function () {

    describe('Return number plate using Regex conditions', function () {
        it('should be able to return a registration number from Cape Town in upperCase', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected()

            registrationNo.setRegNo('ca 236555')
            registrationNo.setRegNo('ca 120230')
            registrationNo.setRegNo('ca 258413')

            registrationNo.getRegList(['CA 258413', 'CA 120230', 'CA 236555'])
            assert.deepEqual((['CA 258413', 'CA 120230', 'CA 236555'], registrationNo.regNoSelected(['CA 258413', 'CA 120230', 'CA 236555'])))

        });
        it('should be able to return a registration number from Parow in upperCase', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected()

            registrationNo.setRegNo('cy 221 655')
            registrationNo.setRegNo('cy 222 420')


            registrationNo.getRegList(['cy 221655', 'cy 222420'])
            assert.deepEqual((['CY 221655', 'CY 222420'], registrationNo.regNoSelected(['CY 221655', 'CY 222420'])))

        });
        it('should be able to return a registration number from Stellenbosch in upperCase', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected()

            registrationNo.setRegNo('cw 236 555')
            registrationNo.setRegNo('cw 120 230')
            registrationNo.setRegNo('cw 258 413')

            registrationNo.getRegList(['cw 258413', 'cw 120230', 'cw 236555'])
            assert.deepEqual((['CW 258413', 'CW 120230', 'CW 236555'], registrationNo.regNoSelected(['CW 258413', 'CW 120230', 'CW 236555'])))

        });
    });
    describe('Return registration numbers filtered for each specific towns', function () {
        it('should be able to return registration numbers from Cape Town', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected()

            registrationNo.setRegNo('ca 236 555')
            registrationNo.setRegNo('ca 120 230')
            registrationNo.setRegNo('cy 222 420')
            registrationNo.setRegNo('ca 258 413')
            registrationNo.setRegNo('cw 120 230')
            registrationNo.setRegNo('cw 258 413')


            registrationNo.getRegList(['ca 258 413', 'ca 120 230', 'ca 236 555'])
            assert.deepEqual((['CA 258413', 'CA 120230', 'CA 236555'], registrationNo.regNoSelected(['CA 258413', 'CA 120230', 'CA 236555'])))

        })
        it('should be able to return registration numbers from Parow', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected();

            registrationNo.setRegNo('ca 236 555')
            registrationNo.setRegNo('ca 120 230')
            registrationNo.setRegNo('cy 222 420')
            registrationNo.setRegNo('ca 258 413')
            registrationNo.setRegNo('cw 120 230')
            registrationNo.setRegNo('cw 258 413')


            registrationNo.getRegList(['CY 222420'])
            assert.deepEqual(['CY 222420'], registrationNo.regNoSelected('CY 222420'));

        })

        it('should be able to return registration numbers from Stellenbosch', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected()

            registrationNo.setRegNo('ca 236 555')
            registrationNo.setRegNo('ca 120 230')
            registrationNo.setRegNo('cy 222 420')
            registrationNo.setRegNo('ca 258 413')
            registrationNo.setRegNo('cw 120 230')
            registrationNo.setRegNo('cw 258 413')


            registrationNo.getRegList(['cw 120 230', 'cw 258 413'])
            assert.deepEqual(((['CW 120230', 'CW 258413']), registrationNo.regNoSelected(['CW 120230', 'CW 258413'])))

        });
        it('should be able to return all the registration numbers', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected()

            registrationNo.setRegNo('ca 236 555')
            registrationNo.setRegNo('ca 120 230')
            registrationNo.setRegNo('cy 222 420')
            registrationNo.setRegNo('ca 258 413')
            registrationNo.setRegNo('cw 120 230')
            registrationNo.setRegNo('cw 258 413')


            registrationNo.getRegList(['cw 120 230', 'cw 258 413', 'ca 258 413', 'cy 222 420', 'ca 120 230', 'ca 236 555'])
            assert.deepEqual(((['CW 120 230', 'CW 258 413', 'CA 258 413', 'CY 222 420', 'CA 120 230', 'CA 236 555']), registrationNo.regNoSelected(['CW 120 230', 'CW 258 413', 'CA 258 413', 'CY 222 420', 'CA 120 230', 'CA 236 555'])))

        });
    });
    describe('Return errors', function () {
        it('should be able an error when input is a empty string', function () {
            let registrationNo = RegNo();

            assert.equal("Please enter a registration number!", registrationNo.regError(""))
        });
        it('should be able to return an error if a registration is repeated', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected("CY 420420")

            assert.equal("Registration already added!", registrationNo.regError("CY 420420"));
        });
        it("should be able to return an error if it's not a registration number", function () {
            let registrationNo = RegNo();

            assert.equal("Invalid Entry!", registrationNo.regError("Hlomla#"))
        });
        it("should be able to return an error if it's not a registration number from the list", function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected("CL 452452")


            assert.equal("Invalid Entry!", registrationNo.regError("CL 452452"))
        });
    });
    describe('Return success messages', function () {
        it('should be able to return a successful message when correct registration number is entered', function () {
            let registrationNo = RegNo();

            assert.equal("Registration number added successfully!", registrationNo.successMessage(""))
        });
    });
});