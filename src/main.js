import '../css/style.css'
import '../sass/ejemplo.scss'
import javascriptLogo from '../javascript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './counter.js'
import classes from '../css/module/button.module.css'
import imageStyles from '../css/module/image.module.css'
import { user } from './dt.json'

const modules = import.meta.glob('./modules/*.js')

// con async await
// for(const path in modules){
//   async function fetchModule(){
//     const module = await modules[path]();
//     module.load();
//   }
//   fetchModule();
// }


// a los top-level await
for (const path in modules) {
  const module = await modules[path]()
  module.load()
}

//ejemplo profe
// console.log(modules)
// for (const path in modules) {
//   modules[path]().then((module) => {
//     module.load()
//   })
// }

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <button id="btn" type="button">Click</button>
    <img src="${viteLogo}" id="otro" alt="Vite logo" />
    <pre>${JSON.stringify(user)}</pre>
  </div>
`

setupCounter(document.querySelector('#counter'));

document.getElementById('btn').className = classes.buto;
document.getElementById('otro').className = imageStyles.imag;

