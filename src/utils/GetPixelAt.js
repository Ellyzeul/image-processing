/**
 * @param {ImageData} imgData 
 * @param {number} x 
 * @param {number} y 
 * 
 * @returns {{
 *   red: number,
 *   green: number,
 *   blue: number,
 *   alpha: number
 * }} 
 */
const GetPixelAt = (imgData, x, y) => {
  const { width, data } = imgData
  const pixelOffset = ((width * y) + x) * 4
  const pixel = {
    red: data[pixelOffset],
    green: data[pixelOffset + 1],
    blue: data[pixelOffset + 2],
    alpha: data[pixelOffset + 3]
  }

  return pixel
}

export default GetPixelAt
