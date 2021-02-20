let rect = require('./rectangle')

let solveRectangle = function (l,b) {
    console.log("Proceding to the perimeter and area computing. l: ",l," b: ",b)
    rect(l, b, (err, rectangle) => {
        if(err){
            console.log(err.message)
        }
        else {
            console.log("the perimeter =", rectangle.perimeter(l, b))
            console.log("the area =", rectangle.area(l, b))
        }

    })
    console.log("hello. l: ",l," b: ",b)
}

solveRectangle(3,4)
solveRectangle(0,4)