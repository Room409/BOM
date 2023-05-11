var cardButtons = document.querySelectorAll('.card-header button');

  cardButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      cardButtons.forEach(function(btn) {
        btn.classList.add('collapsed');
      });

      button.classList.remove('collapsed');
    });
  });