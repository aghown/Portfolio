
function escrevendoLetra(){
    function ativarLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i)=> {
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    
    }
    
    const titulo = document.querySelector('.digitando');
    ativarLetra(titulo);
}

const ativaMenu = document.querySelector('.fa-bars')

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
})
