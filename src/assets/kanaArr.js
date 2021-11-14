
let aColumn = ['あ', 'い', 'う','え', 'お']

let kaColumn = ['か', 'き', 'く','け', 'こ']
let saColumn = ['さ', 'し', 'す','せ', 'そ']
let taColumn = ['た', 'ち', 'つ', 'て', 'と']
let naColumn = ['な','に','ぬ','ね','の']

let haColumn = ['は', 'ひ', 'ふ','へ', 'ほ']
let maColumn = ['ま','み','む','め','も']
let yaColumn = ['や','ゆ', 'よ']
let raColumn = ['ら','り','る','れ','ろ']
let waColumn = ['わ','を']
let nColumn = ['ん']


let gaColumn = ['が', 'ぎ', 'ぐ','げ', 'ご']
let zaColumn = ['ざ', 'じ', 'ず', 'ぜ', 'ぞ']
let daColumn = ['だ','で','ど'] //needs work

let baColumn = ['ば', 'び', 'ぶ','べ', 'ぼ']
let paColumn = ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ']



let allHiragana = [...aColumn, ...kaColumn, ...saColumn, ...taColumn, ...naColumn, 
    ...haColumn, ...maColumn, ...yaColumn, ...raColumn, ...waColumn, ...nColumn, ...gaColumn, ...zaColumn, ...daColumn, ...baColumn, ...paColumn]

export {aColumn, kaColumn, saColumn, taColumn, naColumn, haColumn, maColumn, yaColumn, raColumn, waColumn, nColumn, gaColumn, zaColumn, daColumn, baColumn, paColumn, allHiragana}