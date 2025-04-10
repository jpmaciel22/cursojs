function randomEquation() {
    const ops = ["+", "-", "*", "/"];
    return `${Math.floor(Math.random() * 10)} ${ops[Math.floor(Math.random() * ops.length)]} x ${ops[Math.floor(Math.random() * ops.length)]} ${Math.floor(Math.random() * 10)}`;
}

function evaluateEquation(equation, x) {
    try {
        return eval(equation.replace(/x/g, x));
    } catch (e) {
        return Infinity; // Penaliza equações inválidas
    }
}

function fitness(equation, dataset) {
    let error = 0;
    for (let { x, y } of dataset) {
        let prediction = evaluateEquation(equation, x);
        error += Math.abs(prediction - y);
    }
    return 1 / (1 + error); // Quanto menor o erro, maior a aptidão
}

function mutate(equation) {
    let parts = equation.split(" ");
    let idx = Math.floor(Math.random() * parts.length);
    if (idx % 2 === 0) {
        parts[idx] = Math.floor(Math.random() * 10); // Muda número
    } else {
        const ops = ["+", "-", "*", "/"];
        parts[idx] = ops[Math.floor(Math.random() * ops.length)]; // Muda operador
    }
    return parts.join(" ");
}

function crossover(eq1, eq2) {
    let parts1 = eq1.split(" ");
    let parts2 = eq2.split(" ");
    let crossoverPoint = Math.floor(parts1.length / 2);
    return [...parts1.slice(0, crossoverPoint), ...parts2.slice(crossoverPoint)].join(" ");
}

function geneticAlgorithm(targetDataset, generations = 100, populationSize = 10) {
    let population = Array.from({ length: populationSize }, randomEquation);

    for (let gen = 0; gen < generations; gen++) {
        population.sort((a, b) => fitness(b, targetDataset) - fitness(a, targetDataset));
        
        let nextGen = population.slice(0, populationSize / 2);
        while (nextGen.length < populationSize) {
            let parent1 = nextGen[Math.floor(Math.random() * nextGen.length)];
            let parent2 = nextGen[Math.floor(Math.random() * nextGen.length)];
            let child = mutate(crossover(parent1, parent2));
            nextGen.push(child);
        }

        population = nextGen;
        console.log(`Geração ${gen + 1}: Melhor equação -> ${population[0]}`);
    }

    return population[0];
}

// Exemplo de dados para treinar a equação
const dataset = [
    { x: 1, y: 5 },
    { x: 2, y: 7 },
    { x: 3, y: 9 },
];

// Executa o algoritmo
const bestEquation = geneticAlgorithm(dataset);
console.log("Melhor equação encontrada:", bestEquation);
