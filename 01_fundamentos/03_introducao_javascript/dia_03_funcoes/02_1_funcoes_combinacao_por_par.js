function sortNumber(array) {
    let temporario;
    for (let index = 0; index < array.length; index += 1) {
        for (let compare = index + 1; compare < array.length; compare += 1) {
            if (array[index] > array[compare]) {
                temporario = array[compare];
                array[compare] = array[index];
                array[index] = temporario;
            }
        }
    }
    return array;

}

console.log(sortNumber([9, 1, 2, 3, 9, 5, 7]));