// blocks/embed/embed.js
function getEmbedUrl(href) {
  try {
    const url = new URL(href)

    if (url.hostname.includes('youtube') || url.hostname.includes('youtu.be')) {
      const id = url.searchParams.get('v') || url.pathname.split('/').pop()
      return `https://www.youtube.com/embed/${id}`
    }

    if (url.hostname.includes('vimeo')) {
      const id = url.pathname.split('/').pop()
      return `https://player.vimeo.com/video/${id}`
    }

    // Any other URL — use it as-is in the iframe
    return href
  } catch {
    return href
  }
}

export default function decorate(block) {
  const link = block.querySelector('a')
  if (!link) return

  const embedUrl = getEmbedUrl(link.href)
  block.innerHTML = `<iframe src="${embedUrl}"
    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
    style="width:100%;aspect-ratio:16/9;border:0;"></iframe>`
}
