
var multiplos3 = 0
var multiplos5 = 0
for(var i =0; i<1000; i++){
    multiplos3 +=(i % 3 == 0) ? i:0
    multiplos5 +=(i % 5 == 0) ? i:0
}
document.write("Somatório dos Múltiplos de 3: " + multiplos3 + "<br><br>")
document.write(`Somatório dos múltiplos de 5: ${multiplos5}<br><br>`)
document.write(`Somatório dos múltiplos de 3 e 5: ${multiplos3 + multiplos5}`)