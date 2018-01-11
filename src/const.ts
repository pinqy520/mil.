import * as path from 'path'

export const TEMP_DIR = path.resolve(__dirname, '../.temp/')

export const SCREEN_SAVE_PATH = path.resolve(TEMP_DIR, 'screenshot.png')
export const QUESTION_SAVE_PATH = path.resolve(TEMP_DIR, 'question.png')
export const OPTIONS_SAVE_PATH = path.resolve(TEMP_DIR, 'options.png')

export const STD_SCREEN_WIDTH = 1080