document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown-radio');

    dropdowns.forEach(function(dropdown) {
        var label = dropdown.querySelector('.dropdown-radio-label');
        var content = dropdown.querySelector('.dropdown-radio-content');
        var radios = dropdown.querySelectorAll('input[type="radio"]');
        var selectFind = dropdown; // Adjusted to refer to the current dropdown in the loop
        var selectFindArrow = dropdown.querySelector('.select--find-arrow'); // Specific to each dropdown

        label.addEventListener('click', function() {
            // Toggle the display of the dropdown content
            var isDisplayed = content.style.display === "none";
            content.style.display = isDisplayed ? 'flex' : 'none';

            if (isDisplayed) {
                selectFind.classList.add('focused');
                selectFindArrow.classList.add('focused--rotate');
            } else {
                selectFind.classList.remove('focused');
                selectFindArrow.classList.remove('focused--rotate');
            }
        });

        radios.forEach(function(radio) {
            radio.addEventListener('change', function() {
                if (radio.checked) {
                    // Get the text from the associated label
                    var radioLabel = dropdown.querySelector('label[for="' + radio.id + '"]').textContent;

                    // Update the label text
                    label.textContent = radioLabel;

                    content.style.display = 'none'; // Hide the dropdown content once an option is selected
                    selectFind.classList.remove('focused');
                    selectFindArrow.classList.remove('focused--rotate');
                }
            });
        });
    });

    // Optional: Close dropdowns when clicked outside
    window.addEventListener('click', function(event) {
        dropdowns.forEach(function(dropdown) {
            var content = dropdown.querySelector('.dropdown-radio-content');
            if (!dropdown.contains(event.target)) {
                content.style.display = 'none';
                dropdown.classList.remove('focused');
                var arrow = dropdown.querySelector('.select--find-arrow');
                if (arrow) {
                    arrow.classList.remove('focused--rotate');
                }
            }
        });
    });
});
