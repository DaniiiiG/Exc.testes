function romanoParaDecimal(romano) {
    const numerosRomanos = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    
    let total = 0;
    for (let i = 0; i < romano.length; i++) {
        let atual = numerosRomanos[romano[i]];
        let proximo = numerosRomanos[romano[i + 1]];
        
        if (proximo && atual < proximo) {
            total -= atual;
        } else {
            total += atual;
        }
    }
    
    return total;
}

function converterRomano() {
    const entrada = document.getElementById("entradaRomana").value.toUpperCase();
    const resultado = romanoParaDecimal(entrada);
    document.getElementById("resultado").innerText = `Decimal: ${resultado}`;
}