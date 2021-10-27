import objectFitImages from 'object-fit-images';
import './_common';

objectFitImages();

document.addEventListener('DOMContentLoaded', () => {
  let wrapper = document.querySelectorAll('.js-cut-title');

  wrapper.forEach(function(elem, index) {
    new Dotdotdot( elem, {
      ellipsis: '\u2026 '
    } );
  });


});
