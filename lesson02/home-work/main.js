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