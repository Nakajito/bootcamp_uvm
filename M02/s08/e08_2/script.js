var biblioteca = [
    {
        autor : 'Bill Gates',
        titulo : 'The Road Ahead',
        estadoLectura: true
    },
    {
        autor : 'Steve Jobs',
        titulo : 'Walter Isaacson',
        estadoLectura: true
    },
    {
        autor : 'Suzanne Collins',
        titulo : 'Mockingjay: The Final Book of The Hunger Games',
        estadoLectura: false
    },
]


for (let libro of biblioteca) {
    console.log("Autor:", libro.autor);
    console.log("Título:", libro.titulo);
    console.log("Leído:", libro.estadoLectura ? "Sí" : "No");
    console.log("----------------");
}