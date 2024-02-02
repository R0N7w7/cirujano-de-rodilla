    document.addEventListener("DOMContentLoaded", () => {
        const elementos = document.querySelectorAll('.popup');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.25 // Cambia este valor según tus necesidades
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // El elemento ha entrado en la vista
                    // Cambia la opacidad para mostrar el elemento gradualmente
                    entry.target.style.opacity = 1;
                } else {
                    entry.target.style.opacity = 0;
                }
            });
        }, options);

        elementos.forEach(elemento => {
            observer.observe(elemento);
        });


        const textos = document.querySelectorAll('.titulo-change');
        textos.forEach(texto => {
            const textoContenido = texto.textContent.trim();
            texto.textContent = '';

            // Función para crear los elementos <span> y animar las letras
            function animarLetras() {
                for (let i = 0; i < textoContenido.length; i++) {
                    const letra = document.createElement('span');
                    letra.textContent = textoContenido[i];
                    letra.style.animationDelay = `${i * 0.05}s`;
                    texto.appendChild(letra);
                }
                texto.classList.add('animar-letras');
            }

            // Opciones para el Intersection Observer
            const opciones = {
                root: null, // El observador se fija en el viewport por defecto
                rootMargin: '0px', // Margen en el área del viewport
                threshold: 0.5, // Umbral de intersección (50% del elemento en pantalla)
            };

            // Crear un observador
            const observador = new IntersectionObserver(function (entradas) {
                if (entradas[0].isIntersecting) {
                    // Si el elemento entra en pantalla, activar la animación
                    animarLetras();
                    observador.disconnect();
                }
            }, opciones);

            // Observar el elemento <p>
            observador.observe(texto);
        });

        var observer4 = new IntersectionObserver(function (entries, observer4) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    entry.target.style.animation = 'fadeInSlide 1s forwards';
                    observer4.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Cambia el valor según tus necesidades

        // Observar todos los elementos con la clase 'titulo'
        document.querySelectorAll('h2').forEach(function (titulo) {
            observer4.observe(titulo);
        });

        var observer5 = new IntersectionObserver(function (entries, observer5) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    entry.target.style.animation = 'fadeLeftSlide 1300ms forwards';
                    observer5.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Cambia el valor según tus necesidades

        // Observar todos los elementos con la clase 'titulo'
        document.querySelectorAll('.hero p, .appear').forEach(function (titulo) {
            observer5.observe(titulo);
        });

        var observer6 = new IntersectionObserver(function (entries, observer6) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    entry.target.style.animation = 'popUp 1s forwards';
                    observer6.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 }); // Cambia el valor según tus necesidades

        // Observar todos los elementos con la clase 'titulo'
        document.querySelectorAll('.serviceIcon, .map').forEach(function (titulo) {
            observer6.observe(titulo);
        });
    })
