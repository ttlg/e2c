/**
* convert string to RGB Color.
* it use cache to speed up the function
* @param {object} obj could be anything
* @return {string} rgb(r, g, b) format color
*/
const textToColorMemorize = () => {
  const nameToColorCache = {}
  return (obj) => {
    if (!obj) {
      return 'rgb(128,128,128)'
    }
    if (nameToColorCache[obj]) {
      return nameToColorCache[obj]
    }
    const buffer = Buffer.from(obj, 'utf16le')
    const sum = buffer.reduce((p, c) => p + c)
    const rgb = {r: (sum * 3) % 246, g: (sum * 5) % 256, b: (sum * 7) % 246}
    const color = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')'
    nameToColorCache[obj] = color
    return color
  }
}
export const e2c = textToColorMemorize()
module.exports = e2c;

