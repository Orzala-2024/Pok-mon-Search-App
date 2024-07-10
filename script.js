document.getElementById("search-button").addEventListener("click", async function() {
  const searchInput = document.getElementById("search-input").value.trim().toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;

  try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error("Pokémon not found");
      }
      const data = await response.json();