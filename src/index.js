import { Template } from './templates/templateLogin.js'
;(async function App() {
  const plantilla = await Template()
  const main = document.getElementById('main')
  main.innerHTML = plantilla
})()
