const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const transformedArray = array.map(item => {
    if (item === '') {
        return 'empty string';
    } else {
        return item;
    }
});
console.log(transformedArray);
