'use client'

export default function myImageLoader({ src, width, quality }) {
    if (process.env.NODE_ENV === 'development') {
        return src
    }
    return `/nextImageExportOptimizer/${src}?width=${width}&quality=${quality || 75}`
}
