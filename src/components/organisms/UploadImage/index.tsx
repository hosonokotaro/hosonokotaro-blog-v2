import { Dispatch, SetStateAction, VFC } from 'react';

import ContentBox from '@/atoms/ContentBox';
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

const UploadImage: VFC<Props> = ({
  imagePathList,
  deleteImage,
  image,
  callbackSetImage,
  handleUpload,
}) => {
  return (
    <ContentBox marginTopSize="40px">
      <Title text="画像" rank="h3" />
      <UploadSelectFile
        image={image}
        callbackSetImage={callbackSetImage}
        handleUpload={handleUpload}
      />
      <UploadFileList imagePathList={imagePathList} deleteImage={deleteImage} />
    </ContentBox>
  );
};

export default UploadImage;
