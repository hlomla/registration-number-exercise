describe('Registration Number Function', function () {

    describe('Return number plate that is capitalized', function () {
        it('should be able to return a registration number from Cape Town in upperCase', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected()

            registrationNo.setRegNo('ca 236 555')
            registrationNo.setRegNo('ca 120 230')
            registrationNo.setRegNo('ca 258 413')

            registrationNo.getRegList(['ca 258 413', 'ca 120 230', 'ca 236 555'])
            assert.deepEqual((['CA 258 413', 'CA 120 230', 'CA 236 555'], registrationNo.setRegNo(['CA 258 413', 'CA 120 230', 'CA 236 555'])))

        });
        it('should be able to return a registration number from Parow in upperCase', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected()

            registrationNo.setRegNo('cy 221 655')
            registrationNo.setRegNo('cy 222 420')


            registrationNo.getRegList(['cy 221 655', 'cy 222 420'])
            assert.deepEqual((['CY 221 655', 'CY 222 420'], registrationNo.setRegNo(['CY 221 655', 'CY 222 420'])))

        });
        it('should be able to return a registration number from Stellenbosch in upperCase', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected()

            registrationNo.setRegNo('cw 236 555')
            registrationNo.setRegNo('cw 120 230')
            registrationNo.setRegNo('cw 258 413')

            registrationNo.getRegList(['cw 258 413', 'cw 120 230', 'cw 236 555'])
            assert.deepEqual((['CW 258 413', 'CW 120 230', 'CW 236 555'], registrationNo.setRegNo(['CW 258 413', 'CW 120 230', 'CW 236 555'])))

        });
    });
    describe('Return registration numbers from specific towns', function () {
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
            assert.deepEqual((['CA 258 413', 'CA 120 230', 'CA 236 555'], registrationNo.setRegNo(['CA 258 413', 'CA 120 230', 'CA 236 555'])))

        })
        it('should be able to return registration numbers from Parow', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected()

            registrationNo.setRegNo('ca 236 555')
            registrationNo.setRegNo('ca 120 230')
            registrationNo.setRegNo('cy 222 420')
            registrationNo.setRegNo('ca 258 413')
            registrationNo.setRegNo('cw 120 230')
            registrationNo.setRegNo('cw 258 413')


            registrationNo.getRegList(['cy 222 420'])
            assert.deepEqual(((['CY 222 420']), registrationNo.setRegNo(['CY 222 420'])))

        });
        it('should be able to return registration numbers from Stellenbosch', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected()

            registrationNo.setRegNo('ca 236 555')
            registrationNo.setRegNo('ca 120 230')
            registrationNo.setRegNo('cy 222 420')
            registrationNo.setRegNo('ca 258 413')
            registrationNo.setRegNo('cw 120 230')
            registrationNo.setRegNo('cw 258 413')


            registrationNo.getRegList(['cw 120 230','cw 258 413'])
            assert.deepEqual(((['CW 120 230','CW 258 413']), registrationNo.setRegNo(['CW 120 230','CW 258 413'])))

        });
        it('should be able to return registration numbers in array', function () {
            let registrationNo = RegNo();

            registrationNo.regNoSelected()

            registrationNo.setRegNo('ca 236 555')
            registrationNo.setRegNo('ca 120 230')
            registrationNo.setRegNo('cy 222 420')
            registrationNo.setRegNo('ca 258 413')
            registrationNo.setRegNo('cw 120 230')
            registrationNo.setRegNo('cw 258 413')


            registrationNo.getRegList(['cw 120 230','cw 258 413', 'ca 258 413','cy 222 420','ca 120 230','ca 236 555'])
            assert.deepEqual(((['CW 120 230','CW 258 413', 'CA 258 413','CY 222 420','CA 120 230','CA 236 555']), registrationNo.setRegNo(['CW 120 230','CW 258 413', 'CA 258 413','CY 222 420','CA 120 230','CA 236 555'])))

        });
    });
});