import style from './style.css'
import logo from './assets/webstorm.svg'
import data from './data.json'
import React from 'react'
import ReactDOM from 'react-dom'
import { HelloWord } from './components/HelloWord.jsx'

ReactDOM.render(
  <HelloWord name="React" logo={logo} menu={data.links}/>,
  document.getElementById('app')
)