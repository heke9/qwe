let arrQ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

arrQ.forEach(q => {
    if (q % 7 == 1 || q % 7 == 2 || q % 7 == 5) {
        console.log(q)
    }
});

for (let i = 1; i < 180; i = i + 45) {

    x = Math.pow(Math.sin(i), 2)
    y = Math.pow(Math.cos(i), 2)

    function toDegrees(angle) {
        return angle * (180 / Math.PI);
    }

    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }

    toDegrees(x)
    toDegrees(y)

    console.log(x - y)
}

let arrA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let arrB = []

arrA.forEach(a => {
    if (a % 2 == 0) {
        arrB.push(a)
    }
});

console.log(arrA)
console.log(arrB)