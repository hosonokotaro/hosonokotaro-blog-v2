import { useCallback, useEffect, useState } from 'react';

import {
  deleteFile,
  getFileURL,
  getReference,
  getReferenceList,
  uploadFile,
} from '~/services/storage';
import type { UploadImage } from '~/useCase/uploadImage';

type PostId = string | string[] | undefined;

const useUploadFileList = (postId: PostId) => {
  const [imagePathList, setImagePathList] = useState<UploadImage[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const getReferenceListCallback = useCallback(async () => {
    if (!postId || Array.isArray(postId)) return;

    const { items } = await getReferenceList(getReference(`${postId}`));
    let tempImagePathList: UploadImage[] = [];

    items.map(async (referense) => {
      const fullPath = await getFileURL(referense);
      tempImagePathList = [
        ...tempImagePathList,
        { fullPath, fileName: referense.name },
      ];
      setImagePathList(tempImagePathList);
    });
  }, [postId]);

  const deleteImage = useCallback(
    async (fileName: string) => {
      if (!postId || Array.isArray(postId)) return;

      if (!confirm(`${fileName}を削除します`)) return;

      await deleteFile(getReference(`${postId}/${fileName}`));
      await getReferenceListCallback();
    },
    [getReferenceListCallback, postId]
  );

  const handleUpload = useCallback(async () => {
    if (!imageFile || !postId || Array.isArray(postId)) return;

    await uploadFile(getReference(`${postId}/${imageFile.name}`), imageFile);
    await getReferenceListCallback();
    setImageFile(null);
  }, [getReferenceListCallback, imageFile, postId]);

  useEffect(() => {
    getReferenceListCallback();
  }, [getReferenceListCallback]);

  return { imagePathList, deleteImage, imageFile, setImageFile, handleUpload };
};

export default useUploadFileList;
