import { stripHtmlTags } from "@/lib/utils"

describe('stripe html tags', () => {
  it('should return plaintext itself', () => {
    expect(stripHtmlTags('plain-text')).toBe('plain-text')
  })

  it('should return content inside', () => {
    expect(stripHtmlTags('<strong>Moonlitgrace</strong>')).toBe('Moonlitgrace')
    expect(stripHtmlTags('<h1><italic>Hello World</italic></h1>')).toBe('Hello World')
  })
})
