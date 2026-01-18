'use client'

export default function myImageLoader({ src, width, quality }) {
    if (process.env.NODE_ENV === 'development') {
        return src
    }
    const lastSlashIndex = src.lastIndexOf('/')
    const directory = src.substring(0, lastSlashIndex)
    const fileNameFull = src.substring(lastSlashIndex + 1)
    const fileNameWithoutExt = fileNameFull.replace(/\.[^/.]+$/, "")

    return `${directory}/nextImageExportOptimizer/${fileNameWithoutExt}-opt-${width}.WEBP`
}
