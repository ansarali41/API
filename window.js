const name ="kuddus";
function add(num1, num2) {
    window.result = num1 +num2;
    console.log(name);
    function double (num){
        return num *2
    }
    var total = double(result);
    return total;
}
// console.log('out side result ',result);
var sum = add(13, 21);
console.log(sum);