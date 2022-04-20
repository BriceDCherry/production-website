const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)
  const email = formData.get("email")

  console.log(email)
})