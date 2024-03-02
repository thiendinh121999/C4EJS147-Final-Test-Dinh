
//Add listener
let submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", (e) =>{
    e.preventDefault();
})
//Lấy số a và b vào console và kiểm tra a và b
var a
var b
var checka=true
var checkb=true
function checkForma() {
    a = document.getElementById("a").value;
    a = parseInt(a);
    console.log(a);
    console.log(typeof a);
    if (a<=0) {
        alert("Nhập lại số a lớn hơn hoặc bằng 0")
        checka= false
    } else {
        checka=true
    }
}

function checkFormb() {
    b = document.getElementById("b").value;
    b = parseInt(b);
    console.log(b);
    console.log(typeof b);
    if (b<=a) {
        alert("Nhập lại số b lớn hơn a")
        checkb= false
    } else {
        checkb=true
    }

}

console.log(checkForma())
console.log(checkFormb())

//List các số nguyên tố trong khoảng a và b
var n;
const arr=[]
function primeArr(){
if (checka && checkb == true) {
    for (n=a; n<=b; n++) {
        if (n<2) {
            continue;
        } else if (n==2) {
            arr.push(n);
        } else if (n%2==0) {
            continue;
        } else {
            let flag=true;
            for (let i=3; i <= n-1;i++) {
                if (n%i==0) {
                   flag=false;
                } else {
                    flag=true;
                }
            }
            if (flag=false) {
                continue;
            } else {
                arr.push(n)
            }
        }
}
}
}
console.log(primeArr())
console.log(arr)

function spreadArr() {
    const newArr = [...arr];
    console.log(newArr);
    document.write("Các số nguyên tố trong khoảng từ ", a," đến ", b," là:")
    document.write(newArr);
    document.write("<br/>");
}

console.log(spreadArr())

function sumArr(){
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum);
    document.write("Tổng các số nguyên tố ", a," đến ", b," là:")
    document.write(sum);
}

console.log(sumArr())


