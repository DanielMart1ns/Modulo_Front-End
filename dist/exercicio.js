"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
//Criação da classe
var Alunos = /*#__PURE__*/_createClass(function Alunos(nomeDoAluno, notaDoAluno) {
  _classCallCheck(this, Alunos);
  this.nome = nomeDoAluno;
  this.nota = notaDoAluno;
}); //---------------------------------------
//Criação dos dados
var nomes = ['Gabriela', 'Manuel', 'José', 'Renan', 'Maria', 'Arthur', 'Dario', 'Vitoria', 'Raquel', 'Gustavo'];
var notas = [8, 10, 5, 3, 2, 6, 9, 8, 7, 5];
var dados = [];
//---------------------------------------
//Distribuição dos dados

console.log('-------------------------');
for (var i = 0; i < nomes.length; i++) {
  dados[i] = new Alunos(nomes[i], notas[i]);
  console.log("Aluno(a): ".concat(dados[i].nome));
  console.log("Nota: ".concat(dados[i].nota));
  console.log('-------------------------');
}
//---------------------------------------
//Filtrando dados (notas >= 6)

var aprovados = dados.filter(function (aluno) {
  return aluno.nota > 5;
});
console.log('Lista de Aprovados(as)');
console.log(aprovados);