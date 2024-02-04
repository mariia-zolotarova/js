function t1() {
    let data1 = document.querySelector('.inp-01').value;
    let data2 = document.querySelector('.inp-11').value;
    let out = document.querySelector('.out-01');
    out.textContent = Math.round((Number(data1) + Number(data2)) * 100) / 100;
}
document.querySelector('.btn-01').onclick = t1;

function t2() {
    let data1 = "1";
    let data2 = 2;
    let out = document.querySelector('.out-02');
    out.textContent = Number(data1) + Number(data2);
}
document.querySelector('.btn-02').onclick = t2;

function t3() {
    let data1 = document.querySelector('.inp-03').value;
    let out = document.querySelector('.out-03');
    out.textContent = `${Math.floor((Number(data1) * 1000) / 820)} files and ${(Number(data1) * 1000) % 820} mb reminder`;
}
document.querySelector('.btn-03').onclick = t3;

function t4() {
    let data1 = document.querySelector('.inp-04').value;
    let data2 = document.querySelector('.inp-14').value;
    let out = document.querySelector('.out-04');
    out.textContent = `${Math.floor((Number(data1)) / data2)} chocolates and ${(Number(data1)) % data2} money reminder`;
}
document.querySelector('.btn-04').onclick = t4;


function t5() {
    let data1 = document.querySelector('.inp-05').value;
    let out = document.querySelector('.out-05');
    out.textContent = `${(Number(data1)) % 10}${Math.floor((Number(data1) / 10)) % 10}${Math.floor(Number(data1) / 100)}`;
}
document.querySelector('.btn-05').onclick = t5;

function t6() {
    let amount = document.querySelector('.inp-06').value;
    let out = document.querySelector('.out-06');
    let interest = 0.05;
    let month = 2;
    let rate = interest / 12;
    out.textContent = `${Number(amount) * month * rate}`;
}
document.querySelector('.btn-06').onclick = t6;

function t7() {
    let out1 = document.querySelector('.out-07');
    let out2 = document.querySelector('.out-08');
    let out3 = document.querySelector('.out-09');
    let number1 = 2
    let number2 = 0
    let number3 = 3
    out1.textContent = `${number1 && number2 && number3}`;
    out2.textContent = `${number1 || number2 || number3}`;
    out3.textContent = `${number1 && number2 || number3}`;
}
document.querySelector('.btn-07').onclick = t7;