const agregar = document.querySelector('#agregar');
const quitar = document.querySelector('#quitar');
const cantidad = document.querySelector('#cantidad');

console.log(agregar, quitar, cantidad);

agregar.addEventListener('click',() => cantidad.value = Number(cantidad.value)+1);

quitar.addEventListener('click',() => {
    if (cantidad.value>=1)
    {
    cantidad.value = Number(cantidad.value)-1
    }
});

