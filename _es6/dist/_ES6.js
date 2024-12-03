"use strict";

var alunos = [{
  nome: 'João',
  nota: 7.9
}, {
  nome: 'Maria',
  nota: 9.0
}, {
  nome: 'Pedro',
  nota: 4.0
}, {
  nome: 'Ana',
  nota: 6.8
}, {
  nome: 'Carlos',
  nota: 2.0
}];
var alunosComNotaMaiorQue6 = function alunosComNotaMaiorQue6() {
  var alunosFiltrados = alunos.filter(function (aluno) {
    return aluno.nota > 6;
  });
  alunosFiltrados.forEach(function (aluno) {
    console.log("".concat(aluno.nome, " - Nota: ").concat(aluno.nota));
  });
};
alunosComNotaMaiorQue6();