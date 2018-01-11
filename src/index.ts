import * as fs from 'fs-extra'
import { TEMP_DIR } from './const';
import { fetchScreenShoot } from './screenshot';
import { parseQuestionAndOptions } from './ocr';

async function prepare() {
  await fs.ensureDir(TEMP_DIR)
}

async function check() {
  await prepare()
  await fetchScreenShoot()
  const data = await parseQuestionAndOptions()
  console.log(data)
}

check()