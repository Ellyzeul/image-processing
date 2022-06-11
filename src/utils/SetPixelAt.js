/**
 * @param {ImageData} imgData 
 * @param {number} x 
 * @param {number} y 
 * @param {{
 *   red: number,
 *   green: number,
 *   blue: number,
 *   alpha: number
 * }} pixel 
 */
const SetPixelAt = (imgData, x, y, pixel) => {
  const { width, data } = imgData
  const pixelOffset = ((width * y) + x) * 4
  
  data[pixelOffset] = pixel.red
  data[pixelOffset + 1] = pixel.green
  data[pixelOffset + 2] = pixel.blue
  data[pixelOffset + 3] = pixel.alpha
}

export default SetPixelAt
