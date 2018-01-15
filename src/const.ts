import * as path from 'path'

export const TEMP_DIR = path.resolve(__dirname, '../.temp/')

export const SCREEN_SAVE_PATH = path.resolve(TEMP_DIR, 'screenshot.png')
export const QUESTION_SAVE_PATH = path.resolve(TEMP_DIR, 'question.png')
export const OPTIONS_SAVE_PATH = path.resolve(TEMP_DIR, 'options.png')

export const SCALE = 0.9

export const STD_SCREEN_WIDTH = Math.round(1080 * SCALE)

// 冲顶大会

export const QUESTION_AREA = {
  top: Math.round(350 * SCALE),
  left: Math.round(50 * SCALE),
  height: Math.round(190 * SCALE),
  width: Math.round(980 * SCALE)
}

export const OPTIONS_AREA = {
  top: Math.round(535 * SCALE),
  left: Math.round(75 * SCALE),
  height: Math.round(450 * SCALE),
  width: Math.round(700 * SCALE),
}

// 芝士超人

// export const QUESTION_AREA = {
//   top: Math.round(330 * SCALE),
//   left: Math.round(50 * SCALE),
//   height: Math.round(190 * SCALE),
//   width: Math.round(980 * SCALE)
// }

// export const OPTIONS_AREA = {
//   top: Math.round(550 * SCALE),
//   left: Math.round(75 * SCALE),
//   height: Math.round(500 * SCALE),
//   width: Math.round(700 * SCALE),
// }