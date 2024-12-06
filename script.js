// Desafio 1

h1 = document.getElementsByTagName('h1')[0]; // Como só tem esse <h1> na página inteira, não precisei filtrar pelo elemento pai e capturei diretamente o primeiro elemento do array de <h1>
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
// let heroContent = document.getElementsByClassName('hero-content')[0]; // A variável heroContent já foi declarada no desafio 2. Descomente essa linha caso não tenha apagado o desafio 2
heroContent.parentNode.insertBefore(find, heroContent.nextSibling); // Insere a div de classe 'find' logo após a div de classe 'heroContent' no DOM

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