import * as sharp from 'sharp'
import * as Tesseract from 'tesseract.js'
import { QUESTION_SAVE_PATH, OPTIONS_SAVE_PATH } from './const';


export async function parseQuestionAndOptions() {
  console.log('parse question')
  const rawQuestion = await ocr(QUESTION_SAVE_PATH)
  console.log('parse rawOptions')
  const rawOptions = await ocr(OPTIONS_SAVE_PATH)
  console.log('parse done')

  const question = rawQuestion.replace('\n', '').replace('\r', '').replace('\t', '').replace(' ', '')
  const options = rawOptions.split('\n').map(o => o.trim()).filter(o => o)
  return { question, options }
}

async function ocr(path: string) {
  const buf = await sharp(path).grayscale().toBuffer()
  const job = Tesseract.recognize(buf)
  const result = await job
  return result.text
}