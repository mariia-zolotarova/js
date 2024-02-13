function t1() {
    let data1 = document.querySelector('.inp-01').value;
    let out = document.querySelector('.out-01');

    if (+data1 > 0 && +data1 <= 11) {
        out.textContent = "дитина"
    }
    else if (+data1 > 11 && +data1 <= 17) {
        out.textContent = "підліток"
    }
    else if (+data1 > 17 && +data1 <= 60) {
        out.textContent = "дорослий"
    }
    else if (+data1 > 60) {
        out.textContent = "пенсіонер"
    }
    else {
        out.textContent = "Incorrect data"
    }
}
document.querySelector('.btn-01').onclick = t1;

function t2() {
    let data1 = document.querySelector('.inp-02').value;
    let out = document.querySelector('.out-02');
    switch (data1) {
        case "1":
            out.textContent = "!"
            break;
        case "2":
            out.textContent = "@"
            break;
        case "3":
            out.textContent = "#"
            break;
        case "4":
            out.textContent = "$"
            break;
        case "5":
            out.textContent = "%"
            break;
        case "6":
            out.textContent = "^"
            break;
        case "7":
            out.textContent = "&"
            break;
        case "8":
            out.textContent = "*"
            break;
        case "9":
            out.textContent = "("
            break;
        case "0":
            out.textContent = ")"
            break;
        default:
            break;
    }
}
document.querySelector('.btn-02').onclick = t2;

function t3() {
    let data1 = Number(document.querySelector('.inp-03').value);
    let data2 = Number(document.querySelector('.inp-13').value);
    let out = document.querySelector('.out-03');

    for (let i = data1; i <= data2; i++) {
        out.textContent = i + Number(out.textContent);
    }
}
document.querySelector('.btn-03').onclick = t3;

function t4() {
    let data1 = document.querySelector('.inp-04').value;
    let data2 = document.querySelector('.inp-14').value;
    let out = document.querySelector('.out-04');

    while (data1 != 0 & data2 != 0) {
        if (data1 > data2) {
            data1 = data1 % data2;
        } else {
            data2 = data2 % data1;
        }
    }
    out.textContent = +data1 + +data2;
}
document.querySelector('.btn-04').onclick = t4;


function t5() {
    let data1 = document.querySelector('.inp-05').value;
    let out = document.querySelector('.out-05');
    function divisors(integer) {

        var result = [];
        for (let i = 0; i < integer; i++) {
            if (i !== 1 && i !== integer && integer % i == 0) {
                result.push(i)
            }
        }
        return result;
    };

    out.textContent = divisors(data1);
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