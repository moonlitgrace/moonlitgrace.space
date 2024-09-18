import { arrayBufferToBase64 } from '@/lib/utils';

describe('array buffer to base64', () => {
  it('should convert ArrayBuffer to base64 string', () => {
    // input: ArrayBuffer from a Uint8Array [72, 101, 108, 108, 111] (which represents "Hello")
    const buffer = new Uint8Array([72, 101, 108, 108, 111]).buffer;
    expect(arrayBufferToBase64(buffer)).toBe('SGVsbG8=');
  });
});
