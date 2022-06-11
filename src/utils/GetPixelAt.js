/**
 * @param {ImageData} imgData 
 * @param {number} x 
 * @param {number} y 
 * 
 * @returns {Array} 
 */
const GetPixelAt = (imgData, x, y) => {
  const { width, data } = imgData
  const pixelOffset = ((width * y) + x) * 4
  const pixel = []

  for(let i = 0; i < 4; i++) pixel[i] = data[pixelOffset + i]

  return pixel
}

export default GetPixelAt
