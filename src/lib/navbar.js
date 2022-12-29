export function toggleMenu() {
  const menu = document.getElementsByClassName('bottom-menu')[0];
  if (menu.classList.contains('bottom-menu-hidden')) {
    menu.classList.remove('bottom-menu-hidden');
  } else {
    menu.classList.add('bottom-menu-hidden');
  }
}

/**
 * @param {string} activeElement - The id of the active element
 */
export function mobileSetActive(activeElement) {
  toggleMenu();
  setActive(activeElement);
}

/**
 * @param {string} activeElement - The id of the active element
 */
export function setActive(activeElement) {
  const headerTiles = document.getElementsByClassName('header-tile');
  for (let i = 0; i < headerTiles.length; i++) {
    headerTiles[i].classList.remove('selected');
  }
  document.getElementById(activeElement)?.classList.add('selected');
}

/**
 * @param {string} path
 */
export function getActive(path) {
  if (path === '/') {
    return 'personal';
  }
  if (path === '/tools') {
    return 'tools';
  }
  if (path === '/other') {
    return 'other';
  }
  return 'none';
}
