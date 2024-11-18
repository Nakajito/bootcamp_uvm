class Rectangulo {
    constructor(ancho, altura) {
        this.ancho = ancho;
        this.altura = altura;
    }

    calcularArea() {
      return this.ancho * this.altura;
    }

    calcularPerimetro() {
      return 2 * (this.ancho + this.altura);
    }
}

// Creamos una instancia del rectángulo
const miRectangulo = new Rectangulo(4, 7);


// Calculamos y mostramos el área y el perímetro
console.log("El área del rectángulo es:", miRectangulo.calcularArea());
console.log("El perímetro del rectángulo es:", miRectangulo.calcularPerimetro());