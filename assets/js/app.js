document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button, .course-btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const label = button.textContent.trim();
      if (label === 'Ver curso') {
        alert('El curso está en preparación. Pronto estará disponible.');
      } else if (label === 'Continuar' || label === 'Ver' || label === 'Explorar' || label === 'Administrar' || label === 'Gestionar' || label === 'Ver informes') {
        alert('Esta sección aún no tiene la lógica final implementada.');
      }
    });
  });

  const authForms = document.querySelectorAll('form');
  authForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Formulario simulado. La autenticación real se integrará en el backend.');
    });
  });
});
