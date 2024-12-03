const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.0 },
    { nome: 'Pedro', nota: 4.0 },
    { nome: 'Ana', nota: 6.8 },
    { nome: 'Carlos', nota: 2.0 }
];

const alunosComNotaMaiorQue6 = () => {
    const alunosFiltrados = alunos.filter(aluno => aluno.nota > 6);
    alunosFiltrados.forEach(aluno => {
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
    });
};

alunosComNotaMaiorQue6();