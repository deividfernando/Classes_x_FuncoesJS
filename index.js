const livro = {
    nome: 'React Native',
    editora: 'Casa do Código',
    paginas: 185,
    anunciar: function() {
        console.log(`A Alura indica o livro ${this.nome} !`)
    }
};

livro.anunciar();

const novoLivro = function(nome, editora, paginas) {
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function() {
        return gNome;
    }

    this.getEditora = function() {
        return gEditora;
    }

    this.getPaginas = function() {
        return gPaginas;
    }
}

const grapgQL = new novoLivro ('GraphQL', 'Casa do Código', 143);

console.log(grapgQL.getNome());
console.log(grapgQL.getEditora());
console.log(grapgQL.getPaginas());

const nome = 'Alura';

const temp = new String(nome); 

console.log(temp.toString());



////////////////////////////
// Trabalhando com Classes

class LivroClasse {
    constructor(nome, editora, paginas) {
        this.nome = nome,
        this.editora = editora,
        this.paginas = paginas
    }

    anunciarTitulo() {
        console.log(`Título: ${this.nome}`);
    }

    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem um total de ${this.paginas} páginas.`)
    }
}

const nodeJs = new LivroClasse('Primeiros passos com NodeJS', 'Casa do Código', '195');

nodeJs.anunciarTitulo();
nodeJs.descreverTitulo();

console.log(typeof LivroClasse);

// Herança;

class LivroColecao extends LivroClasse {
    constructor(nome, colecao) {
        super(nome),
        this.colecao = colecao
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.colecao}`)
    }
}

const logicaDeProgramacao = new LivroColecao('Lógica de Programacao', 'Aprendendo a Programar');

logicaDeProgramacao.descreverColecao();