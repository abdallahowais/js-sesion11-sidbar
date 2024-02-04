const sidbar = document.querySelector('.sidbar');
const back = document.querySelector('.sidbar span');
const show = document.querySelector('h2');
show.onclick = () => {
    show.innerHTML=("This is a sidbar")
    show.style.zIndex=99999999999;
    sidbar.classList.add('d-block');
    document.querySelector(".overlay").classList.add('d-block')
    document.querySelector(".overlay").style()
};


back.onclick = () => {
    show.innerHTML=("Show sidbar")
    sidbar.classList.remove('d-block');
    document.querySelector(".overlay").classList.remove('d-block')


};

