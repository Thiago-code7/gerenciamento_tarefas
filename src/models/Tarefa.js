class Tarefa {
    #descricao;
    #status;

    constructor(descricao){
        this.#descricao = descricao
        this.#status = 'Não finalizado'

    }
    get getDescricao(){
        return this.#descricao
    }
    set setDescricao(descricao){
        this.#descricao = descricao
    }
    get getStatus(){
        return this.#status
    }
    set setStatus(status){
        this.#status = status
    }
    getInfo(){
        console.log(`Descricao: ${this.getDescricao}, Status: ${this.getStatus}`)
    }

    finalizarTarefa(){
        this.#status = "finalizado"
        console.log(`parabens a tarefa foi concluida: ${this.getStatus}`);
    }
}
module.exports = {Tarefa};

    
