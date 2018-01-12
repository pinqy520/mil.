import * as sharp from 'sharp'
import { STD_SCREEN_WIDTH, SCREEN_SAVE_PATH, QUESTION_SAVE_PATH, OPTIONS_SAVE_PATH } from './const';

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
      .extract({
        top: 350, left: 50, height: 210, width: 980
      })
      .toFile(QUESTION_SAVE_PATH)

    await sharp(SCREEN_SAVE_PATH)
      .extract({
        top: 535, left: 75, height: 465, width: 930
      })
      .toFile(OPTIONS_SAVE_PATH)
  }
}