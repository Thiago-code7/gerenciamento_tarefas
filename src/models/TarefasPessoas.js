const Tarefa = require('./Tarefa');

class TarefasPessoais extends Tarefa {
    #prioridade
    #data


constructor(prioridade,data,descricao){
    super(descricao)
    this.#prioridade = prioridade
    this.#data = data

}
get getPrioridade(){
    return this.#prioridade
}
set setPrioridade(prioridade){
    this.#prioridade = prioridade
}
get getData(){
    return this.#data
}
set setData(data){
    this.#data = data
}
getInfo(){
    console.log(`Prioridade: ${this.getPrioridade} data: ${this.getData}`);
}


}

module.exports = {TarefasPessoais};