function cambiarColores() {
    // Obtén las variables CSS
    console.log("oa")
    var colorNegro = getComputedStyle(document.body).getPropertyValue('--color-negro-puro');
    var colorBlanco = getComputedStyle(document.body).getPropertyValue('--color-blanco-uno');
    
    // Intercambia los valores
    document.documentElement.style.setProperty('--color-negro-puro', colorBlanco);
    document.documentElement.style.setProperty('--color-negro-uno', colorBlanco);
    document.documentElement.style.setProperty('--color-negro-dos', colorBlanco);
    document.documentElement.style.setProperty('--color-negro-tres', colorBlanco);
    document.documentElement.style.setProperty('--color-blanco-uno', colorNegro);
    

    var colorPlomoUno = getComputedStyle(document.body).getPropertyValue('--color-plomo-uno');
    var colorPlomoDos = getComputedStyle(document.body).getPropertyValue('--color-plomo-dos');
    var colorPlomoTres = getComputedStyle(document.body).getPropertyValue('--color-plomo-tres');
    var colorNegroCuatro = getComputedStyle(document.body).getPropertyValue('--color-negro-cuatro');
    
    // Intercambia los valores
    document.documentElement.style.setProperty('--color-plomo-uno', colorPlomoDos);
    document.documentElement.style.setProperty('--color-plomo-dos', colorPlomoUno);
    document.documentElement.style.setProperty('--color-plomo-tres', colorNegroCuatro);
    document.documentElement.style.setProperty('--color-negro-cuatro', colorPlomoTres);

    const boton = document.getElementById('miBoton');
    const rotatedSvg = boton.querySelector('.rotated-svg');
    const normalSvg = boton.querySelector('.normal-svg');

    // Cambiar entre las clases que controlan la visibilidad
    rotatedSvg.classList.toggle('hidden');
    normalSvg.classList.toggle('hidden');
  }

document.addEventListener("DOMContentLoaded", function () {
const header = document.querySelector("header");
header.classList.add("visible");
});

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".first-screen");
  
    // Agrega una clase para mostrar la sección con animación
    section.classList.add("aparecer");
  
    // Elimina la clase de opacidad cero después de un breve retraso para permitir la animación
    setTimeout(() => {
      section.classList.remove(".first-screen");
    }, 100);
  });

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".aparicion-desde-atras");

  function handleScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Si la parte superior de la sección está dentro de la ventana
      if (sectionTop < windowHeight) {
        section.classList.add("aparecer");
      }
    });
  }

  // Agrega un event listener para manejar el scroll
  window.addEventListener("scroll", handleScroll);

  // Maneja el scroll al cargar la página para animar las secciones visibles inicialmente
  handleScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".skill-habiliti-screen");
  
    function handleScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        // Si la parte superior de la sección está dentro de la ventana
        if (sectionTop < windowHeight) {
          section.classList.add("aparecer");
        }
      });
    }
  
    // Agrega un event listener para manejar el scroll
    window.addEventListener("scroll", handleScroll);
  
    // Maneja el scroll al cargar la página para animar las secciones visibles inicialmente
    handleScroll();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".container-text-card-right");
  
    function handleScroll() {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      // Si la parte superior de la sección está dentro de la ventana
      if (sectionTop < windowHeight) {
        section.classList.add("aparecer");
      }
    }
  
    // Agrega un event listener para manejar el scroll
    window.addEventListener("scroll", handleScroll);
  
    // Maneja el scroll al cargar la página para animar la sección visible inicialmente
    handleScroll();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".container-text-card-left");
  
    function handleScroll() {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      // Si la parte superior de la sección está dentro de la ventana
      if (sectionTop < windowHeight) {
        section.classList.add("aparecer");
      }
    }
  
    // Agrega un event listener para manejar el scroll
    window.addEventListener("scroll", handleScroll);
  
    // Maneja el scroll al cargar la página para animar la sección visible inicialmente
    handleScroll();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".container-text-card-right2");
  
    function handleScroll() {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      // Si la parte superior de la sección está dentro de la ventana
      if (sectionTop < windowHeight) {
        section.classList.add("aparecer");
      }
    }
  
    // Agrega un event listener para manejar el scroll
    window.addEventListener("scroll", handleScroll);
  
    // Maneja el scroll al cargar la página para animar la sección visible inicialmente
    handleScroll();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".example-projects");
  
    function handleScroll() {
      elementos.forEach((elemento, index) => {
        const elementoTop = elemento.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        // Si la parte superior del elemento está dentro de la ventana
        if (elementoTop < windowHeight) {
          // Agrega la clase "aparecer" con un retraso incremental
          setTimeout(() => {
            elemento.classList.add("aparecer");
          }, index * 200); // El índice del elemento multiplica el retraso (ajusta según sea necesario)
        }
      });
    }
  
    // Agrega un event listener para manejar el scroll
    window.addEventListener("scroll", handleScroll);
  
    // Maneja el scroll al cargar la página para animar los elementos visibles inicialmente
    handleScroll();
  });