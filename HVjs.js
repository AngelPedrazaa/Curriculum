window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.info');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('fade-in');
        }
    });
});

const infoItems = document.querySelectorAll('.infoInfo');

infoItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

window.onload = () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';


    const title = document.querySelector('.p1');
    const text = title.textContent;
    title.textContent = '';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
};