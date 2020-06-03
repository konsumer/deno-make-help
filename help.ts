/**
 * Give your makefiles help
 * 
 * document your Makefile targets with `#: Help goes here` and you will get nice help with this:
 * @cat $(MAKEFILE_LIST) | deno run -q https://URL_GOES_HERE/help.ts
 * 
 */

const decoder = new TextDecoder('utf-8')

const regex = /#:\s*(.+)\n(.+):/gm;

const text = decoder.decode(await Deno.readAll(Deno.stdin))

const reset = (str='') => `\u001b[0m${str}`
const cyan = (str='') => `\u001b[36m${str}`
const yellow = (str='') => `\u001b[33m${str}`

let m
while ((m = regex.exec(text)) !== null) {
  if (m.index === regex.lastIndex) {
    regex.lastIndex++;
  }
  console.log(yellow(m[2]), reset('\t- '), cyan( m[1]), reset())
}
