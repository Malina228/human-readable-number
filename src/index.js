module.exports = function toReadable(number) {
    if (number === 0)
        return 'zero';
    
    let result = '';
    let str = String(number);
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (number > 99) {
        result += ones[str[str.length - 3]] + ' hundred ';
        str = str.slice(1);
    }

    if (str > 19) {
        result += tens[str[str.length - 2]] + ' ' + ones[str[str.length - 1]];
        return result.trim();
    }

    if (str > 9) {
        return result += teen[str[str.length - 1]];
    }

    result += ones[str[str.length - 1]];

    return result.trim();
}
