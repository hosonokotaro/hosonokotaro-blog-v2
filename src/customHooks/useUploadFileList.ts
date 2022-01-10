import { useCallback, useEffect, useState } from 'react';

import {
  deleteFile,
  getFileURL,
  getReference,
  getReferenceList,
  uploadFile,
} from '~/services/storage';

type ImagePath = {
  fullPath: string;
  fileName: string;
};

type PostId = string | string[] | undefined;

const useUploadFileList = (postId: PostId) => {
  const [imagePathList, setImagePathList] = useState<ImagePath[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const getReferenceListCallback = useCallback(async () => {
    if (!postId || Array.isArray(postId)) return;

    await getReferenceList(getReference(`${postId}`)).then(({ items }) => {
      const tempImagePathList: ImagePath[] = [];

      items.map((referense) => {
        getFileURL(referense).then((fullPath) => {
          tempImagePathList.push({ fullPath, fileName: referense.name });
        });

        setImagePathList(tempImagePathList);
      });
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
    setImageFile(null);

    await getReferenceListCallback();
  }, [getReferenceListCallback, imageFile, postId]);

  useEffect(() => {
    getReferenceListCallback();
  }, [getReferenceListCallback]);

  return { imagePathList, deleteImage, imageFile, setImageFile, handleUpload };
};

export default useUploadFileList;
