const f3=()=>{
    console.log(3)
}

function f2(){
    let time=Date.now()
    console.log(time)

    do{

    }while(Date.now()-time<3000)

    console.log(2)
    f3()
}

const f1=function(){
    console.log(1)
    f2()
}

console.log('inicio')
f1()
console.log(4)
console.log('fin')