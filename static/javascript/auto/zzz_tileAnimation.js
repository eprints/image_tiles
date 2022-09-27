// Colours - for tile backgrounds and tile text
let backgroundColors = ['red', 'white', 'blue', 'beige', 'white', '#273746', 'red', 'white', 'blue', 'beige', 'white', '#273746', 'blue', 'beige', 'white', '#273746'];
let textColours = ['white', 'red', 'white', '#273746', 'blue', 'white', 'white', 'red', 'white', '#273746', 'blue', 'white', 'white', '#273746', 'blue', 'white'];

// Pattern - which tile is larger than the others
let patterns = [[2, 10, 11, 13], [1, 11, 15, 16], [6, 10, 11, 13], [1, 2, 9, 12]];
let pattern = patterns[Math.floor(Math.random()*patterns.length)];

// cgi script loads after the rest of the DOM so standart DOMContentLoaded event listeners doesn't cut it
const isElementLoaded = async selector => {
 while ( document.querySelector(selector) === null) {
   await new Promise( resolve =>  requestAnimationFrame(resolve) )
 }
 return document.querySelector(selector);
};

function setGridAutoRows() {
  let tileWrapper = document.querySelector("#image-tile");
  if ( window.innerWidth > 700 ) {
    tileWrapper.style.cssText = "grid-auto-rows: calc("+tileWrapper.offsetWidth+"px/4);";
  } else {
    tileWrapper.style.cssText = "grid-auto-rows: calc("+tileWrapper.offsetWidth+"px/2);";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  isElementLoaded('.tile').then(() => {
    setGridAutoRows()
    addEventListener('resize', (event) => { setGridAutoRows() })
    let tiles = document.querySelectorAll('.tile');
    tiles.forEach((item, i) => {
      if (pattern.includes(i+1)) {
        item.classList.add('large-tile'); // Set the larger tiles
      }
      // Mouse enters the tile
      item.addEventListener('mouseenter', () => {
        item.querySelector('img').classList.add('tile-hover-img');
        item.classList.add('tile-hover-color');
        item.querySelector('svg').classList.add('arrow-move');
        item.querySelector('.tile-info').classList.add('tile-info-show');
        item.querySelector('.tile-info').style.color = textColours[i];
        item.querySelector('.tile-link svg').setAttribute('fill', textColours[i]);
        item.querySelector('.tile-info').style.color = textColours[i];
        item.querySelector('.tile-color-overlay').style.cssText = "background-color: "+backgroundColors[i]+"; opacity: 0.6;";
      })
    })
    // Mouse leaves the tile
    tiles.forEach((item, i) => {
      item.addEventListener('mouseleave', () => {
        item.querySelector('img').classList.remove('tile-hover-img');
        item.classList.remove('tile-hover-color');
        item.querySelector('svg').classList.remove('arrow-move');
        item.querySelector('.tile-info').classList.remove('tile-info-show');
        item.querySelector('.tile-color-overlay').style.cssText = "background-color: none; opacity: 0;";
      })
    })
  });
});
