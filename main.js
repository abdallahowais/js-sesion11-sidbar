const sidbar = document.querySelector('.sidbar');
const back = document.querySelector('.sidbar span');
const show = document.querySelector('h2');

back.onclick = () => {
    sidbar.classList.add('hide'); // إضافة الكلاس "hide" للشريط الجانبي
    document.querySelector(".overlay").classList.add('d-none')

};

show.onclick = () => {
    sidbar.classList.remove('hide'); // إضافة الكلاس "hide" للشريط الجانبي
    document.querySelector(".overlay").classList.remove('d-none')


};
