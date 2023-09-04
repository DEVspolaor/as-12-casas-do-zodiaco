function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const descricao = document.getElementById('desc');
    const valor = document.querySelector('#valor').value;
    
    if((valor=="gemeos")|| (valor=="Gemêos") || (valor=="gemêos")){
        texto.innerHTML = "Gemêos";
        descricao.innerHTML = "Saga de Gêmeos: O Cavaleiro de Gêmeos inicialmente aparece como um dos aliados, mas revela-se um dos principais antagonistas. Sua técnica Outra Dimensão manipula a realidade e o espaço para prender seus oponentes.";
        imagem.setAttribute("src","img/gemeos1.png");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="escorpiao")|| (valor=="Escorpião") || (valor=="escorpião")){
        texto.innerHTML = "Escorpião";
        descricao.innerHTML = "Ikki de Fênix: O irmão mais velho de Shun, é o Cavaleiro de Fênix. Inicialmente apresentado como um anti-herói, ele se torna um aliado valioso. Sua técnica Ave Fênix permite que ele se regenere e ressurja das cinzas, além de criar chamas intensas.";
        imagem.setAttribute("src","img/escorpiao2.png");
        imagem.setAttribute("width","300px");
    }
    
    else if((valor=="peixes")|| (valor=="Peixes")){
        texto.innerHTML = "Peixes";
        descricao.innerHTML = "Shun de Andrômeda: O Cavaleiro de Andrômeda é notável por sua compaixão e natureza pacifista. Ele prefere evitar a violência, mas quando necessário, utiliza correntes como arma. Sua técnica Nebulosa de Andrômeda cria uma ilusão para confundir o inimigo";
        imagem.setAttribute("src","img/peixes2.png");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="aquario")|| (valor=="Aquário") || (valor=="aquário")){
        texto.innerHTML = "Aquário";
        descricao.innerHTML = "Hyoga de Cisne: O Cavaleiro de Cisne é conhecido por seu controle sobre o gelo e técnicas relacionadas a ele. Sua técnica mais famosa é o Pó de Diamante, onde ele congela o ar para criar projéteis afiados de gelo. Ele é calmo e ponderado.";
        imagem.setAttribute("src","img/aquario2.png");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="cancer") || (valor=="Cancêr") || (valor=="cancêr")){
        texto.innerHTML = "Câncer";
        descricao.innerHTML = "Máscara da Morte de Câncer: O Cavaleiro de Câncer é sombrio e sádico. Sua técnica Câncer Deathmask envolve ataques baseados em seu cosmo maligno, como o Câncer Extermination, que ataca o sistema nervoso do adversário.";
        imagem.setAttribute("src","img/cancer2.png");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="capricornio")|| (valor=="Capricórnio") || (valor=="capricórnio")){
        texto.innerHTML = "Capricórnio";
        descricao.innerHTML = "Shiryu de Dragão: Um dos Cavaleiros mais disciplinados, é o Cavaleiro de Dragão. Sua principal técnica é o Cólera dos 100 Dragões, onde ele concentra sua energia para desferir um golpe poderoso. Ele é conhecido por sua grande resistência e lealdade.";
        imagem.setAttribute("src","img/capricornio2.png");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="leao") || (valor=="Leão") || (valor=="leão")){
        texto.innerHTML = "Leão";
        descricao.innerHTML = "Aiolia de Leão: O Cavaleiro de Leão é conhecido por sua força e velocidade excepcionais. Sua principal técnica é o Relâmpago de Plasma, que utiliza a energia do cosmo para disparar ataques elétricos extremamente poderosos.";
        imagem.setAttribute("src","img/leao2.png");
        imagem.setAttribute("width","300px");
    }
    
    else if((valor=="sagitario")|| (valor=="Sagitário") || (valor=="sagitário")){
        texto.innerHTML = "Sagitário";
        descricao.innerHTML = "Seiya de Pégaso: O protagonista da série, é o Cavaleiro de Pégaso. Ele é conhecido por sua força de vontade inabalável e sua natureza corajosa. Sua principal técnica é o Meteoro de Pégaso, onde ele ataca repetidamente com socos e chutes em alta velocidade.";
        imagem.setAttribute("src","img/sargitario2.png");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="touro")|| (valor=="Touro")){
        texto.innerHTML = "Touro";
        descricao.innerHTML = "Aldebaran de Touro: O Cavaleiro de Touro é conhecido por sua imensa força física. Ele é calmo e gentil, mas sua fúria pode ser desencadeada quando confrontado com o mal. Sua técnica Grande Chifre é um ataque de choque poderoso.";
        imagem.setAttribute("src","img/touro1.png");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="libra") || (valor=="Libra")){
        texto.innerHTML = "Libra";
        descricao.innerHTML = "Dohko de Libra: O Cavaleiro de Libra é conhecido por sua sabedoria e experiência. Ele é o Mestre Ancião, guardião do Templo de Libra. Sua técnica mais famosa é o Extinção Estelar de Libra, que utiliza o poder das estrelas para desferir um golpe devastador.";
        imagem.setAttribute("src","img/libra2.png");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="virgem")|| (valor=="Virgem")){
        texto.innerHTML = "Virgem";
        descricao.innerHTML = "Shaka de Virgem: O Cavaleiro de Virgem é conhecido por sua incrível habilidade e tranquilidade. Ele é considerado um dos Cavaleiros mais poderosos e está associado à perfeição. Sua técnica mais famosa é o Tesouro do Céu, que permite que ele controle as estrelas e a energia cósmica.";
        imagem.setAttribute("src","img/virgem2.png");
        imagem.setAttribute("width","300px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}

