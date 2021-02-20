
module.exports = (x,y,callBack) => {
    if(x<=0 || y<=0 ){
        setTimeout(()=>{
            callBack(new Error("error"),null)
        }, 2000);
    }else{
        setTimeout(()=>{
            callBack(null, {
                perimeter: ()=>(2*(x+y)),
                area : () =>(x*y)
            })
        }, 2000);
    }

}