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
                    entry.target.style.animation = 'fadeLeftSlide 1500ms forwards';
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
        document.querySelectorAll('.serviceIcon, h1').forEach(function (titulo) {
            observer6.observe(titulo);
        });
    })
