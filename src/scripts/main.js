document.addEventListener('DOMContentLoaded', function(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const btnSend = document.getElementById('btn-send').value;

    btnSend.addEventListener('click', ()=>{
        if (name == '' || email == ''){
            Swal.fire('Preecha todos os campos.');
        } else {
            Swal.fire('Seu convite foi enviado para '+email);
        }
    });
});