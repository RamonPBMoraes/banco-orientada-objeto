
class tapiocas{
    igrediente1;
    igrediente2;
    igrediente3;
    igrediente4;
    igrediente5;
    valor;
 }

class pedido{
    valorTotal = 10;
    troco = 0;
    quant = 0;
    Endereço = "";

     ped(q,valor,end,dinheiro){
      
        
        this.valorTotal = valor * q;
        this.quant = q ;
        this.troco = this.valorTotal - dinheiro;       
        this.Endereço = end;
      
    }
    }


const tapiocapizza = new tapiocas();

tapiocapizza.igrediente1 = "Presunto";
tapiocapizza.igrediente2 = "Mussarela";
tapiocapizza.igrediente3 = "oregano";
tapiocapizza.igrediente4 = "Tomate";
tapiocapizza.valor = 10;

const tapiocadoce = new tapiocas();
tapiocadoce.igrediente1 = "Nuttela";
tapiocadoce.igrediente2 = "Banana";
tapiocadoce.igrediente3 = "Paçoca";
tapiocadoce.valor = 15;

console.log(tapiocapizza);
console.log(tapiocadoce);

const pedido1 = new pedido();
pedido1.ped(2,100,"Rua Jatobá 305 Recanto Verde",100);
console.log(pedido1);


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

contaCorrenteRamon.depositar(200);


const valorSacado = contaCorrenteRamon.sacar(100);
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