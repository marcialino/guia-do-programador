function calcular(){
    var num1 = window.document.getElementById('num1')
    var num2 = window.document.getElementById('num2')
    var limite = window.document.getElementById('limite')
    var res = window.document.getElementById('res')
  
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var lim = Number(limite.value)

    var mult_n1 = 0
    var mult_n2 = 0

    for(var i =0; i<lim; i++){
        mult_n1 +=(i % n1 == 0) ? i:0
        mult_n2 +=(i % n2 == 0) ? i:0
    }
    res.innerHTML = `Somatório dos múltiplos de  ${n1}: ${mult_n1} <br/> Somatório  dos mpultiplos de ${n2}: ${mult_n2} <br/> Somatório dos múltiplos de ${n1} e ${n2}: ${mult_n1 + mult_n2}`

    
}
