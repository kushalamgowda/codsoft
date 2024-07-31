function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function equal() {
    let exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function opt(operator) {
    document.form.textview.value = document.form.textview.value + operator;
}

function zero() {
    let exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = document.form.textview.value + "0";
    }
}
