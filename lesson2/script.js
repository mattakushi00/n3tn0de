const items = ['lol', 'kek', 'cheburek'];
function convertItemsToUpperCase(arr) {
    let result =[];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item === 'kek') break;
        result.push(item.toUpperCase());
    }
    return result;
}
console.log(convertItemsToUpperCase(items), 'ex1');

const convertItemsToUpperCaseV2 = arr => arr.map(item => item.toUpperCase());
console.log(convertItemsToUpperCaseV2(items));

const convertItemsToUpperCaseV3 = arr => arr.map((item, i) => items[i] = item.toUpperCase());
const itemsUpperCase = convertItemsToUpperCaseV3(items);
console.log(items, itemsUpperCase);
const convertItemsToUpperCaseV4 = (arr = []) => {
    return arr.map((item, i) => {
        return items[i] = item.toUpperCase()
    });

};
console.log(convertItemsToUpperCaseV4());
console.log(convertItemsToUpperCaseV4(items));
