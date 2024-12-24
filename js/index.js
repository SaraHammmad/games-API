// index.js
import { Display } from './display.js';
import { UI } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
 
  Display.loadGames('shooter');
  
  
  document.getElementById('shooterLink').addEventListener('click', () => {
    UI.activateLink('shooterLink');
    Display.loadGames('shooter');
  });

  document.getElementById('mmorpgLink').addEventListener('click', () => {
    UI.activateLink('mmorpgLink');
    Display.loadGames('mmorpg');
  });

  document.getElementById('sailingLink').addEventListener('click', () => {
    UI.activateLink('sailingLink');
    Display.loadGames('sailing');
  });

  document.getElementById('permadeathLink').addEventListener('click', () => {
    UI.activateLink('permadeathLink');
    Display.loadGames('permadeath');
  });

  document.getElementById('superheroLink').addEventListener('click', () => {
    UI.activateLink('superheroLink');
    Display.loadGames('superhero');
  });

  document.getElementById('pixelLink').addEventListener('click', () => {
    UI.activateLink('pixelLink');
    Display.loadGames('pixel');
  });
});
