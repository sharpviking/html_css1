// for (let i = 8; i > 0; i--) {
//     if (i % 2 != 0) console.log(i);
// }



// factory function

// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');

//         }

//     };
// };

// const circle1 = createCircle(1);
// console.log(circle1);



//constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);
