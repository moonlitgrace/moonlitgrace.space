export function validateFile(file: File) {
  return file instanceof File && file.name !== '' && file.size > 0;
}

