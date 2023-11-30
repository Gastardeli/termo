const divisao = document.querySelector(".divisao")
const apagaEnter = document.querySelector("#apagar-e-enter")
const primeiraLinha = document.querySelector("#primeira-linha")
const segundaLinha = document.querySelector("#segunda-linha")
const terceiraLinha = document.querySelector("#terceira-linha")

const teclaPrimeiraLinha = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const teclaSegundaLinha = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const teclaTerceiraLinha = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

const linha = 6
const coluna = 5
let linhaAtual = 0
let colunaAtual = 0

let palavras = [
    'SAGAZ', 'AMAGO', 'NEGRO', 'TERMO', 'EXITO', 'MEXER', 'NOBRE', 'SENSO', 'AFETO', 'ALGOZ', 'ETICA', 'PLENA', 'MUTUA', 'TENUE', 'FAZER', 'ASSIM', 'VIGOR', 'SUTIL', 'AQUEM', 'POREM', 'SECAO', 'FOSSE', 'SANAR', 'PODER', 'AUDAZ', 'IDEIA', 'CERNE', 'INATO', 'MORAL', 'SOBRE', 'DESDE', 'MUITO', 'JUSTO', 'HONRA', 'QUICA', 'TORPE', 'SONHO', 'RAZAO', 'ETNIA', 'FUTIL', 'ICONE', 'ANEXO', 'AMIGO', 'EGIDE', 'TANGE', 'LAPSO', 'HAVER', 'EXPOR', 'DENGO', 'MUTUO', 'TEMPO', 'CASAL', 'ENTAO', 'HABIL', 'SEARA', 'BOCAL', 'AVIDO', 'ARDIL', 'PESAR', 'SABER', 'CAUSA', 'GRACA', 'DIZER', 'GENRO', 'OBICE', 'POSSE', 'COSER', 'DEVER', 'PARIA', 'BRADO', 'TENAZ', 'PROLE', 'SENDO', 'CRIVO', 'COMUM', 'CORJA', 'TEMOR', 'DETEM', 'AINDA', 'ANIMO', 'APICE', 'ESTAR', 'CEDER', 'ANSIA', 'XIBIU', 'PAUTA', 'DIGNO', 'ASSAZ', 'CULTO', 'MUNDO', 'ATROZ', 'FUGAZ', 'CENSO', 'GLEBA', 'FORTE', 'VICIO', 'VULGO', 'COZER', 'VALHA', 'DENSO', 'NENEM', 'REVES', 'PUDOR', 'CRIAR', 'SAUDE', 'DOGMA', 'REGRA', 'MESMO', 'LOUCO', 'JEITO', 'ATRAS', 'ORDEM', 'CLAVA', 'ROUND', 'BANAL', 'IMPOR', 'MERCE', 'TODOS', 'PEDIR', 'HOMEM', 'FELIZ', 'COISA', 'APRAZ', 'USURA', 'TENRO', 'SABIO', 'JUIZO', 'DESSE', 'LIMBO', 'SERVO', 'PIFIO', 'PROSA', 'FORMA', 'PRESA', 'FALAR', 'VIRIL', 'ONTEM', 'CUNHO', 'POSSO', 'DEVIR', 'REACA', 'MANSO', 'CERTO', 'MEIGA', 'VENDO', 'HEROI', 'VALOR', 'FLUIR', 'EBRIO', 'MAGOA', 'ACASO', 'SERIO', 'AFAGO', 'VISAR', 'PUDER', 'PLATO', 'GUISA', 'FALSO', 'LEGAL', 'FACIL', 'LUGAR', 'TEMER', 'GARBO', 'IMPIO', 'ABRIR', 'AFINS', 'CISMA', 'PLENO', 'BRUMA', 'OBTER', 'OBVIO', 'GERAR', 'LINDA', 'MATIZ', 'PRAXE', 'BURRO', 'EXODO', 'CRISE', 'FLUXO', 'UNIAO', 'VENIA', 'SENIL', 'HAVIA', 'TEDIO', 'AJUDA', 'ENFIM', 'RITMO', 'TOMAR', 'VISAO', 'MORTE', 'OLHAR', 'BREGA', 'ALIBI', 'LEVAR', 'PARVO', 'GENIO', 'CASTA', 'FAVOR', 'PRUMO', 'BRAVO', 'PULHA', 'VITAL', 'RETER', 'VALIA', 'RELES', 'PARCO', 'VIVAZ', 'FALTA', 'GRATO', 'LAICO', 'TECER', 'CABAL', 'POSSA', 'AMENO', 'SABIA', 'OUVIR', 'NOCAO', 'CALMA', 'CARMA', 'VIVER', 'RANCO', 'NICHO', 'OUTRO', 'PASSO', 'FORCA', 'ACHAR', 'PRIME', 'OBITO', 'NOITE', 'TENDO', 'FATOR', 'SELAR', 'FACAM', 'POBRE', 'ROGAR', 'UNICO', 'FARDO', 'COESO', 'ANELO', 'FARSA', 'TERRA', 'ATIVO', 'EPICO', 'REVER', 'CITAR', 'DUBIO', 'SINTO', 'CISAO', 'ADIAR', 'SONSO', 'LEIGO',
    'CIUME', 'SESTA', 'HASTE', 'GENTE', 'HUMOR', 'CESTA', 'TENDE', 'CLARO', 'DETER', 'VELHO', 'SULCO', 'REVEL', 'EXATO', 'AMPLO', 'ATUAR', 'PAPEL', 'VEMOS', 'ARDUO', 'LABOR', 'FEIXE', 'LAVRA', 'IGUAL', 'PONTO', 'IDEAL', 'MARCO', 'LIDER', 'IMUNE', 'GESTO', 'DEBIL', 'FONTE', 'OTICA', 'TERNO', 'HIATO', 'CAUDA', 'FICAR', 'AMBOS', 'VAZIO', 'SENAO', 'REMIR', 'CAPAZ', 'VACUO', 'TOADA', 'VARAO', 'SONSA', 'JOVEM', 'INATA', 'TANTO', 'NOSSA', 'TENRA', 'COCAR', 'XEQUE', 'VELAR', 'APOIO', 'CACAR', 'ALGUM', 'RELVA', 'FUSAO', 'SERIE', 'HORDA', 'LEITO', 'ADVER', 'POUCO', 'RAIVA', 'FARAO', 'PROBO', 'DOIDO', 'ENTRE', 'VIMOS', 'CHUVA', 'SENTE', 'COESA', 'CICLO', 'FEITO', 'MINHA', 'FRASE', 'TORCO', 'ANUIR', 'VERSO', 'BOTAR', 'RIGOR', 'CRUEL', 'MASSA', 'BRISA', 'BLASE', 'IMPAR', 'DORSO', 'TRAMA', 'CHATA', 'SIGNO', 'CARRO', 'PRECE', 'LAZER', 'MAIOR', 'MOCAO', 'CREDO', 'FAUNA', 'COVIL', 'PRESO', 'PEGAR', 'CASTO', 'MORAR', 'FUROR', 'SORTE', 'SEITA', 'PESTE', 'FLORA', 'AMBAS', 'DOCIL', 'FAINA', 'LIVRO', 'ADEUS', 'VETOR', 'HOUVE', 'ARIDO', 'VIRUS', 'SETOR', 'SENDA', 'COMER', 'LIAME', 'PECHA', 'MANHA', 'MESES', 'PLANO', 'NUNCA', 'OCASO', 'PEIXE', 'ARDOR', 'BEATA', 'ALIAS', 'ACESO', 'VISSE', 'VULTO', 'SALVO', 'SAIBA', 'VASTO', 'BANZO', 'ANTRO', 'BREVE', 'MORRO', 'REZAR', 'PRAIA', 'PAJEM', 'SAIDA', 'BIRRA', 'MUDAR', 'PRADO', 'REGER', 'JUNTO', 'OTIMO', 'PARTE', 'AVARO', 'SEGUE', 'SINAL', 'CAMPO', 'AUREO', 'MOTIM', 'RISCO', 'SERAO', 'LENDA', 'GRUPO', 'ATOMO', 'CHULO', 'ANDAR', 'ANAIS', 'ACIMA', 'AGORA', 'OPCAO', 'FUGIR', 'BRAVA', 'NACAO', 'TRETA', 'PARAR', 'LEITE', 'RAPAZ', 'FRUIR', 'ANTES', 'VILAO', 'FITAR', 'IDOLO', 'JAZIA', 'PRAZO', 'TENSO', 'PUXAR', 'GERIR', 'CONTA', 'TEXTO', 'AUREA', 'ALUDE', 'NORMA', 'TIRAR', 'TOSCO', 'VERBO', 'REINO', 'EXAME', 'EPOCA', 'BANDO', 'ANCIÃ', 'INDIO', 'MALTA', 'PSICO', 'ESTAO', 'OXALA', 'ARCAR', 'SINHA', 'CORPO', 'PROVA', 'PRETO', 'FILHO', 'AVIAO', 'AONDE', 'TRAGA', 'FESTA', 'PRAGA', 'CHEIO', 'QUASE', 'VENAL', 'FATAL', 'VORAZ', 'ATRIO', 'QUOTA', 'TURBA', 'CERTA', 'ACESA', 'LOGRO', 'MANHA', 'FATOS', 'COPIA', 'APEGO', 'SARCA', 'FIXAR', 'OASIS', 'SOLDO', 'LIGAR', 'SUMIR', 'POMPA', 'COITO', 'NIVEL']

let palavra = palavras[Math.floor(Math.random() * palavras.length)]

let palavraMapa = {}
for (let i = 0; i < palavra.length; i++) {
    palavraMapa[palavra[i]] = i;
}

const tentativas = []

for (let linhaIndex = 0; linhaIndex < linha; linhaIndex++) {
    tentativas[linhaIndex] = new Array(coluna)
    const divisaoLinha = document.createElement('div')
    divisaoLinha.setAttribute('id', 'linha' + linhaIndex)
    divisaoLinha.setAttribute('class', 'div-linha')
    for (let colunaIndex = 0; colunaIndex < coluna; colunaIndex++) {
        const divisaoColuna = document.createElement('div')
        divisaoColuna.setAttribute('id', 'linha' + linhaIndex + 'coluna' + colunaIndex)
        let classColuna;
        if (linhaIndex === 0) {
            classColuna = 'div-coluna digitando'
        } else {
            classColuna = 'div-coluna desativado'
        }
        divisaoColuna.setAttribute('class', classColuna)
        divisaoLinha.append(divisaoColuna)
        tentativas[linhaIndex][colunaIndex] = ''
    }
    divisao.append(divisaoLinha)
}

const checkTentativa = () => {
    const tentativa = tentativas[linhaAtual].join('')
    if (tentativa.length !== coluna) {
        return
    }
    let atColuna = document.querySelectorAll('.digitando')
    for (let i = 0; i < coluna; i++) {
        const letra = tentativa[i]
        if (palavraMapa[letra] === undefined) {
            atColuna[i].classList.add('errado')
        } else {
            if (palavraMapa[letra] === i) {
                atColuna[i].classList.add('certo')
            } else {
                atColuna[i].classList.add('deslocada')
            }
        }
    }
    if (tentativa === palavra) {
        window.alert('Parabéns, você conseguiu!')
        return
    } else {
        if (linhaAtual === linha - 1) {
            window.alert('Errou!')
        } else {
            proximaLinha()
        }
    }
}

const proximaLinha = () => {
    let digColuna = document.querySelectorAll('.digitando')

    for (let i = 0; i < digColuna.length; i++) {
        digColuna[i].classList.remove('digitando')
        digColuna[i].classList.add('desativado')
    }
    linhaAtual++
    colunaAtual = 0

    const linhaAtualElemento = document.querySelector('#linha' + linhaAtual)
    let atColuna = linhaAtualElemento.querySelectorAll('.div-coluna')
    for (let i = 0; i < atColuna.length; i++) {
        atColuna[i].classList.remove('desativado')
        atColuna[i].classList.add('digitando')
    }
}

const tecladoOnClick = key => {
    if (colunaAtual === coluna) {
        return
    }
    const divAtual = document.querySelector('#linha' + linhaAtual + 'coluna' + colunaAtual)
    divAtual.textContent = key
    tentativas[linhaAtual][colunaAtual] = key
    colunaAtual++
}

const criarLinhaTeclado = (keys, linhaTeclado) => {
    keys.forEach(key => {
        let botaoElemento = document.createElement('button')
        botaoElemento.textContent = key
        botaoElemento.setAttribute('id', key)
        botaoElemento.addEventListener('click', () => tecladoOnClick(key))
        linhaTeclado.append(botaoElemento)
    })
}

criarLinhaTeclado(teclaPrimeiraLinha, primeiraLinha)
criarLinhaTeclado(teclaSegundaLinha, segundaLinha)
criarLinhaTeclado(teclaTerceiraLinha, terceiraLinha)

const backspace = () => {
    if (colunaAtual === 0) {
        return
    }
    colunaAtual--
    tentativas[linhaAtual][colunaAtual] = ''
    const div = document.querySelector('#linha' + linhaAtual + 'coluna' + colunaAtual)
    div.textContent = ''
}

const backspaceBotao = document.createElement('button')
backspaceBotao.addEventListener('click', backspace)
backspaceBotao.textContent = '<='
apagaEnter.append(backspaceBotao)

backspaceBotao.style.margin = "15px";
backspaceBotao.style.padding = "8px";

const enterBotao = document.createElement('button')
enterBotao.addEventListener('click', checkTentativa)
enterBotao.textContent = 'ENTER'
apagaEnter.append(enterBotao)

enterBotao.style.margin = "15px";
enterBotao.style.padding = "8px";

document.onkeydown = function (evt) {
    evt = evt || window.evt
    if (evt.key === 'Enter') {
        checkTentativa()
    } else if (evt.key === 'Backspace') {
        backspace()
    } else {
        tecladoOnClick(evt.key.toLocaleUpperCase())
    }
}