/* eslint-disable no-undef */
import { validateFile } from "@/lib/utils";

describe('check File validation', () => {
  it('should return true if File is valid', () => {
    const file = new File(['content'], 'test.txt', { type: 'text/plain' });
    expect(validateFile(file)).toBeTruthy();
  })

  it('should return false if File is invalid', () => {
    const file = {} as File;
    expect(validateFile(file)).toBeFalsy();
  })

  it('should return false if File name is invalid', () => {
    const file = new File(['content'], '', { type: 'text/plain' });
    expect(validateFile(file)).toBeFalsy();
  })

  it('should return false if File size is invalid', () => {
    const file = new File(['content'], 'test.txt', { type: 'text/plain' });
    // force set size property
    Object.defineProperty(file, 'size', {
      value: 0
    })
    expect(validateFile(file)).toBeFalsy();
  })
})
