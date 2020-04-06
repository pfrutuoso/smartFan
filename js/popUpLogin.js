function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    $('body').addClass('noScroll')
}

const btn = document.querySelector('.btn-login');
btn.addEventListener('click', function() {
    iniciaModal('modalLogin');
})


function fechaModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.remove('mostrar');
    $('body').removeClass('noScroll')
}
const close = document.querySelector('.closeModal');
close.addEventListener('click', function() {
    fechaModal('modalLogin');
})