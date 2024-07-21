function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}


document.querySelector('.tecla_pom').onclick = tocaSomPom;

document.querySelector('.tecla_clap').onclick = tocaSomClap;




//<audio src="sounds/keyq.wav" id="som_tecla_pom"></audio>
