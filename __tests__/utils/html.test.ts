import { escapeText, stripHtmlTags } from '@/utils/html';

describe('stripe html tags', () => {
  it('should return plaintext itself', () => {
    expect(stripHtmlTags('plain-text')).toBe('plain-text');
  });

  it('should return content inside', () => {
    expect(stripHtmlTags('<strong>Moonlitgrace</strong>')).toBe('Moonlitgrace');
    expect(stripHtmlTags('<h1><italic>Hello World</italic></h1>')).toBe('Hello World');
  });
});


describe('escape text', () => {
  it('should return lower case of plainText', () => {
    expect(escapeText('plainText')).toBe('plaintext');
  });

  it('should return sluggified version of text', () => {
    expect(escapeText('Hello World')).toBe('hello-world');
    expect(escapeText('Moonlit@grace')).toBe('moonlit-grace');
  });

  it('should handle multiplte special characters', () => {
    expect(escapeText('hello-----world')).toBe('hello-world');
    expect(escapeText('moon&&&lit***grace')).toBe('moon-lit-grace');
  });
});
