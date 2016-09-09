var Luhn = require('./luhn');


describe('Luhn', function() {

  it('check digit',function() {
    var luhn = new Luhn(34567);
    expect(luhn.checkDigit()).toEqual(7);
  });

  it('check digit again',function() {
    var luhn = new Luhn(91370);
    expect(luhn.checkDigit()).toEqual(0);
  });

  xit('addends',function() {
    var luhn = new Luhn(12121);
    expect(luhn.addends()).toEqual([1, 4, 1, 4, 1]);
  });

  xit('too large addend',function() {
    var luhn = new Luhn(8631);
    expect(luhn.addends()).toEqual([7, 6, 6, 1]);
  });

  it('checksum',function() {
    var luhn = new Luhn(4913);
    expect(luhn.checkSum()).toEqual(22);
  });

  it('checksum again',function() {
    var luhn = new Luhn(201773);
    expect(luhn.checkSum()).toEqual(21);
  });

  it('invalid number',function() {
    var luhn = new Luhn(738);
    expect(luhn.valid()).toEqual(false);
  });

  it('invalid number',function() {
    var luhn = new Luhn(8739567);
    expect(luhn.valid()).toEqual(true);
  });

  it('create valid number',function() {
    var luhn = new Luhn(123);
    expect(luhn.create()).toEqual(1230);
  });

  it('create other valid number',function() {
    var luhn = Luhn.prototype.create(873956);
    expect(luhn).toEqual(8739567);
  });

  xit('create yet another valid number',function() {
    var luhn = Luhn.prototype.create(837263756);
    expect(luhn).toEqual(8372637564);
  });

});
