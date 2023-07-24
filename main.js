function JogadorNBA(nome, altura, anosNaNBA, salario) {
    this.nome = nome;
    this.altura = altura;
    this.anosNaNBA = anosNaNBA;

    let _salario = salario;

    this.getSalario = function () {
        return _salario;
    };

    this.setSalario = function (novoSalario) {
        _salario = novoSalario;
    };
}

function jogadoresDraft(nome, altura, anosNaNBA) {
    
    const salarioInicial = anosNaNBA > 0 ? 5000 : 0;
    JogadorNBA.call(this, nome, altura, anosNaNBA, salarioInicial);

    this.aumento = function () {
        const novoSalario = this.anosNaNBA * 1.05 * this.getSalario();
        this.setSalario(novoSalario);
    }
}

function jogadoresVeteranos(nome, altura, anosNaNBA) {

    JogadorNBA.call(this, nome, altura, anosNaNBA, 15000);

    this.aumento = function () {
        const novoSalario = this.anosNaNBA * 1.10 * this.getSalario();
        this.setSalario(novoSalario);
    }
}

function jogadoresMeio(nome, altura, anosNaNBA) {

    JogadorNBA.call(this, nome, altura, anosNaNBA, 15000);

    this.aumento = function () {
        const novoSalario = this.anosNaNBA * 1.10 * this.getSalario();
        this.setSalario(novoSalario);
    }
}

const jogador1 = new jogadoresDraft("Victor Wembanyama", 226, 0);
const jogador2 = new jogadoresVeteranos("Lebron James", 203, 18);
const jogador3 = new jogadoresMeio("Luka Dončić", 201, 8);
const jogador4 = new jogadoresDraft("Jogador de 1ano", 194, 1);

jogador1.aumento();
console.log("Jogador 1:");
console.log('Nome:'+ jogador1.nome);
console.log(jogador1.altura);
console.log(jogador1.anosNaNBA);
console.log(jogador1.getSalario());
console.log(jogador1);

jogador2.aumento();
console.log("Jogador 2:");
console.log('Nome:'+ jogador2.nome);
console.log(jogador2.altura);
console.log(jogador2.anosNaNBA);
console.log(jogador2.getSalario());
console.log(jogador2);

jogador3.aumento();
console.log("Jogador 3:");
console.log('Nome:'+ jogador3.nome);
console.log(jogador3.altura);
console.log(jogador3.anosNaNBA);
console.log(jogador3.getSalario());
console.log(jogador3);

jogador4.aumento();
console.log("Jogador 4:");
console.log('Nome:'+ jogador4.nome);
console.log(jogador4.altura);
console.log(jogador4.anosNaNBA);
console.log(jogador4.getSalario());
console.log(jogador4);
