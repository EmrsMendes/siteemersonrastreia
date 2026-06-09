const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if(menuToggle && navMenu){
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

const formCotacao = document.getElementById('formCotacao');

if(formCotacao){
  formCotacao.addEventListener('submit', e => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const veiculo = document.getElementById('veiculo').value.trim();

    const mensagem =
`Olá Emerson!

Meu nome é ${nome}.
Telefone: ${telefone}.
Veículo: ${veiculo}.

Gostaria de receber uma cotação.`;

    const url = `https://wa.me/5581983587253?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
  });
}

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){
  reveals.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if(top < window.innerHeight - 110){
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();