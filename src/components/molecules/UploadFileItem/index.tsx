import { ComponentProps, VFC } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import InputTextInline from '@/atoms/InputTextInline';
import LoadingImage from '@/molecules/LoadingImage';
import useUploadFileItem from '~/customHooks/useUploadFileItem';

type ImagePath = {
  fullPath: string;
  fileName: string;
};

interface Props {
  item: ImagePath;
  marginTopSize: ComponentProps<typeof ContentBox>['marginTopSize'];
  deleteImage: (fileName: string) => void;
}

const UploadFileItem: VFC<Props> = ({ item, marginTopSize, deleteImage }) => {
  // NOTE: この DOM 操作は、自身の component 内で完結する
  const { copyClipboard, inputRef } = useUploadFileItem();

  return (
    <div>
      <InputTextInline
        refObject={inputRef}
        defaultValue={`![alt](${item.fullPath})`}
      />
      <ContentBox isBetween>
        <Button
          text="画像パスをクリップボードにコピーする"
          handleClick={copyClipboard}
        />
        <Button
          text="画像を削除する"
          handleClick={() => deleteImage(item.fileName)}
          attention
        />
      </ContentBox>
      <ContentBox marginTopSize={marginTopSize}>
        <LoadingImage src={item.fullPath} />
      </ContentBox>
    </div>
  );
};

export default UploadFileItem;
