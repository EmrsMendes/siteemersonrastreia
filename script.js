const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if(menuToggle && navMenu){
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', event => {
    if(event.key === 'Escape'){
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
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
  formCotacao.addEventListener('submit', event => {
    event.preventDefault();

    const plano = document.getElementById('plano').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const telefone2 = document.getElementById('telefone2').value.trim();
    const email = document.getElementById('email').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const placa = document.getElementById('placa').value.trim();
    const cep = document.getElementById('cep').value.trim();
    const uso = document.getElementById('uso').value.trim();
    const horario = document.getElementById('horario').value.trim();

    const mensagem =
`Olá Emerson!

Quero iniciar minha pré-ficha de atendimento.

Plano de interesse: ${plano}
Nome: ${nome}
WhatsApp principal: ${telefone}
Segundo telefone: ${telefone2}
E-mail: ${email}
Cidade/Estado: ${cidade}
Placa do veículo: ${placa}
CEP: ${cep}
Uso do veículo: ${uso}
Melhor horário para ligação: ${horario}

Documentos que vou separar:
- Foto da CNH
- Foto do documento do veículo
- Foto do comprovante de endereço

Pode me ligar para continuar a ficha.`;

    const url = `https://wa.me/5581983587253?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  });
}

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){
  reveals.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if(top < window.innerHeight - 90){
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();