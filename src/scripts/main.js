AOS.init();


const dataDoEvento = new Date("2024-02-10T19:00:00"); 
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const HoraEmMs = 1000 * 60 * 60;
    const MinutoEmMs = 1000 * 60;

    const diasAteOEvento= Math.floor(distanciaAteOEvento / diaEmMS);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS ) / HoraEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento  % HoraEmMs) / MinutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % MinutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);





