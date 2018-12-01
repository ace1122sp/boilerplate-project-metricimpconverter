/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.getFirstLetterIndex = function(input) {
    const regex = /[a-zA-Z]/;
    return input.indexOf(input.match(regex));
  }
  this.getNum = function(input) {
    let result;
    const firstLetterIndex = this.getFirstLetterIndex(input);

    if (firstLetterIndex < 1) return 'invalid input';    
    result = input.slice(0, firstLetterIndex);

    // check if input has double fraction
    const secondFraction = result.indexOf('/', result.indexOf('/') + 1);
    if (secondFraction > 0) result = 'invalid input';
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
    const firstLetterIndex = this.getFirstLetterIndex(input);

    if (firstLetterIndex < 1 ) return 'invalid input';
    
    const unit = input.slice(firstLetterIndex);
    const validUnit = validUnits.includes(unit);
    
    validUnit ? result = unit : result = 'invalid input';
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const initUnitLowerCase = initUnit.toLowerCase();
    const units = {
      gal: 'l',
      l: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs'
    }
    
    return units[initUnitLowerCase];
  };

  this.spellOutUnit = function(unit) {
    const unitLowerCase = unit.toLowerCase();
    const units = {
      gal: 'gallon',
      l: 'liter',
      mi: 'mile',
      km: 'kilometer',
      lbs: 'pound',
      kg: 'kilogram'
    }

    return units[unitLowerCase];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const convertTable = {
      gal: galToL,
      l: 1 / galToL,
      mi: miToKm,
      km: 1 / miToKm,
      lbs: lbsToKg,
      kg: 1 / lbsToKg
    };
    
    return initNum * convertTable[initUnit];
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
