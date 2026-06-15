let cliques = 0;

function duplicar(){
    cliques = cliques + 1;
    
    let resultado = 1 * (2 ** cliques);
    
    const elementoNumero = document.getElementById('numero');
    elementoNumero.textContent = resultado;

    const elementoCliques = document.getElementById('contador-cliques');
    elementoCliques.textContent = cliques;
}