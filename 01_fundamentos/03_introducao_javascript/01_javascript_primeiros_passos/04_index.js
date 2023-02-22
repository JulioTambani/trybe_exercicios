let salarioBruto = 3000;
let aliquotaInss;
let ir;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto >= 1566.94 && salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11;
} else {
    aliquotaInss = 570.880;
}

let salarioBase = salarioBruto - aliquotaInss;

if (salarioBase > 0 && salarioBase <= 1903.98) {
    ir = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13;   
} else {
    let ir = (salarioBruto * 0.275) - 869.36;
};

let salarioLiquido = salarioBase - ir;

console.log(salarioLiquido)