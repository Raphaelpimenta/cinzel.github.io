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
            }, 20 * Math.random())
        })

    // }
}