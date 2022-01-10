import { useCallback, useRef } from 'react';

// FIXME: 画像の追加削除の直後に target がずれるので修正したい
const useCopyClipboard = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const copyClipboard = useCallback(() => {
    if (!inputRef.current) return;

    inputRef.current.select();

    const clipBoardText = document.getSelection()?.toString() ?? '';
    navigator.clipboard.writeText(clipBoardText);
  }, []);

  return { copyClipboard, inputRef };
};

export default useCopyClipboard;
