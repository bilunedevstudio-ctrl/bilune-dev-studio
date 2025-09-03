// Espera o carregamento da página
document.addEventListener("DOMContentLoaded", () => {
  // Rolagem suave ao clicar no menu
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Formulário de contato
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // evita recarregar a página

      alert("Mensagem enviada com sucesso! 🚀");
      form.reset(); // limpa os campos
    });
  }

  // Animação ao rolar a página
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.classList.add("hidden"); // começa escondida
    observer.observe(section);
  });
});
