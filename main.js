const diaText = document.querySelector('#dia')
const horaText = document.querySelector('#hora')
const minutoText = document.querySelector('#minuto')
const segundoText = document.querySelector('#segundo')

const novoAno = new Date('1 Jan 2024')

setInterval(() => {
    const currentDate = new Date()
    const totalSeconds =(novoAno - currentDate) / 1000

    const dia = Math.floor((totalSeconds / 3600) / 24)
    const hora = Math.floor((totalSeconds / 3600) % 24)
    const minutos = Math.floor((totalSeconds / 60) % 60)
    const segundos = Math.floor((totalSeconds % 60))


    diaText.innerHTML = dia 
    horaText.innerHTML = hora
    minutoText.innerHTML = minutos
     segundoText.innerHTML = segundos

},1000)