document.addEventListener("DOMContentLoaded", () => {
    async function fetchQuote() {
      try {
        const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
        const data = await response.json();
  
        const img = document.getElementById("character-img");
        const quote = document.getElementById("quote-text");
        const character = document.getElementById("character-name");
  
        // Aplicar la transición ocultando primero
        img.classList.add("hidden");
        quote.classList.add("hidden");
        character.classList.add("hidden");
  
        setTimeout(() => {
          // Actualizar los elementos con los datos del API
          img.src = data[0].image;
          quote.textContent = `"${data[0].quote}"`;
          character.textContent = `- ${data[0].character}`;
          
          // Mostrar con transición
          img.classList.remove("hidden");
          quote.classList.remove("hidden");
          character.classList.remove("hidden");
        }, 300); // Tiempo de la transición
      } catch (error) {
        console.error("Error al obtener la frase:", error);
      }
    }
  
    document.getElementById("new-quote").addEventListener("click", fetchQuote);
    // Cargar una frase inicial al abrir la página
    fetchQuote();
  });