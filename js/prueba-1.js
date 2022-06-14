// Pregunta 1
// Hallar el mayor y menor numero
const array = [1, 3, 0, 18, 23, 5, 23, 13, -1, 43];

function mayorMenor(arr) {
    let mayor = 0;
    let menor = arr[0];

    for (let i=0; i <= arr.length - 1; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        };

        if (arr[i] < menor) {
            menor = arr[i];
        };
    };

    return { mayor, menor };
};

let res = mayorMenor(array);
// console.log(res);


// Pregunta 2
// Hallar el mayor y menor numero
const array2 = [1, 3, 0, 18, 23, 5, 23, 13, -1, 43];
function menorMayor(arr) {
    let menor = Math.min(...arr);
    let mayor = Math.max(...arr);

    return { mayor, menor };

};
let res2 = menorMayor(array2);
console.log(res2);