function Solve(val) {
    var v = document.getElementById('text');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('text').value;
    try {
       var num2 = eval(num1.replace('x', '*'));
       document.getElementById('text').value = num2;
    } catch {
       document.getElementById('text').value = 'Error';
    }
 }
 function Clear() {
    var inp = document.getElementById('text');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('text');
    ev.value = ev.value.slice(0, -1);
 }
 document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
       Result();
    } else if (key === 'Backspace') {
       Back();
    } else if (key.toLowerCase() === 'c') {
       Clear();
    }
 });