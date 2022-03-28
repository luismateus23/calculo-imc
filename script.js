function Calcular(){
    let altura1 = document.getElementById('altura')
    let alt = Number(altura.value)
    let peso1 = document.getElementById('peso')
    let pes = Number(peso1.value)
    var resultado = document.getElementById('res')


   

    if(alt == "" || pes == ""){
        window.alert("Digite um valor válido, por gentileza!")
    }else{

        let imc = (pes / (alt * alt)).toFixed(1)
        resultado.innerHTML += `${imc} <br>`

        if(imc < 18.5){
            resultado.innerHTML += 'Abaixo do Peso'
        }else if(imc >= 18.5 && imc < 24.9){
            resultado.innerHTML += 'Peso normal'
        }else if(imc >= 24.9 && imc < 29.9){
            resultado.innerHTML += 'Sobrepeso'
        }else if(imc >= 29.9 && imc < 34.9){
            resultado.innerHTML += 'Obesidade Grau 1'
        }else if(imc >= 34.9 && imc < 39.9){
            resultado.innerHTML += 'Obesidade Grau 2'
        }else if(imc >= 40){
            resultado.innerHTML += 'Obesidade Grau 3 ou Mórbida'
        }

    }

    
}
function Limpar(){
    let altura1 = document.getElementById('altura')
    let peso1 = document.getElementById('peso')
    var resultado = document.getElementById('res')
    altura1.value = ""
    peso1.value = ""
    resultado.innerHTML = ""
}

