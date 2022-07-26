enum Profissao{
    Analista,
    programador,
    Cientista
}

type Pessoas = {
     nome:String,
     idade: number,
     profissao: Profissao
}

const andrel : Pessoas ={
   nome:'André Luiz',
   idade:36,
   profissao:Profissao.Analista
}


console.log(andrel);

