'use client';
import { useEffect } from 'react';

export default function MarkdownCopyListener() {
  useEffect(() => {
    const copyBtns = document.querySelectorAll('button.copy-code-btn');
    copyBtns.forEach((btn) => {
      (btn as HTMLButtonElement).addEventListener('click', () => {
        const codeBlockContent = btn.parentElement?.nextElementSibling?.textContent;
        if (codeBlockContent) {
          navigator.clipboard.writeText(codeBlockContent).then(() => {
            btn.textContent = 'Copied';
            setTimeout(() => {
              btn.textContent = 'Copy';
            }, 2000);
          });
        }
      });
    });

    return () => {
      copyBtns.forEach((btn) => {
        (btn as HTMLButtonElement).removeEventListener('click', () => {});
      });
    };
  }, []);

  return null;
}
