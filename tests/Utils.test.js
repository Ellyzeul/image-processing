import Utils from "../src/utils/Utils";
import ImageData from '@canvas/image-data'

test('GetPixelAt - Pixel de coordenada (2, 2) em uma imagem 2x2', () => {
  const data = new Uint8ClampedArray([
    122, 122, 122, 255,      116, 116, 116, 255,
    100, 100, 100, 255,      202, 202, 202, 255
  ])
  const imageData = new ImageData(data, 2, 2)
  const result = Utils.getPixelAt(imageData, 1, 1)
  expect(result.red).toBe(202)
  expect(result.green).toBe(202)
  expect(result.blue).toBe(202)
  expect(result.alpha).toBe(255)
})

test('GetPixelAt - Pixel de coordenada (1, 2) em uma imagem 2x3', () => {
  const data = new Uint8ClampedArray([
    122, 122, 122, 255,      116, 116, 116, 255,
    100, 100, 100, 255,      202, 202, 202, 255,
    255, 255, 255, 255,      10, 10, 10, 255
  ])
  const imageData = new ImageData(data, 2, 3)
  const result = Utils.getPixelAt(imageData, 0, 1)
  expect(result.red).toBe(100)
  expect(result.green).toBe(100)
  expect(result.blue).toBe(100)
  expect(result.alpha).toBe(255)
})

test('SetPixelAt - Pixel de coordenada (1, 2) em uma imagem 2x2', () => {
  const data = new Uint8ClampedArray([
    122, 122, 122, 255,      116, 116, 116, 255,
    100, 100, 100, 255,      202, 202, 202, 255
  ])
  const imageData = new ImageData(data, 2, 2)
  Utils.setPixelAt(imageData, 0, 1, {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 122
  })
  const result = Utils.getPixelAt(imageData, 0, 1)
  expect(result.red).toBe(0)
  expect(result.green).toBe(0)
  expect(result.blue).toBe(0)
  expect(result.alpha).toBe(122)
})

test('SetPixelAt - Pixel de coordenada (2, 3) em uma imagem 2x3', () => {
  const data = new Uint8ClampedArray([
    122, 122, 122, 255,      116, 116, 116, 255,
    100, 100, 100, 255,      202, 202, 202, 255,
    255, 255, 255, 255,      10, 10, 10, 255
  ])
  const imageData = new ImageData(data, 2, 3)
  Utils.setPixelAt(imageData, 1, 2, {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 122
  })
  const result = Utils.getPixelAt(imageData, 1, 2)
  expect(result.red).toBe(0)
  expect(result.green).toBe(0)
  expect(result.blue).toBe(0)
  expect(result.alpha).toBe(122)
})
