var minhaVar = 'minha variavel'; // javaScript
function minhaFunc(x, y) {
    return x + y;
}
var num = 2; // ES 6 ou ES 2015
var PI = 3.14; // ES 6 ou ES 2015
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); // ES 6 ou ES 2015
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'Lucas'; // tipagem de variavel