function solve1() {
    let html=`<table class="table table-bordered border-primary">
    <thead>
    <tr>
        <th scope="col"></th>
        <th scope="col">1</th>
        <th scope="col">2</th>
        <th scope="col">3</th>
        <th scope="col">4</th>
        <th scope="col">5</th>
        <th scope="col">6</th>
    </tr>
    </thead>
    <tbody>`;
    let count=0
    let n1=parseInt(document.getElementById("PEC2-n1").value)
    let n2=parseInt(document.getElementById("PEC2-n2").value)
    console.log(n1)
    console.log(n2)
    if(Number.isNaN(n1)&&Number.isNaN(n2))document.getElementById("Solution1").innerHTML=`<h5>Falta introducir algun valor</h5> `
    else{
        let option=document.getElementById("option").value
        if(option=="S"){
            for (let i = 1; i <= 6; i++) {
                html+=`<tr><th scope="row">${i}</th>`;
                for (let j = 1; j <= 6; j++) {
                    if((i+j)<=n2&&n1<=(i+j)){
                        html+=`<td class="table-warning">${i+j}</td>`
                        count++;
                    } else html+=`<td>${i+j}</td>`; 
                }
                html+=`</tr>`;
            }
            html+=`</tbody></table><br><h6>Se observan ${count} casos favorables respecto ${6*6} posibilidades </h6>`;
            
            document.getElementById("Solution1").innerHTML=html
        }
        else if (option=="P") {
            for (let i = 1; i <= 6; i++) {
                html+=`<tr><th scope="row">${i}</th>`;
                for (let j = 1; j <= 6; j++) {
                    if((i*j)<=n2&&n1<=(i*j)){
                        html+=`<td class="table-warning">${i*j}</td>`
                        count++;
                    } else html+=`<td>${i*j}</td>`;  
                }
                html+=`</tr>`;
            }
            html+=`</tbody></table><br><h6>Se observan ${count} casos favorables respecto ${6*6} posibilidades </h6>`
                
            document.getElementById("Solution1").innerHTML=html
        } else {
            document.getElementById("Solution1").innerHTML=`<h5>Opcion no Selecionada</h5> `
        }
    }
    
    
}

function solve2() {
    html="</br>";
    let A=parseFloat(document.getElementById("A").value)
    let B=parseFloat(document.getElementById("B").value)
    let AB=parseFloat(document.getElementById("AB").value)
    let AuB=A+B-AB
    console.log(AuB)
    if(AB==A*B) html+="<p>A y B son sucesos INDEPENDIENTES, ya que: P(AnB)=P(A)*P(B)</p></br>"
    if(AB=!0) html+="<p>A y B son sucesos COMPATIBLES, ya que: P(AnB) ≠ 0</p></br>"
    html+=`<p>P(AuB) = P(A)+P(B)-P(AnB)=${AuB}</p>`
    html+=`<p>P(A)*P(B)=${A*B}</p>`
    html+=`<p>P(A<sup>c</sup>)=${1-A}</p>`
    html+=`<p>P(A|B)= P(AnB)/P(B)= (P(A)*P(B))/P(B)=P(A)=${A}</p>`
    document.getElementById("Solution2").innerHTML=html
}