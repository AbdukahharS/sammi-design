// JavaScript to toggle dropdown on click
function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById(dropdownId)
  dropdownContent.classList.toggle('show') // Toggle the 'show' class
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (event) {
  var dropdowns = document.getElementsByClassName('dropdown-content')
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i]
    if (
      openDropdown.classList.contains('show') &&
      !event.target.matches('.dropbtn')
    ) {
      openDropdown.classList.remove('show')
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Get the stars container
  const starsContainer = document.querySelector('.stars')

  // Get the initial rating from the data-rating attribute
  const initialRating = parseFloat(starsContainer.getAttribute('data-rating'))

  // Calculate the number of full stars
  const fullStars = Math.floor(initialRating)

  // Calculate the fraction of the last star
  const fraction = initialRating - fullStars

  // Mark full stars as checked
  for (let i = 0; i < fullStars; i++) {
    const star = starsContainer.children[i]
    star.classList.toggle('fa-regular')
    star.classList.toggle('fa-solid')
  }

  // If there is a fraction, partially mark the last star
  if (fraction > 0) {
    const lastStar = starsContainer.children[fullStars]
    lastStar.classList.toggle('fa-star')
    lastStar.classList.toggle('fa-star-half-stroke')
  }
})

function copyText() {
  // Replace this text with the content you want to copy
  const textToCopy = 'https://sammi.ac/course/javascript'

  // Create a temporary textarea element
  const textarea = document.createElement('textarea')
  textarea.value = textToCopy

  // Append the textarea to the document
  document.body.appendChild(textarea)

  // Select the text inside the textarea
  textarea.select()

  // Execute the copy command
  document.execCommand('copy')

  // Remove the temporary textarea
  document.body.removeChild(textarea)

  // Change the button text to "Copied" after clicking
  const icon = document.getElementById('copyIcon')

  icon.classList.toggle('fa-copy')
  icon.classList.toggle('fa-check')

  // Reset the button text after a certain duration (e.g., 2 seconds)
  setTimeout(() => {
    icon.classList.toggle('fa-copy')
    icon.classList.toggle('fa-check')
  }, 2000)
}
