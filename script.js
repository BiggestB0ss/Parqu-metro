// parquimetro em si

    class Parquimetro {

    constructor(valor) {
        this.valor = valor;
    }

    calcularTempo() {

        if (this.valor < 1) {
            return {
                tempo: 0,
                troco: 0,
                mensagem: "Insuficiente"
            };
        }

        if (this.valor >= 3) {
            return {
                tempo: 120,
                troco: this.valor - 3,
                mensagem: "120 minutos"
            };
        }

        if (this.valor >= 1.75) {
            return {
                tempo: 60,
                troco: this.valor - 1.75,
                mensagem: "60 minutos"
            };
        }

        return {
            tempo: 30,
            troco: this.valor - 1,
            mensagem: "30 minutos"
        };
    }
    }

// elemento html

    const valor = document.getElementById("valor");
    const calcular = document.getElementById("calcular");
    const tempo = document.getElementById("tempo");
    const troco = document.getElementById("troco");
    const mensagem = document.getElementById("mensagem");
    
// botão

    calcular.addEventListener("click", function () {
        const dinheiro = Number(valor.value);
        const parquimetro = new Parquimetro(dinheiro);
        const resultado = parquimetro.calcularTempo();

        tempo.textContent = `Tempo: ${resultado.tempo} minutos`;
        troco.textContent = `Troco: R$ ${resultado.troco.toFixed(2)}`;
        mensagem.textContent = resultado.mensagem;

    console.log(resultado);
});
