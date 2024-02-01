class Computador{
    constructor(tipo, memoriaEmGigas){
        this.tipo = tipo
        this.memoriaEmGigas = memoriaEmGigas

        this.ligado = false

        this.ligar = ()=>{
            this.ligado = true
        }
        this.desligar = ()=>{
            this.ligado = false
        }
    }
}

class Portatil extends Computador{
    constructor(tipo, memoriaEmGigas, fabricante){
        super(tipo, memoriaEmGigas)

        this.fabricante = fabricante
    }
}

class VideoGame extends Computador{
    constructor(tipo, memoriaEmGigas, fabricante, modelo){
        super(tipo, memoriaEmGigas)

        this.modelo = modelo
        this.fabricante = fabricante
    }
}

computador01 = new Portatil('celular', 124, 'samsung')
computador01.ligar()

computador02 = new VideoGame('Bancada', 4, 'Microsoft', 'Xbox')
computador02.desligar()

computador03 = new Portatil('Notebook', 1000, 'Apple')
computador03.ligar()

computador04 = new VideoGame('Portátil', 120, 'Nintendo', 'GameBoy')
computador04.desligar()

computador05 = new Portatil('SmartWatch', 4, 'Xiomi')
computador05.desligar()

// computador01
console.log(`Computador 01: ${computador01.tipo}, ${computador01.memoriaEmGigas}Gb, Fabricante ${computador01.fabricante}, Estado atual ${computador01.ligado? 'Ligado': 'Desligado'}`)

// computador02
console.log(`Computador 02: ${computador02.tipo}, ${computador02.memoriaEmGigas}Gb, Fabricante ${computador02.fabricante}, Modelo ${computador02.modelo}, Estado atual ${computador02.ligado? 'Ligado': 'Desligado'}`)

// computador03
console.log(`Computador 03: ${computador03.tipo}, ${computador03.memoriaEmGigas}Gb, Fabricante ${computador03.fabricante}, Estado atual ${computador03.ligado? 'Ligado': 'Desligado'}`)

// computador04
console.log(`Computador 04: ${computador04.tipo}, ${computador04.memoriaEmGigas}Gb, Fabricante ${computador04.fabricante}, Modelo ${computador04.modelo}, Estado atual ${computador04.ligado? 'Ligado': 'Desligado'}`)

// computador05
console.log(`Computador 05: ${computador05.tipo}, ${computador05.memoriaEmGigas}Gb, Fabricante ${computador05.fabricante}, Estado atual ${computador05.ligado? 'Ligado': 'Desligado'}`)