import fetch from 'node-fetch'


export async function fetchResultBySearchResults(question: string, options: string[]) {
  for (let i = 0; i < options.length; i++) {
    const o = options[i]
    console.log(o, '结果', await fetchSearchResultCount(question + ' ' + o))
  }
}


async function fetchSearchResultCount(text: string) {
  const url = 'http://www.baidu.com/s?wd=' + encodeURIComponent(text)
  const result = await fetch(url).then(res => res.text())
  // console.log(result)
  const reg = /百度为您找到相关结果约(.+)个/
  const matched = result.match(reg)
  if (matched && matched[1]) {
    const count = matched[1].replace(',', '')
    return count
  }
}