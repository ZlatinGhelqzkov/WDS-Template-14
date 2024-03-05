function toggleExpand() {
    // Find the button inside the .expand div and toggle a class on it
    var button = document.querySelector('.expand button');
    button.classList.toggle('expanded-button'); // 'expanded-button' is a class you define for styling

    // Find the form with the ID 'active-window' and toggle a class on it
    var form = document.getElementById('active-window');
    form.classList.toggle('expanded-form'); // 'expanded-form' is a class you define for styling

    var lookingForButtons = document.getElementById('looking-for-buttons');
    lookingForButtons.classList.toggle('dissapear');
}