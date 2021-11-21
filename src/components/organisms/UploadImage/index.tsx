import React, { Dispatch, SetStateAction } from 'react';

import Title from '@/atoms/Title';
import UploadFileList from '@/molecules/UploadFileList';
import UploadSelectFile from '@/molecules/UploadSelectFile';

type ImagePath = {
  fullPath: string;
  fileName: string;
};

interface Props {
  imagePathList: ImagePath[];
  deleteImage: (fileName: string) => void;
  image: File | null;
  callbackSetImage: Dispatch<SetStateAction<File | null>>;
  handleUpload: () => void;
}

const UploadImage: React.FC<Props> = ({
  imagePathList,
  deleteImage,
  image,
  callbackSetImage,
  handleUpload,
}) => {
  return (
    <>
      <Title text="画像" rank="h3" />
      <UploadSelectFile
        image={image}
        callbackSetImage={callbackSetImage}
        handleUpload={handleUpload}
      />
      <UploadFileList imagePathList={imagePathList} deleteImage={deleteImage} />
    </>
  );
};

export default UploadImage;
