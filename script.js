const modal = document.querySelector('.modal-container');
const tBody = document.querySelector('tbody');
const sNome =  document.querySelector('#m-nome');
const sFuncao = document.querySelector('#m-funcao');
const sSalario = document.querySelector('#m-salario');
const btnSalvar = document.querySelector('#btn-salvar');

let itens
let id

const getItensBD = () => JSON.parse(localStorage.getItem('dbFunc')) ?? []
const setItensBD = () => localStorage.setItem('dbFunc', JSON.stringify(itens))

