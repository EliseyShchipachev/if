var a,b,c,d
a = Number(prompt("Введите первое число"))
b = Number(prompt("Введите второе число"))
c = Number(prompt("Введите третье число"))
d = Number(prompt("Введите четвертое число"))
if ((b = c)&&(b = d)) {
alert (" Это первое число = " + (a))
}
else if ((a=c)&&(a=d)) {
alert (" Это второе число = " + (b))
}
else if ((a=b)&&(a=d)) {
alert (" Это третье число = " + (c))
}
else if ((a=b)&&(b=c)) {
alert (" Это четвертое число = " + (d))
}