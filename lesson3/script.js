function firstLetterToUpper(string) {
    return string.slice(0, string.length - 3) + string[string.length - 1]
}

/*console.log(firstLetterToUpper());*/
let str = 'abcdef';
Array.from(str).splice(2, 2).join('');
console.log(str);