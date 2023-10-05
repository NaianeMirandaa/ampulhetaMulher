//responsividade do menu
function menuShow(){
    let menuMobile = document.querySelector('.mobileMenu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "assets/imagens/icones/barsSolid.svg"
    } else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/imagens/icones/closeBars.svg"
    }
}
//faq acordeon
const faqContent = document.querySelectorAll(".faqContent");

faqContent.forEach((element)=>{
    const pergunta = element.querySelector(".pergunta");

    pergunta.addEventListener("click", () => {

        const resposta = element.querySelector(".resposta");

        if(resposta.classList.contains("ativa")){
            resposta.classList.remove("ativa");
            element.querySelector(".iconFaq").src = "assets/imagens/icones/iconSetaFaqClosed.svg";
        }else{
            resposta.classList.add("ativa");
            element.querySelector(".iconFaq").src = "assets/imagens/icones/iconSetaFaqOpen.svg";
        }
    })
    console.log(element);
})

//efeito scrollreveal

window.sr = ScrollReveal({reset: true});

sr.reveal('.inicio', {rotate: {x:0, y:30, z:0},
    duration:1500,
    });
sr.reveal('.textBlock', {rotate: {x:0, y:30, z:0},
    duration:1500,
    });
sr.reveal('.miniAnimation', {rotate: {x:0, y:30, z:0},
    duration:1500,
    });
sr.reveal('.depoimentos', {rotate: {x:0, y:30, z:0},
    duration:1500,
    });
sr.reveal('.fotoAutora', {rotate: {x:0, y:30, z:0},
    duration:1500,
    });
sr.reveal('.detalhes', {rotate: {x:0, y:30, z:0},
    duration:1500,
    });






