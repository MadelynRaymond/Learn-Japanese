
let aColumn = ['ア', 'イ', 'ウ','エ', 'オ']

let kaColumn = ['カ', 'キ', 'ク','ケ', 'コ']
let saColumn = ['サ', 'シ', 'ス','セ', 'ソ']
let taColumn = ['タ', 'チ', 'ツ', 'テ', 'ト']
let naColumn = ['ナ','ニ','ヌ','ネ','ノ']

let haColumn = ['ハ', 'ヒ', 'フ','ヘ', 'ホ']
let maColumn = ['マ','ミ','ム','メ','モ']
let yaColumn = ['ヤ','ユ', 'ヨ']
let raColumn = ['ラ','リ','ル','レ','ロ']
let waColumn = ['ワ']
let nColumn = ['ん']


let gaColumn = ['ガ', 'ギ', 'グ','ゲ', 'ゴ']
let zaColumn = ['ザ', 'ジ', 'ズ', 'ゼ', 'ゾ']
let daColumn = ['ダ','ヂ'] //needs work

let baColumn = ['バ', 'ビ', 'ブ','ベ', 'ボ']
let paColumn = ['パ', 'ピ', 'プ', 'ペ', 'ポ']



let allKatakana = [...aColumn, ...kaColumn, ...saColumn, ...taColumn, ...naColumn, 
    ...haColumn, ...maColumn, ...yaColumn, ...raColumn, ...waColumn, ...nColumn, ...gaColumn, ...zaColumn, ...daColumn, ...baColumn, ...paColumn]

export {aColumn, kaColumn, saColumn, taColumn, naColumn, haColumn, maColumn, yaColumn, raColumn, waColumn, nColumn, gaColumn, zaColumn, daColumn, baColumn, paColumn, allKatakana}