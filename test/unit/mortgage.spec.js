const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage        = new Mortgage(420000,3.75, 30, 12);
        anotherMortgage = new Mortgage(670000,4.25, 15, 12);
        lastMortgage    = new Mortgage(200000,5.00, 30, 12);
      });

      it('should have a method called monthly payment', () => {
        expect(mortgage.monthlyPayment).to.exist;
      });
    
       it('should display the correct monthly payment', () => {
         expect(mortgage.monthlyPayment()).to.equal(1945.0854846029222);
       });
    
        it('should display the correct monthly payment', () => {
         expect(anotherMortgage.monthlyPayment()).to.equal(5040.265354432128);
       });
    
      it('should display the correct monthly payment', () => {
         expect(lastMortgage.monthlyPayment()).to.equal(1073.6432460242763);
       });
    });