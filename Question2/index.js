var a = prompt("Nhập vào số tự nhiên a từ 1-10");
a= parseInt(a);
while (a<=0){
    var a = prompt("Nhập vào lại số tự nhiên a lớn hơn 0");
    a= parseInt(a);
}
while (a>10) {
    var a = prompt("Nhập vào lại số tự nhiên a nhỏ hơn 10");
    a= parseInt(a);
    while (a<=0){
        var a = prompt("Nhập vào lại số tự nhiên a lớn hơn 0");
        a= parseInt(a);
    }
}

for (let i=1; i<=a;i++){
    for (let n=1; n<=i; n++){
        document.write("*");
    }
    document.write("<br />");
}