import Post from 'models/Post'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import './styles/styles.css'
import WebpackLogo from './assets/webpack-logo'

const post = new Post('Halli Hallo Title', WebpackLogo)
console.log(post)
// console.log('JSON:',json)
// console.log('XML', xml)
// console.log('CSV', csv)