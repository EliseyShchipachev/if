var a,b,c
a = Number(prompt("Введите первое число"))
b = Number(prompt("Введите второе число"))
c = Number(prompt("Введите третье число"))
if (a<b,b<c){
alert ("второе число среднее,это цифра " + b )
}     
else if (a<c){
alert ("третье число среднее это цифра " + c)
}
else if (b>c){
alert("третье число среднее это цифра " + c)
}
else if (a<c){
alert("первое число среднее это цифра " + a)
}
else{
alert ("третье число среднее это цифра " + c)    
}