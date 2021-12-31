import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import {
  deleteFile,
  getFileURL,
  getReference,
  getReferenceList,
  uploadFile,
} from '~/services/storage';

// NOTE: isStorage = false の場合、fullPath は fileName を含んだものを入れることを想定している
type ImagePath = {
  fullPath: string;
  fileName: string;
};

type PostId = string | string[] | undefined;

// FIXME: 時々、ページ遷移後に画像が読み込まれない場合があるのを修正したい
const useUploadFileList = (postId: PostId) => {
  const [imagePathList, setImagePathList] = useState<ImagePath[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // HACK: upload 動作が他のサーバーとの通信のため、page を reload しないといけない
  const router = useRouter();

  const deleteImage = useCallback(
    (fileName: string) => {
      if (!postId || Array.isArray(postId)) return;

      if (!confirm(`${fileName}を削除します`)) return;

      deleteFile(getReference(`${postId}/${fileName}`)).then(() => {
        router.reload();
      });
    },
    [postId, router]
  );

  const handleUpload = useCallback(() => {
    if (!imageFile || !postId || Array.isArray(postId)) return;

    uploadFile(getReference(`${postId}/${imageFile.name}`), imageFile).then(
      () => {
        router.reload();
      }
    );
  }, [imageFile, postId, router]);

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

  useEffect(() => {
    getReferenceListCallback();
  }, [getReferenceListCallback]);

  return { imagePathList, deleteImage, imageFile, setImageFile, handleUpload };
};

export default useUploadFileList;
