document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Start when the top of the section is 80% from the top of the viewport
                end: "top 30%", // End when the top of the section is 30% from the top of the viewport
                scrub: 1 // Smooth animation
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY;

        document.querySelectorAll('nav a').forEach(link => {
            const targetId = link.hash;
            if (targetId && targetId !== '#') {
                let section = document.querySelector(targetId);

                if (section && 
                    section.offsetTop <= fromTop + 50 &&
                    section.offsetTop + section.offsetHeight > fromTop + 50) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    });

    const btn = document.querySelector('.btnfos-5');
    if (btn) {
        setInterval(() => {
            gsap.fromTo(btn, 
                { scale: 1 }, 
                { 
                    scale: 1.2, 
                    duration: 1.5, 
                    ease: "power1.inOut", 
                    yoyo: true, 
                    repeat: 1 
                }
            );
        }, 10000); // Cada 10 segundos
    }

    // Mantener el efecto hover existente
    const hoverEffect = () => {
        btn.classList.add('hover');
        setTimeout(() => {
            btn.classList.remove('hover');
        }, 1250);
    };

    btn.addEventListener('mouseenter', hoverEffect);

    // Animaciones de los títulos
    gsap.from(".main-title", { 
        duration: 1.5, 
        y: 50, 
        opacity: 0, 
        ease: "power1.out" 
    });

    gsap.from(".subtitle", { 
        duration: 1.5, 
        opacity: 0, 
        delay: 2, 
        ease: "power1.out" 
    });
});
