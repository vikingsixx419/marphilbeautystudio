document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Función para alternar el menú móvil
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });

    // Activar enlace de navegación según la sección visible
    function activateNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Llamar a la función al cargar la página y al hacer scroll
    window.addEventListener('scroll', activateNavLink);
    activateNavLink();

    // Animación de aparición al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .gallery-item, .contact-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Aplicar estilos iniciales para la animación
    const elementsToAnimate = document.querySelectorAll('.service-card, .gallery-item, .contact-card');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Llamar a la función al cargar la página y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    // WhatsApp Chat Widget Functionality
    const chatButton = document.querySelector('.whatsapp-chat-button');
    const chatContainer = document.querySelector('.whatsapp-chat-container');
    const chatClose = document.querySelector('.whatsapp-chat-header-close');
    const chatOptions = document.querySelectorAll('.whatsapp-chat-option');
    
    // Initialize chat as hidden
    if (chatContainer) {
        chatContainer.style.display = 'none';
    }
    
    // Toggle chat visibility when clicking the chat button
    if (chatButton) {
        chatButton.addEventListener('click', function() {
            if (chatContainer.style.display === 'none') {
                chatContainer.style.display = 'block';
                // Add a small animation
                setTimeout(() => {
                    chatContainer.style.opacity = '1';
                    chatContainer.style.transform = 'translateY(0)';
                }, 10);
            } else {
                closeChat();
            }
        });
    }
    
    // Close chat when clicking the close button
    if (chatClose) {
        chatClose.addEventListener('click', closeChat);
    }
    
    // Function to close chat with animation
    function closeChat() {
        chatContainer.style.opacity = '0';
        chatContainer.style.transform = 'translateY(20px)';
        setTimeout(() => {
            chatContainer.style.display = 'none';
        }, 300);
    }
    
    // Handle chat option clicks
    if (chatOptions) {
        chatOptions.forEach(option => {
            option.addEventListener('click', function() {
                const message = this.getAttribute('data-message');
                if (message) {
                    // Redirect to WhatsApp with the selected message
                    const phoneNumber = '598XXXXXXXX'; // Reemplazar con el número real
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
                }
            });
        });
    }
});