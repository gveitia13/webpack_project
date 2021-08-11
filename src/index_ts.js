import style from './style.css'
import logo from './assets/webstorm.svg'
import grande from './assets/image-grande.png'
import data from './data.json'
import { HelloWord } from './components/HelloWord.ts'

const d = document,
  $app = d.getElementById('app'),
  $h1 = d.createElement('h1'),
  $logo = d.createElement('img'),
  $nav = d.createElement('nav')

let menu = '',
  hello = new HelloWord('TypeScript')
data.links.forEach(el => menu += `<a href="${el[1]}">${el[0]}</a>`)

$h1.textContent = hello.greet()
$logo.src = logo
$logo.classList.add('icon')
$nav.innerHTML = menu
$nav.classList.add('menu')

$app.appendChild($h1)
$app.appendChild($logo)
$app.appendChild($nav)
