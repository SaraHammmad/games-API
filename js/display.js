
import { GamesAPI } from './gamesAPI.js';
import { UI } from './ui.js';

export class Display {
  static async loadGames(category) {
    UI.showLoading();  
    const games = await GamesAPI.fetchGames(category);
    UI.displayGames(games); 
    UI.hideLoading();  
  }

  static async viewDetails(gameId) {
    UI.showLoading();  
    const gameDetails = await GamesAPI.fetchGameDetails(gameId);
    if (gameDetails) {
      UI.displayGameDetails(gameDetails);  
    } else {
      UI.displayError('Failed to load game details');  // Show error
    }
    UI.hideLoading();  
  }
}
