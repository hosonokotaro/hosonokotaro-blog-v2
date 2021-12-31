import { ComponentProps, Dispatch, SetStateAction, VFC } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import TextBox from '@/atoms/TextBox';
import WrappedImage from '@/atoms/WrappedImage';

type MarginTopSize = ComponentProps<typeof ContentBox>['marginTopSize'];

type Props = {
  image: File | null;
  wrappedMarginTopSize: MarginTopSize;
  marginTopSize: MarginTopSize;
  callbackSetImage: Dispatch<SetStateAction<File | null>>;
  handleUpload: () => void;
};

const UploadSelectFile: VFC<Props> = ({
  image,
  wrappedMarginTopSize,
  marginTopSize,
  callbackSetImage,
  handleUpload,
}) => {
  return (
    <ContentBox marginTopSize={wrappedMarginTopSize}>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files === null) return;
          callbackSetImage(e.target.files[0]);
        }}
      />
      <ContentBox marginTopSize={marginTopSize}>
        {image && <WrappedImage src={window.URL.createObjectURL(image)} />}
        {!image && (
          <TextBox>
            画像を選択してください ※アップロードするとページがリロードされます
          </TextBox>
        )}
      </ContentBox>
      <ContentBox marginTopSize={marginTopSize}>
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
