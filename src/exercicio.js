//Criação da classe
class Alunos{
    constructor(nomeDoAluno, notaDoAluno){
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}
//---------------------------------------
//Criação dos dados

const nomes = ['Gabriela', 'Manuel', 'José', 'Renan', 'Maria', 'Arthur', 'Dario', 'Vitoria', 'Raquel', 'Gustavo']

const notas = [8, 10, 5, 3, 2, 6, 9, 8, 7, 5]

const dados = []
//---------------------------------------
//Distribuição dos dados

console.log('-------------------------')
for(let i=0; i<nomes.length; i++){
    dados[i] =  new Alunos(nomes[i], notas[i])
    console.log(`Aluno(a): ${dados[i].nome}`)
    console.log(`Nota: ${dados[i].nota}`)
    console.log('-------------------------')
}
//---------------------------------------
//Filtrando dados (notas >= 6)

const aprovados = dados.filter((aluno)=>{
    return aluno.nota >= 6 
})
console.log('Lista de Aprovados(as)')
console.log(aprovados)