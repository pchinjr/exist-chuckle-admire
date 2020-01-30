// learn more about HTTP functions here: https://arc.codes/primitives/http

let synLive = [
'experience',
'flourish',
'love',
'thrive',
'delight',
'luxuriate',
'prosper',
'relish',
'savor',
'be happy',
'make the most of',
'take pleasure',
]

let synLaugh = [
'chuckle',
'giggle',
'grin',
'howl',
'roar',
'scream',
'shriek',
'snicker',
'snort',
'whoop',
'burst',
'cachinnate',
'chortle',
'convulsed',
'crow',
'fracture',
'guffaw',
'titter',
'break up',
'crack up',
'die laughing',
'roll in the aisles',
'split one\'s sides',
'with sound be in stitches'
]

let synLove = [
'admire',
'care for',
'cherish',
'choose',
'go for',
'prefer',
'prize',
'treasure',
'worship',
'adulate',
'canonize',
'deify',
'esteem',
'exalt',
'fancy',
'glorify',
'idolize',
'venerate',
'be attached to',
'be captivated by',
'be crazy about',
'be enamored of',
'be enchanted by',
'be fascinated with',
'be fond of',
'be in love with',
'delight in',
'dote on',
'fall for',
'gone on',
'have affection for',
'have it bad',
'hold dear',
'hold high',
'long for',
'lose one\'s heart to',
'put on pedestal',
'think the world of',
'thrive with',
'wild for',
]

const randoWord = (wordArr) => {
  return wordArr[Math.floor(Math.random()*wordArr.length)]
}

const randoLive = randoWord(synLive)
const randoLaugh = randoWord(synLaugh)
const randoLove = randoWord(synLove)

exports.handler = async function http (req) {
  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body: `${randoLive}, ${randoLaugh}, ${randoLove}`
  }
}