function realizarSorteio(participantes) {
    if (participantes.length < 3) {
        console.log(participantes, "Quantidade menor que 3 participantes, tem que ter no mínimo 3 participantes ");
    }
    // participantesClone são participantes identicos ao original "participantes"
    let participantesClone = [...participantes];
    let ganhadores = [];

    for (let i = 0; i < 3; i++) {
        let indexVencedor = Math.floor(Math.random() * participantesClone.length);
        let ganhador = participantesClone.splice(indexVencedor, 1)[0];

        switch (i) {
            case 0:
                ganhador.premio = 'R$ 4.000,00';
                break;
            case 1:
                ganhador.premio = 'R$ 1.500,00';
                break;
            case 2:
                ganhador.premio = 'R$ 500,00';
                break;
        }
        ganhadores.push(ganhador);
    }
    return ganhadores;
}

function exibirGanhadores(ganhadores) {
    console.log("Sorteio da Rifa \n")
    console.log('Os ganhadores e os Prêmios:\n');
    ganhadores.forEach(ganhador => {
        console.log(`${ganhador.nome} (Número ${ganhador.numero}): ${ganhador.premio}`);
    });
}

let participantes = [
    { nome: 'Miguel', numero: 10 },
    { nome: 'Junior', numero: 15 },
    { nome: 'João', numero: 20 },
    { nome: 'Gabrielle', numero: 25 },
    { nome: 'Maria', numero: 30 },
    { nome: 'Rose', numero: 35 },
    { nome: 'Jorge', numero: 40 },
    { nome: 'Eduardo', numero: 45 },
    { nome: 'Paulo', numero: 50 }
];

try {
    let ganhadores = realizarSorteio(participantes);
    exibirGanhadores(ganhadores);
    console.log("\nParabéns aos ganhadores")
} catch (erro) {
    console.error(erro.message);
}
