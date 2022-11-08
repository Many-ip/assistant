function getVector() {
    let str=document.getElementById("PEC1-Vector").value
    return str
}

function stringToArrayNumber() {
    let arr=getVector().split(",")
    for (let i = 0; i < arr.length; i++) {
        arr[i]=parseFloat(arr[i])
    }
    arr=arr.sort(function(a,b){
        return a-b
    })
    return arr
}
function sumaVector() {
    let suma=0
    let array=stringToArrayNumber()
    for (let i = 0; i < array.length; i++) {
        suma+= array[i];
    }
    return suma
}

function mediana() {
    let arr=stringToArrayNumber()
    let n=arr.length
    let mitad=parseInt(n/2)
    if(n%2==0){
        let value=(arr[mitad]+arr[mitad-1])/2
        return value
    }else  return arr[mitad]
}

function Q1() {
    let arr=stringToArrayNumber()
    let n=arr.length
    let mitad=parseInt(n/2)
    let q1=arr.slice(0,mitad)
    let q1Mitad=q1.length
    if(q1Mitad%2==0){
        let q1Mitad=(q1.length)/2
        return  (q1[q1Mitad]+q1[q1Mitad-1])/2
    }else return q1[parseInt(q1.length/2)]
    
}
function Q3() {
    let arr=stringToArrayNumber()
    let n=arr.length
    let mitad=parseInt(n/2)
    let q3=0
    if(n%2==0) q3=arr.slice(mitad,n)
    else q3=arr.slice(mitad+1,n)
    console.log(q3)
    if(q3.length%2==0){
        let q3Mitad=(q3.length)/2
        return  (q3[q3Mitad]+q3[q3Mitad-1])/2
    }else return q3[parseInt(q3.length/2)]
}
function solve() {
    document.getElementById("Solution").innerHTML=
    `<div class="container">
        <h1 class="mt-5">Ordenar</h1>
        <p class="lead">Ordenamos el vector para mayor comodidad para los siguientes apartados</p>
        <p>[${stringToArrayNumber()}]</p>

        <h1 class="mt-5">Media/Promedio</h1>
        <p class="lead">Sumamos todos los numeros del vector y se divide por su longitud</p>
        <p>${sumaVector()}/${stringToArrayNumber().length}=${sumaVector()/stringToArrayNumber().length}</p>
    
        <h1 class="mt-5">Mediana</h1>
        <p class="lead">En caso que la logitud sea inpar es escoger justamente la que esta en medio, en caso de ser par, se ha de hacer una media entre los dos valores que esten en el medio</p>
        <p>${mediana()}</p>
        
        <h1 class="mt-5">Q1</h1>
        <p>${Q1()}</p>

        <h1 class="mt-5">Q3</h1>
        <p>${Q3()}</p>
     </div>`
}


