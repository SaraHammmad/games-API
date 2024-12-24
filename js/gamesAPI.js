export class GamesAPI {
  static async fetchGames(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'c99eb09fd3msh9f9d7dff3d74c3cp1a9556jsn977a6da55e53',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('Failed to fetch games');
      return await response.json();
    } catch (error) {
      console.error('Error fetching games:', error);
      return [];
    }
  }

  static async fetchGameDetails(gameId) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'c99eb09fd3msh9f9d7dff3d74c3cp1a9556jsn977a6da55e53',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('Failed to fetch game details');
      return await response.json();
    } catch (error) {
      console.error('Error fetching game details:', error);
      return null;
    }
  }
}
