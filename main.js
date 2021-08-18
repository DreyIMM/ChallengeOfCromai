function showCheced(){
    var radios = document.querySelector('input[name ="inlineRadioOptions"]:checked' )
    if(radios != null){
       const value = radios.value
       calculte(value)
    }else{
        alert("Selecione qual deseja encontrar o valor")
    }
}

function calculte(option){
    switch (option) {
      case "option1":
        calculteHipotenusa()
        break;
      case "option2":
        calculteOpost();
        break;
      case "option3":
        calculteAdjc();
        break;
      default:
        break;
    }
}

function calculteHipotenusa(){
    var catetoA = document.getElementById("catetoA").value
    var catetoB = document.getElementById("catetoB").value
    var result = Math.pow(catetoA, 2) + Math.pow(catetoB,2)
    var pText = document.querySelector(".resolucao")
    pText.innerHTML = `Resolução: A² = ${catetoA}² + ${catetoB}²
    <br> Resultado: A² = ${result}<br>
    <h3>${Math.sqrt(result)} `
}


function calculteAdjc(){
    var catetoH = document.getElementById("hipotenusa").value
    var catetoA = document.getElementById("catetoA").value
    var result = Math.pow(catetoH, 2) - Math.pow(catetoA,2) 
    if(result < 0){
      result = result * (-1)
       
    }
    var pText = document.querySelector(".resolucao")
    pText.innerHTML = `Resolução: A² = ${catetoH}² - ${catetoA}²
    <br> Resultado: A² = ${result}<br>
    <h3>${Math.sqrt(result)} `
    
}


function calculteOpost(){
    var catetoH = document.getElementById("hipotenusa").value
    var catetoB = document.getElementById("catetoB").value
    var result = Math.pow(catetoH, 2) - Math.pow(catetoB,2)
    if(result < 0){
        result = result * (-1)
    }
    var pText = document.querySelector(".resolucao")
    pText.innerHTML = `Resolução: A² = ${catetoH}² + ${catetoB}²
    <br> Resultado: A² = ${result}<br>
    <h3>${Math.sqrt(result)} `
    
}

function Disable(){
    var value = document.querySelector('input[name ="inlineRadioOptions"]:checked').value
    var allInputs = document.querySelectorAll(".inputsActive")
    allInputs.forEach(date =>{
        date.removeAttribute("disabled")
    })
    if(value == "option1"){
        desible = document.getElementById("hipotenusa")
    }else if(value =="option2"){
        desible = document.getElementById("catetoA")
    }else{
        desible = document.getElementById("catetoB")
    }
    
    desible.setAttribute("disabled" , true)
}

function clearForm(){
    var catetoH = document.getElementById("hipotenusa")
    var catetoA = document.getElementById("catetoA")
    var catetoB = document.getElementById("catetoB")
    catetoH.value = ''
    catetoA.value = ''
    catetoB.value = ''
}