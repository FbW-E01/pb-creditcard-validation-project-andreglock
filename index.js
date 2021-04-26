function validateCreditCard(creditCardNum) {
    const cardArray = creditCardNum.split('-');

    let stringOfNumbers = cardArray.join('');

    if (stringOfNumbers.length !== 16) {
        return {
            valid: false, 
            number: creditCardNum, 
            error: '_wrong length_'
        }
    }
    
    const d1 = parseInt(stringOfNumbers.slice(0, 1));
    const d2 = parseInt(stringOfNumbers.slice(1, 2));
    const d3 = parseInt(stringOfNumbers.slice(2, 3));
    const d4 = parseInt(stringOfNumbers.slice(3, 4));
    const d5 = parseInt(stringOfNumbers.slice(4, 5));
    const d6 = parseInt(stringOfNumbers.slice(5, 6));
    const d7 = parseInt(stringOfNumbers.slice(6, 7));
    const d8 = parseInt(stringOfNumbers.slice(7, 8));
    const d9 = parseInt(stringOfNumbers.slice(8, 9));
    const d10 = parseInt(stringOfNumbers.slice(9, 10));
    const d11 = parseInt(stringOfNumbers.slice(10, 11));
    const d12 = parseInt(stringOfNumbers.slice(11, 12));
    const d13 = parseInt(stringOfNumbers.slice(12, 13));
    const d14 = parseInt(stringOfNumbers.slice(13, 14));
    const d15 = parseInt(stringOfNumbers.slice(14, 15));
    const d16 = parseInt(stringOfNumbers.slice(15, 16));

    if (d1 === d2 && d2 === d3 && d3 === d4 && d4 === d5 && d5 === d6 && d6 === d7 && d7 === d8 && d8 === d9 && d9 === d10 && d10 === d11 && d11 === d12 && d12 === d13 && d13 === d14 && d14 === d15 && d15 === d16) {
        return {
            valid: false, 
            number: creditCardNum, 
            error: '_only one type of number_'
        }
    }

    if (d16 % 2 !== 0) {
        return {
            valid: false, 
            number: creditCardNum, 
            error: '_odd final number_'
        } 
    }

    if (d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16 < 16) {
        return {
            valid: false, 
            number: creditCardNum, 
            error: '_sum less than 16_'
        } 
    }

    const sum = (d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14 + d15 + d16);
    if (isNaN(sum)) {
        return {
            valid: false, 
            number: creditCardNum, 
            error: '_invalid characters_'
        } 
    }

    const checkSum = ((d2 * 2) % 10 + ((d2 * 2) % 100 - (d2 * 2) % 10)/10 +
            (d4 * 2) % 10 + ((d4 * 2) % 100 - (d4 * 2) % 10)/10 +
            (d6 * 2) % 10 + ((d6 * 2) % 100 - (d6 * 2) % 10)/10 +
            (d8 * 2) % 10 + ((d8 * 2) % 100 - (d8 * 2) % 10)/10 +
            (d10 * 2) % 10 + ((d10 * 2) % 100 - (d10 * 2) % 10)/10 +
            (d12 * 2) % 10 + ((d12 * 2) % 100 - (d12 * 2) % 10)/10 +
            (d14 * 2) % 10 + ((d14 * 2) % 100 - (d14 * 2) % 10)/10 +
            (d16 * 2) % 10 + ((d16 * 2) % 100 - (d16 * 2) % 10)/10 +
            d1 + d3 + d5 + d7 + d9 + d11 + d13 + d15);

    if (checkSum % 10 === 0) {
        return {
            valid: true, 
            number: creditCardNum,
        }
    } else {
        return {
            valid: false,
            number: creditCardNum,
            error: "_Luhn’s_Algorithm_"
        }
    }
};

/**** tests *****/
console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }
console.log(validateCreditCard('121-1111-1111-1112')); //{ valid: false, number: '121-1111-1111-1112',error: ‘wrong_length’ }




