var a,b,c
a = Number(prompt("Введите первое число"))
b = Number(prompt("Введите второе число"))
c = Number(prompt("Введите третье число"))
if ((a<b) && (b<c)){
    alert("a = " + a*2)
    alert("b = " + b*2)
    alert("c = " + c*2)
}
else{
    alert("a = " + a*(-1))
    alert("b = " + b*(-1))
    alert("c = " + c*(-1))
}