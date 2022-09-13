

 
   
export default class Cliente{
    #_idade!: Number;
    #_id: String | undefined;
    #_nome: String | undefined;
    public get nome(): String | undefined {
        return this.#_nome;
    }
    public set nome(value: String | undefined) {
        this.#_nome = value;
    }
    public get id(): String | undefined {
        return this.#_id;
    }
    public set id(value: String | undefined) {
        this.#_id = value;
    }
    public get idade(): Number {
        return this.#_idade;
    }
    public set idade(value: Number) {
        this.#_idade = value;
        
    }
  constructor(_nome: String,_idade: Number ,_id: Number ) {
 this.nome
  this.idade
  this.id
  }
 
static retorno (): Cliente{
    

    
return new  Cliente ("10",9,0 )
}
}



 

   
    
    


