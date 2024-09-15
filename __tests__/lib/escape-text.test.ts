import { escapeText } from "@/lib/utils"

describe('escape text', () => {
  it('should return lower case of plainText', () => {
    expect(escapeText('plainText')).toBe('plaintext');
  })

  it('should return sluggified version of text', () => {
    expect(escapeText('Hello World')).toBe('hello-world');
    expect(escapeText('Moonlit@grace')).toBe('moonlit-grace');
  })

  it('should handle multiplte special characters', () => {
    expect(escapeText('hello-----world')).toBe('hello-world');
    expect(escapeText('moon&&&lit***grace')).toBe('moon-lit-grace')
  })
})
