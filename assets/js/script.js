// ===== ACTIVIDAD 1: Sumatoria de 1 hasta n =====
function sumatoria(n) {
    if (typeof n !== 'number' || n < 1 || n >= 100 || !Number.isInteger(n)) {
        throw new Error('El número debe ser un entero mayor que 0 y menor que 100');
    }
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}

document.getElementById('runProblem1').addEventListener('click', () => {
    const input = document.getElementById('sumInput').value;
    const resultDiv = document.getElementById('result1');

    if (input === '') {
        resultDiv.textContent = 'Por favor, ingresa un número.';
        resultDiv.className = 'result error';
        return;
    }

    const n = Number(input);
    try {
        const resultado = sumatoria(n);
        resultDiv.innerHTML = `<strong>La sumatoria de 1 hasta ${n} es:</strong> ${resultado}`;
        resultDiv.className = 'result success';
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.className = 'result error';
    }
});

// ===== ACTIVIDAD 2: ¿Es número primo? =====
function esPrimo(numero) {
    if (typeof numero !== 'number' || !Number.isInteger(numero) || numero < 2) {
        return false;
    }
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) return false;
    }
    return true;
}

document.getElementById('runProblem2').addEventListener('click', () => {
    const input = document.getElementById('primeInput').value;
    const resultDiv = document.getElementById('result2');

    if (input === '') {
        resultDiv.textContent = 'Por favor, ingresa un número.';
        resultDiv.className = 'result error';
        return;
    }

    const num = Number(input);
    if (isNaN(num)) {
        resultDiv.textContent = 'Error: Debes ingresar un número válido.';
        resultDiv.className = 'result error';
        return;
    }

    if (esPrimo(num)) {
        resultDiv.innerHTML = `<strong>${num}</strong> es un número primo.`;
        resultDiv.className = 'result success';
    } else {
        resultDiv.innerHTML = `<strong>${num}</strong> no es un número primo.`;
        resultDiv.className = 'result info';
    }
});

// ===== ACTIVIDAD 3: Cuenta regresiva =====
function cuentaRegresiva(n) {
    if (typeof n !== 'number' || n < 1 || n >= 100 || !Number.isInteger(n)) {
        throw new Error('El número debe ser un entero mayor que 0 y menor que 100');
    }
    const numeros = [];
    for (let i = n; i >= 1; i--) {
        numeros.push(i);
    }
    return numeros;
}

document.getElementById('runProblem3').addEventListener('click', () => {
    const input = document.getElementById('countdownInput').value;
    const resultDiv = document.getElementById('result3');

    if (input === '') {
        resultDiv.textContent = 'Por favor, ingresa un número.';
        resultDiv.className = 'result error';
        return;
    }

    const n = Number(input);
    try {
        const numeros = cuentaRegresiva(n);
        resultDiv.innerHTML = `
            <strong>Cuenta regresiva desde ${n}:</strong><br>
            ${numeros.join(', ')}
        `;
        resultDiv.className = 'result info';
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.className = 'result error';
    }
});

// ===== ACTIVIDAD 4: Sumatoria de números pares =====
function sumatoriaPares(n) {
    if (typeof n !== 'number' || n <= 10 || n >= 1000 || !Number.isInteger(n)) {
        throw new Error('El número debe ser un entero mayor que 10 y menor que 1000');
    }
    let suma = 0;
    const numerosPares = [];
    for (let i = 2; i <= n; i += 2) {
        suma += i;
        numerosPares.push(i);
    }
    return { suma, numerosPares };
}

document.getElementById('runProblem4').addEventListener('click', () => {
    const input = document.getElementById('evenSumInput').value;
    const resultDiv = document.getElementById('result4');

    if (input === '') {
        resultDiv.textContent = 'Por favor, ingresa un número.';
        resultDiv.className = 'result error';
        return;
    }

    const n = Number(input);
    try {
        const { suma, numerosPares } = sumatoriaPares(n);
        resultDiv.innerHTML = `
            <strong>Números pares de 1 hasta ${n}:</strong> ${numerosPares.join(', ')}<br>
            <strong>Sumatoria de números pares:</strong> ${suma}
        `;
        resultDiv.className = 'result success';
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.className = 'result error';
    }
});

// ===== ACTIVIDAD 5: Tabla de multiplicar =====
function tablaMultiplicar(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new Error('El número debe ser un entero');
    }
    const resultados = [];
    for (let i = 1; i <= 12; i++) {
        resultados.push(`${n} x ${i} = ${n * i}`);
    }
    return resultados;
}

document.getElementById('runProblem5').addEventListener('click', () => {
    const input = document.getElementById('tableInput').value;
    const resultDiv = document.getElementById('result5');

    if (input === '') {
        resultDiv.textContent = 'Por favor, ingresa un número.';
        resultDiv.className = 'result error';
        return;
    }

    const n = Number(input);
    if (!Number.isInteger(n)) {
        resultDiv.textContent = 'Error: El número debe ser entero.';
        resultDiv.className = 'result error';
        return;
    }

    try {
        const tabla = tablaMultiplicar(n);
        resultDiv.innerHTML = `
            <strong>=== Tabla de multiplicar del ${n} ===</strong><br>
            ${tabla.join('<br>')}
        `;
        resultDiv.className = 'result info';
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.className = 'result error';
    }
});

// ===== ACTIVIDAD 6: Ordenar arreglo =====
function ordenarAscendente(arreglo) {
    if (!Array.isArray(arreglo)) {
        throw new Error('El parámetro debe ser un arreglo');
    }
    if (!arreglo.every(elemento => typeof elemento === 'number')) {
        throw new Error('Todos los elementos del arreglo deben ser números');
    }
    const arregloOrdenado = [...arreglo];
    for (let i = 0; i < arregloOrdenado.length - 1; i++) {
        for (let j = 0; j < arregloOrdenado.length - 1 - i; j++) {
            if (arregloOrdenado[j] > arregloOrdenado[j + 1]) {
                let temp = arregloOrdenado[j];
                arregloOrdenado[j] = arregloOrdenado[j + 1];
                arregloOrdenado[j + 1] = temp;
            }
        }
    }
    return arregloOrdenado;
}

function ordenarAscendenteNativo(arreglo) {
    if (!Array.isArray(arreglo)) {
        throw new Error('El parámetro debe ser un arreglo');
    }
    if (!arreglo.every(elemento => typeof elemento === 'number')) {
        throw new Error('Todos los elementos del arreglo deben ser números');
    }
    return [...arreglo].sort((a, b) => a - b);
}

document.getElementById('runProblem6').addEventListener('click', () => {
    const input = document.getElementById('arrayInput').value.trim();
    const resultDiv = document.getElementById('result6');

    if (input === '') {
        resultDiv.textContent = 'Por favor, ingresa al menos un número.';
        resultDiv.className = 'result error';
        return;
    }

    try {
        const numeros = input.split(',').map(num => {
            const valor = parseFloat(num.trim());
            if (isNaN(valor)) {
                throw new Error(`"${num.trim()}" no es un número válido`);
            }
            return valor;
        });

        const burbuja = ordenarAscendente(numeros);
        const nativo = ordenarAscendenteNativo(numeros);

        resultDiv.innerHTML = `
            <strong>Arreglo original:</strong> [${numeros.join(', ')}]<br>
            <strong>Ordenado (burbuja):</strong> [${burbuja.join(', ')}]<br>
            <strong>Ordenado (nativo):</strong> [${nativo.join(', ')}]
        `;
        resultDiv.className = 'result info';
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.className = 'result error';
    }
});