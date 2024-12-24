// ui.js
export class UI {
  static showLoading() {
    const overlay = document.createElement('div');
    overlay.classList.add('loading-overlay');
    overlay.innerHTML = `<div class="spinner"></div>`;
    document.body.appendChild(overlay);
  }

  static hideLoading() {
    const overlay = document.querySelector('.loading-overlay');
    if (overlay) overlay.remove();
  }

  static displayGames(games) {
    const gamesList = document.getElementById('gamesList');
    gamesList.innerHTML = '';

    games.forEach(game => {
      const gameCard = document.createElement('div');
      gameCard.classList.add('col-md-3');
      gameCard.innerHTML = `
        <div class="card">
          <img src="${game.thumbnail}" class="card-img-top" alt="${game.title}">
          <div class="card-body">
            <h5 class="card-title">${game.title}</h5>
            <button class="btn btn-primary" onclick="Display.viewDetails('${game.id}')">View Details</button>
          </div>
        </div>
      `;
      gamesList.appendChild(gameCard);
    });
  }

  static displayGameDetails(gameDetails) {
    const detailsSection = document.getElementById('detailsSection');
    const gamesSection = document.getElementById('gamesSection');

    gamesSection.classList.remove('active-section');
    detailsSection.classList.add('active-section');

    const gameDetailsContainer = document.getElementById('gameDetails');
    gameDetailsContainer.innerHTML = `
      <h3>${gameDetails.title}</h3>
      <img src="${gameDetails.thumbnail}" alt="${gameDetails.title}" class="img-fluid">
      <p><strong>Description:</strong> ${gameDetails.description}</p>
      <p><strong>Genre:</strong> ${gameDetails.genre}</p>
      <p><strong>Platform:</strong> ${gameDetails.platform}</p>
      <p><strong>Release Date:</strong> ${gameDetails.release_date}</p>
    `;
  }

  static goBack() {
    const detailsSection = document.getElementById('detailsSection');
    const gamesSection = document.getElementById('gamesSection');

    detailsSection.classList.remove('active-section');
    gamesSection.classList.add('active-section');
  }

  static activateLink(linkId) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    document.getElementById(linkId).classList.add('active');
  }

  static displayError(message) {
    alert(message);
  }
}
