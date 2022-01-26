var a,b,c
a = Number(prompt("Введите первое число"))
b = Number(prompt("Введите второе число"))
c = Number(prompt("Введите третье число"))
if ((a<=b)&&(a<=c)){
    alert("Сумма двух больших чисел = " + Number(b+c))
}
else if ((b<=a)&&(b<=c)){
    alert("Сумма двух больших чисел = " + Number(a+c))
}
else if ((c<=a)&&(c<=b)){
    alert("Сумма двух больших чисел = " + Number(a+b))
}