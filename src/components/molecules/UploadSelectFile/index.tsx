import { Dispatch, SetStateAction, VFC } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import TextBox from '@/atoms/TextBox';
import WrappedImage from '@/atoms/WrappedImage';

interface Props {
  image: File | null;
  callbackSetImage: Dispatch<SetStateAction<File | null>>;
  handleUpload: () => void;
}

const UploadSelectFile: VFC<Props> = ({
  image,
  callbackSetImage,
  handleUpload,
}) => {
  return (
    <ContentBox marginTopSize="20px">
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files === null) return;
          callbackSetImage(e.target.files[0]);
        }}
      />
      <ContentBox marginTopSize="10px">
        {image && <WrappedImage src={window.URL.createObjectURL(image)} />}
        {!image && (
          <TextBox>
            画像を選択してください ※アップロードするとページがリロードされます
          </TextBox>
        )}
      </ContentBox>
      <ContentBox marginTopSize="10px">
        <Button
          text="画像をアップロードする"
          handleClick={handleUpload}
          disabled={image ? false : true}
        />
      </ContentBox>
    </ContentBox>
  );
};

export default UploadSelectFile;
