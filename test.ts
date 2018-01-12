import * as fs from 'fs-extra'
import { TEMP_DIR } from "./src/const";
import { fetchScreenShoot } from './src/screenshot';
import { parseQuestionAndOptions } from './src/ocr';
import { fetchResultBySearchResults } from './src/answer';

async function prepare() {
  await fs.ensureDir(TEMP_DIR)
}

async function check() {
  await prepare()
  await fetchScreenShoot()
  const data = await parseQuestionAndOptions()
  console.log(data)
  await fetchResultBySearchResults(data.question, data.options)
}

check()