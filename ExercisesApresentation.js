class Pessoa {
    constructor(nome, pais, idade) {
    this.nome = nome;
    this.pais = pais;
    this.idade = idade;
    }
}

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo, salario) {
        super(nome, idade);
        this.cargo = cargo;
        this.salario = salario;
    }
}

class Programador extends Funcionario {
    constructor (nome, idade, cargo, salario, linguagemDeProgramação) {
        super(nome, idade, cargo, salario);
        this.linguagemDeProgramação = linguagemDeProgramação;
    }
    apresentar() {
        console.log(`Eu trabalho como ${this.cargo}, programando
    principalmente em ${this.linguagemDeProgramacao} e ganho R$ ${this.salario} por mês.`);
    }
}

class Designer extends Funcionario {
    constructor (nome, idade, cargo, salario, tipoDeDesign){
        super(nome, idade, cargo, salario);
        this.tipoDeDesign = tipoDeDesign;
    }
    apresentar() {
        console.log(`Eu trabalho como ${this.cargo}, utilizando
    ${this.tipoDeDesign} e ganho R$ ${this.salario} por mês.`);
    }
}

class Gerente extends Funcionario {
    constructor (nome, idade, cargo, salario, departamento){
        super(nome, idade, cargo, salario);
        this.departamento = departamento;
    }
    apresentar() {
        console.log(`Eu trabalho como ${this.cargo}, no departamento de 
    ${this.departamento} e ganho R$ ${this.salario} por mês.`);
    }
}

const desenvolvedorWeb = new Programador("Caio", 26, "programador", 8000, "Javascript");
const designer = new Designer("Alfonso", 34, "designer", 2000, "UX");
const gerente = new Gerente ("Edgard", 50, "gerente",10000, "Desenvolvimento");

desenvolvedorWeb.apresentar();
designer.apresentar();
gerente.apresentar();