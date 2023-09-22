export default function initAnimaNumeros(){
    
    
    // function animaNumeros(){
        const numeros = document.querySelectorAll('[data-numero]');

        numeros.forEach((item) => {
            const total = +item.innerHTML;
            const incremento = Math.floor(total / 100);
            let start = 0;

            const timer = setInterval(() => {
                start = start + incremento;
                item.innerHTML = start;
                if(start > total){
                    item.innerHTML = total;
                    clearInterval(timer)
                }
            }, 35 * Math.random())
        })

    // }
    // function handleMutation(mutation){
    //     if(mutation[0].target.classList.contains('ativo')){
    //         alvo.disconnect();
    //         animaNumeros()
    //     }
    // }

    // const alvoTarget = document.querySelector('.cards');
    // const alvo = new MutationObserver(handleMutation);

    // alvo.observe(alvoTarget, {attributes: true})

}