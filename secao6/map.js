const pessoas = [
{id: 3, nome: 'Luiz'},
{id: 2, nome: 'Joao'},
{id: 1, nome: 'Maria'},
];

const NovasPessoas = new Map();
for(const i of pessoas){
    const { id } = i;
    NovasPessoas.set(id, {...i});
};

console.log(NovasPessoas)
console.log(NovasPessoas.get(2))
