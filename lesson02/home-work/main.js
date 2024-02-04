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