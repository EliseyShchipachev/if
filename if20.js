var a,b,c
a = Number(prompt("Введите первую точку"))
b = Number(prompt("Введите вторую точку"))
c = Number(prompt("Введите третью точку"))
if ((a-b)<(a-c)){
    alert("Точка b ближе " + Math.abs((a-b)))
}
else{
 alert("Точка с ближе " + Math.abs((a-c)))
}