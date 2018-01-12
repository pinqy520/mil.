import * as sharp from 'sharp'
import { STD_SCREEN_WIDTH, SCREEN_SAVE_PATH, QUESTION_SAVE_PATH, OPTIONS_SAVE_PATH, QUESTION_AREA, OPTIONS_AREA } from './const';

const adb = require('adbkit')
const client = adb.createClient()

export async function fetchScreenShoot() {
  const devices: any[] = await client.listDevices()
  if (devices.length === 1) {
    const device = devices[0]
    const screencap = await client.screencap(device.id)

    console.log('screencap done')
    const pipeline = sharp()
      .resize(STD_SCREEN_WIDTH)

    screencap.pipe(pipeline)

    await pipeline
      .toFile(SCREEN_SAVE_PATH)

    await sharp(SCREEN_SAVE_PATH)
      .extract(QUESTION_AREA)
      .threshold(140)
      .toFile(QUESTION_SAVE_PATH)

    await sharp(SCREEN_SAVE_PATH)
      .extract(OPTIONS_AREA)
      .threshold(140)
      .toFile(OPTIONS_SAVE_PATH)
  }
}