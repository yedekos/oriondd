import { promises as fs } from 'fs' // fs'yi import ettik
import { dirname, join } from 'path' // path'i import ettik

// Iconify Tools ve Utils modüllerini import ettik
import { cleanupSVG, importDirectory, isEmptyColor, parseColors, runSVGO } from '@iconify/tools'
import { getIcons, getIconsCSS, stringToIcon } from '@iconify/utils'

// JSON dosyalarını import ediyoruz
import tablerJSON from '@iconify/json/json/tabler.json' // require.resolve yerine import kullandık

const sources = {
  json: [
    tablerJSON // Daha önce require ile yapılan dosya çözümlemesini import ile gerçekleştirdik
  ],
  svg: []
}

// File to save bundle to
const target = join(__dirname, 'generated-icons.css')

;(async function () {
  const dir = dirname(target)

  try {
    await fs.mkdir(dir, { recursive: true })
  } catch (err) {
    console.error('Error creating directory:', err)
  }

  const allIcons = []

  if (sources.json) {
    for (let i = 0; i < sources.json.length; i++) {
      const item = sources.json[i]
      const content = item // JSON içeriği direkt olarak kullanıyoruz

      // Filtreleme işlemi
      if (item.icons?.length) {
        const filteredContent = getIcons(content, item.icons)

        if (!filteredContent) throw new Error(`Cannot find required icons in ${filename}`)

        allIcons.push(filteredContent)
      } else {
        allIcons.push(content) // Tüm ikonları ekliyoruz
      }
    }
  }

  // SVG işlemleri burada yapılabilir. Örnek bırakıyorum
  if (sources.svg) {
    // SVG işlemleri yapılacaksa buraya eklenebilir.
  }

  // CSS içeriğini oluşturuyoruz
  const cssContent = allIcons
    .map(iconSet => getIconsCSS(iconSet, Object.keys(iconSet.icons), { iconSelector: '.{prefix}-{name}' }))
    .join('\n')

  // CSS dosyasına yazıyoruz
  await fs.writeFile(target, cssContent, 'utf8')
  console.log(`Saved CSS to ${target}!`)
})().catch(err => {
  console.error('Error during execution:', err)
})

// Iconları prefix'e göre organize ediyoruz
function organizeIconsList(icons) {
  const sorted = Object.create(null)

  icons.forEach(icon => {
    const item = stringToIcon(icon)

    if (!item) return
    const prefix = item.prefix
    const prefixList = sorted[prefix] ? sorted[prefix] : (sorted[prefix] = [])
    const name = item.name

    if (!prefixList.includes(name)) prefixList.push(name)
  })

  return sorted
}
