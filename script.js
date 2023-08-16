function menuShow(){
    let menuMobile = document.querySelector('.mobileMenu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "assets/imagens/icones/barsSolid.png"
    } else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/imagens/icones/closeBars.png"
    }
}