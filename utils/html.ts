export function stripHtmlTags(html: string) {
  return html.replace(/<[^>]*>/g, '');
}

export function escapeText(text: string) {
  return text.toLowerCase().replace(/[^\w]+/g, '-');
}
