export default function initanimacaoScroll(){

    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
        const windowHalf = window.innerHeight * 0.6;

        function animaScroll(){
            sections.forEach((item) => {
                const sectionTop = item.getBoundingClientRect().top;
                const sectionVisivel = (sectionTop - windowHalf) < 0;

                if(sectionVisivel){
                    item.classList.add('ativo');
                } else if(item.classList.contains('ativo')){
                    item.classList.remove('ativo')
                }
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }

}