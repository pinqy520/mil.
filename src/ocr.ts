import * as sharp from 'sharp'
import { QUESTION_SAVE_PATH, OPTIONS_SAVE_PATH } from './const'

const tesseract = require('node-tesseract')


export async function parseQuestionAndOptions() {
  console.log('parse question')
  const rawQuestion = await recognize(QUESTION_SAVE_PATH)
  console.log('parse rawOptions')
  const rawOptions = await recognize(OPTIONS_SAVE_PATH)
  console.log('parse done')

  const question = rawQuestion
  const options = rawOptions.split('\n').map(o => o.trim()).filter(o => o)
  return { question, options }
}

// async function ocr(path: string) {
//   const buf = await sharp(path).grayscale().toBuffer()
//   const job = Tesseract.recognize(buf, {
//     lang: 'chi_sim'
//   })
//   job.progress(console.log)
//   const result = await job
//   return result.text
// }

function recognize(path: string) {
  return new Promise<string>((resolve, reject) => {
    tesseract.process(path, { l: 'chi_sim' }, (err: Error, text: string) => {
      if (err) reject(err)
      else resolve(text)
    })
  })
}