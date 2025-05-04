class   cliente {
    nome;
    cpf;
    rg;
}

class contaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo = this._saldo - valor ; 
            return valor;
        }
     };

     depositar(valor){
        if(valor <=0){
                return
           }
            this._saldo += valor;
     }
}

const contaCorrenteRamon = new contaCorrente();
contaCorrenteRamon.agencia = 1001;

contaCorrenteRamon.depositar(100);


const valorSacado = contaCorrenteRamon.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteRamon);
 

const cliente1 = new cliente();
    cliente1.nome =  "Ramon";
    cliente1.cpf = 11122233309;
    cliente1.rg = 123456789;



const cliente2 = new cliente();
    cliente2.nome =  "Elaine";
    cliente2.cpf = 11122233309;
    cliente2.rg = 123456789;
 
 
 
 

console.log(cliente1);
console.log(cliente2);