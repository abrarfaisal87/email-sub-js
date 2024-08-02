const scriptURL = 'https://script.google.com/macros/s/AKfycbxaV5LYcCIUqb93dJ-LZFfg0DVCqddfInCXAnn_0_1uTrjoFPJAJwizfex3Kbq8OheE/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "thank you for subscribing"
      setTimeout(()=>{
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})