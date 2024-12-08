// Desafio 1

let h1 = document.getElementsByTagName('h1')[0]; // Como só tem esse <h1> na página inteira, não precisei filtrar pelo elemento pai e capturei diretamente o primeiro elemento do array de <h1>
h1.textContent = 'Bem vindo ao Nosso Site';

// Desafio 2

let heroContent = document.getElementsByClassName('hero-content')[0];
heroContent.style.backgroundImage = 'url(assets/images/imagemDesafio2.jpeg)';

// Desafio 3

let availabilityContent = document.getElementsByClassName('availability-content')[0];
availabilityContent.setAttribute('hidden', 'true');

// Desafio 4

let footerHead = document.getElementsByClassName('footer-head')[0];
footerHead.getElementsByTagName('p')[0].style.fontWeight = 'bold'; // tem vários <p> dentro da página. Então resolvi filtrar pela div pai para depois capturar o elemento, coisa que não era nescessária no primeiro desafio
footerHead.getElementsByTagName('p')[0].style.color = 'blue';

// Desafio 5

let find = document.getElementsByClassName('find')[0];
let hero = document.getElementsByClassName('hero')[0];
hero.parentNode.insertBefore(find, hero.nextSibling); // Insere a div de classe 'find' logo após a div de classe 'hero' no DOM

// Desafio 6

let findContentDetails = document.getElementsByClassName('find-content-details')[0]; 
let btnContact = findContentDetails.getElementsByTagName('a')[0]; // Mesma ideia de capturar o elemento do desafio 4, mas agora sendo <a> em vez de <p>
btnContact.setAttribute('id', 'btn-contact');
btnContact.setAttribute('onClick', 'ativarAlerta()'); // Adiciona o evento de clique ao <a>, que ativa a seguinte função:
function ativarAlerta() {
    alert("Vc clicou no botão");
}

// Desafio 7

let rentForm = document.getElementById('rent');
let search1 = rentForm.getElementsByClassName('search-1')// Captura a classe 'search-1' dentro do formulario 'rent'
let select = search1[0].getElementsByTagName('select')[0]; // Captura o primeiro e único <select> dentro da classe 'search-1'
select.appendChild(new Option('Presidente Prudente', 'presidente_prudente')); // Adiciona a opcao de Presidente Prudente ao final do <select>

// Desafio 8

let navbarList = document.getElementsByClassName('navbar-list')[0];
let liBlog = navbarList.getElementsByTagName('li')[3]; // Captura o <li> Blog (que correspnde ao quarto <li> da lista) 
let li = document.createElement('li');
let a = document.createElement('a');
a.setAttribute('href', '#'); // Adiciona o atributo href ao <a> para voltar ao topo da página. Para manter o mesmo padrão dos outros links
a.textContent = 'About Us';
li.appendChild(a); // Adiciona o <a> dentro do <li>. Agora <li> é pai de <a>
liBlog.parentNode.insertBefore(li, liBlog.nextSibling); // Insere o novo <li> logo após o <li> Blog. Mesma lógica do desafio 5

// Desafio 9

let formEmail = document.getElementsByClassName('footer-subscribe')[0];
let input = formEmail.getElementsByTagName('input')[0];
let button = formEmail.getElementsByTagName('button')[0];
button.setAttribute('onClick', 'validarEmail()'); // Adiciona o evento de clique ao <button>, que ativa a seguinte função (mesma lógica do desafio 6):
function validarEmail() {
    let email = input.value;
    if (email=='' || email==null) {
        alert('O campo de email não pode estar vazio');
    }
}

// Desafio 10

// Resolvi dividir em partes para facilitar a visualização do código
// O html eu fiz tudo aqui pelo js, mas o css eu fiz no arquivo ./styles/.styles.css
// As tags html e a estilização css seguem o padrão da classe 'recently-added'. Pois ambas as seções adicionam elementos de forma semelhante

// Parte 1 - Criação da seção e inserção no DOM

let secaoDepoimentosAvaliacoes = document.createElement('section');
secaoDepoimentosAvaliacoes.setAttribute('class', 'depoimentos-avaliacoes-section');
secaoDepoimentosAvaliacoes.setAttribute('data-aos', 'fade-up'); // Adiciona a animação fade-up da biblioteca AOS. Adicionei isso pq os outros elementos da página já usavam essa biblioteca

let contentDepoimentosAvaliacoes = document.createElement('div');
contentDepoimentosAvaliacoes.setAttribute('class', 'depoimentos-avaliacoes-content'); // seguindo o padrão de todas as seções que possuem uma classe 'content' dentro da seção

let headDepoimentosAvaliacoes = document.createElement('div');
headDepoimentosAvaliacoes.setAttribute('class', 'head-depoimentos-avaliacoes-head');

let h2 = document.createElement('h2');
h2.textContent = 'Depoimentos e Avaliacoes';
headDepoimentosAvaliacoes.appendChild(h2);

contentDepoimentosAvaliacoes.appendChild(headDepoimentosAvaliacoes);
secaoDepoimentosAvaliacoes.appendChild(contentDepoimentosAvaliacoes);
// let find = document.getElementsByClassName('find')[0]; // find foi definido no desafio 5, então não preciso definir novamente
find.parentNode.insertBefore(secaoDepoimentosAvaliacoes, find); // . Aqui, estou inserindo a seção de depoimentos e avaliações logo após a seçao find. Segue a mesma lógica de inserção antes/depois de um determinado elemento dos desafios 5 e 8

// Parte 2 - Criação dos dados fictícios

// Fiz uma forma para ficar parecido com uma chamada a um backend

class Depoimento { // define o modelo de como receber os dados
    constructor(id,nome, gostou, depoimento, img) {
        this.id = id;
        this.gostou = gostou;
        this.nome = nome;
        this.depoimento = depoimento;
        this.img = img;
    }
}

let depoimentos = [ // array de objetos com os dados fictícios
new Depoimento(1, 'Joao', true,'The house I rented was very good, I recommend it.', 'assets/images/depoimento1.png'),
new Depoimento(2, 'Maria', true,'The service was excellent, I found the perfect property.', 'assets/images/depoimento2.png'),
new Depoimento(3, 'Jose',true, 'High quality service, I recommend it to everyone.', 'assets/images/depoimento3.png'),
new Depoimento(4, 'Ana',true, 'The rooms are very beautiful and large.', 'assets/images/depoimento4.png')
];

// Parte 3 - Criação dos elementos de cada depoimento e inserção no DOM

let ul = document.createElement('ul');
ul.setAttribute('class', 'lista-depoimentos');

depoimentos.forEach(depoimento => { // itera sobre o array de depoimentos e cria um <li> para cada um

    let liDepoimento = document.createElement('li'); // Cada <li> contém 3 elementos: 1-imagem do cliente e o nome, 2- o icon de avaliação (no caso é sempre um joinha) 3- texto do depoimento
    liDepoimento.setAttribute('class', 'item-depoimento');

    let divImgNome = document.createElement('div'); // 1- Div que contém a imagem do cliente e o nome do depoimento
    divImgNome.setAttribute('class', 'img-nome-container');

    let img = document.createElement('img');// Imagem do cliente
    img.setAttribute('src', depoimento.img);
    img.setAttribute('alt', `Foto de ${depoimento.nome}`);

    let h4_nome = document.createElement('h4');// Nome do cliente
    h4_nome.setAttribute('class', 'nome-depoimento');
    h4_nome.textContent = depoimento.nome;

    divImgNome.appendChild(img);
    divImgNome.appendChild(h4_nome);

    let imgAvaliacao = document.createElement('img');// 2- Imagem da avaliação
    imgAvaliacao.setAttribute('class', 'avaliacao');

    if(depoimento.gostou) {
        imgAvaliacao.setAttribute('src', 'assets/images/like.svg');
        imgAvaliacao.setAttribute('alt', 'Like');
    }
    // else {...} // Futuramente pode-se implementar um deslike para o caso de não ter gostado

    let divTextoDepoimento = document.createElement('div');// 3- Div que contém o texto do depoimento
    divTextoDepoimento.setAttribute('class', 'texto-depoimento-container');

    let pDepoimento = document.createElement('p');
    pDepoimento.setAttribute('class', 'texto-depoimento');
    pDepoimento.textContent = "❝ "+depoimento.depoimento+" ❞";
    divTextoDepoimento.appendChild(pDepoimento);

    // Adiciono os elementos criados ao <li>
    liDepoimento.appendChild(divImgNome);
    liDepoimento.appendChild(imgAvaliacao);
    liDepoimento.appendChild(divTextoDepoimento);

    ul.appendChild(liDepoimento); // Adiciono o <li> ao <ul>
});
    contentDepoimentosAvaliacoes.appendChild(ul); // Adiciono o <ul> ao content

    // Sobre a estilização do desafio 10:
    // 1 Utilizei o mesmo arquivo css utilizado originalmente, o ./styles/.styles.css
    // 2 Reutilizei muitos dos estilos já existentens na página, principalmente os da seção de classe 'recently-added'
    // 3 Também fiz algumas personalizações no final do arquivo, que incluem:
    // 3.1 Definição do tamanho das imagens e da fonte dos textos
    // 3.2 Adição de alguns paddings e margins para deixar visualmente harmônico
    // 3.3 Deixar cada <li> responsivo. Basicamente, mudei o flex-direction para column para tamanhos menores de 600px. Assim, evitava que o texto de depoimento saísse do container