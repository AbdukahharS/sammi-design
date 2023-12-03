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
