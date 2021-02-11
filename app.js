let rectangle = require('./rectangle')

let solveRectangle = function (l,b) {
    if(l<=0 || b<=0){
        console.log("the value of l and b must be greater than 0. l=",l,"b=",b)
    }
    else{
        console.log("the perimeter =", rectangle.perimeter(l,b))
        console.log("the area =", rectangle.area(l,b))
    }

}
console.log("hello")
solveRectangle(3,4)
solveRectangle(0,4)