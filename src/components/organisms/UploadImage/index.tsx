import { ComponentProps, Dispatch, SetStateAction, VFC } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Title from '@/atoms/Title';
import UploadFileList from '@/molecules/UploadFileList';
import UploadSelectFile from '@/molecules/UploadSelectFile';

interface Props {
  uploadImageList: ComponentProps<typeof UploadFileList>['uploadImageList'];
  deleteImage: (fileName: string) => void;
  image: File | null;
  callbackSetImage: Dispatch<SetStateAction<File | null>>;
  handleUpload: () => void;
}

const UploadImage: VFC<Props> = ({
  uploadImageList,
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
        wrappedMarginTopSize="20px"
        marginTopSize="10px"
        callbackSetImage={callbackSetImage}
        handleUpload={handleUpload}
      />
      <UploadFileList
        uploadImageList={uploadImageList}
        marginTopSize="20px"
        deleteImage={deleteImage}
      />
    </ContentBox>
  );
};

export default UploadImage;
