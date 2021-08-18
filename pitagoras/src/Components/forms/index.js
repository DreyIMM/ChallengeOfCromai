import React from 'react';


const Form =() =>{

  const SendSubmit = event=>{
    event.preventDefault();
    var radios = document.querySelector('input[name ="inlineRadioOptions"]:checked' )
    if(radios != null){
      const value = radios.value
      calculte(value)
    }else{
        alert("Selecione qual deseja encontrar o valor")
    }
  }

  const calculte = option =>{
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
    clearForm()
  }

const calculteHipotenusa =() =>{
    var catetoA = document.getElementById("catetoA").value
    var catetoB = document.getElementById("catetoB").value
    var result = Math.pow(catetoA, 2) + Math.pow(catetoB,2)
    var pText = document.querySelector(".resolucao")
    pText.innerHTML = `Resolução: A² = ${catetoA}² + ${catetoB}²
    <br> Resultado: A² = ${result}<br>
    <h3>${Math.sqrt(result)} `
}


const calculteAdjc =() =>{
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


const calculteOpost =() =>{
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

 const clearForm= () =>{
  var catetoH = document.getElementById("hipotenusa")
  var catetoA = document.getElementById("catetoA")
  var catetoB = document.getElementById("catetoB")
  catetoH.value = ''
  catetoA.value = ''
  catetoB.value = ''
}

const Disable = () =>{
  var value = document.querySelector('input[name ="inlineRadioOptions"]:checked').value
  var allInputs = document.querySelectorAll(".inputsActive")
  allInputs.forEach(date =>{
      date.removeAttribute("disabled")
  })
  var desible
  if(value == "option1"){
      desible = document.getElementById("hipotenusa")
  }else if(value == "option2"){
      desible = document.getElementById("catetoA")
  }else{
      desible = document.getElementById("catetoB")
  }
  
  desible.setAttribute("disabled" , true)
}


return (
  <form onSubmit={SendSubmit}>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="option1"
        value="option1"
        oncClick={Disable}
      />
      <label className="form-check-label" for="option1">
        Hipotenusa
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="option2"
        value="option2"
        oncClick={Disable}
      />
      <label className="form-check-label" for="option2">
        Cateto A(Oposto)
      </label>
    </div>
    <div className="form-check form-check-inline mb-5">
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="option3"
        value="option3"
        oncClick={Disable}
      />
      <label className="form-check-label" for="option3">
        Cateteo B(Adjacente)
      </label>
    </div>
    <div className="values">
      <div className="mb-3">
        <label for="hipotenusa" className="form-label">
          Hipotenusa
        </label>
        <input
          type="number"
          className="inputsActive form-control"
          id="hipotenusa"
          placeholder=""
        />
      </div>
      <div className="mb-3">
        <label for="catetoA" className="form-label">
          Cateto A
        </label>
        <input
          type="number"
          className="inputsActive form-control"
          id="catetoA"
          name="catetoA"
          placeholder=""
        />
      </div>
      <div className="mb-3">
        <label for="catetoB" className="form-label">
          Cateto B
        </label>
        <input
          type="number"
          className="inputsActive form-control"
          id="catetoB"
          name="catetoB"
          placeholder=""
        />
        <button  className="mt-3 btn btn-primary" >
          calcular
        </button >
      </div>
    </div>
  </form>
);
}

export default Form 