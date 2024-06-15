document.addEventListener('DOMContentLoaded', (event) => {
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
            btn.classList.add('hover');
            setTimeout(() => {
                btn.classList.remove('hover');
            }, 1250);
        }, 5000);
    }
});
