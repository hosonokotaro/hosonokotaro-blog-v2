import { ComponentProps, useEffect, useState, VFC } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import InputTextInline from '@/atoms/InputTextInline';
import Spinner from '@/atoms/Spinner';
import LoadingImage from '@/molecules/LoadingImage';
import useCopyClipboard from '~/customHooks/useCopyClipboard';
import type { UploadImage } from '~/useCase/uploadImage';

import { ItemWrapper } from './styledIndex';

interface Props {
  uploadImageList: UploadImage[];
  marginTopSize: ComponentProps<typeof ContentBox>['marginTopSize'];
  deleteImage: (fileName: string) => void;
}

const UploadFileList: VFC<Props> = ({
  uploadImageList,
  marginTopSize,
  deleteImage,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { copyClipboard, inputRef } = useCopyClipboard();

  useEffect(() => {
    if (!uploadImageList.length) {
      setIsLoaded(false);
      return;
    }

    setIsLoaded(true);
  }, [uploadImageList]);

  return (
    <div>
      {!isLoaded && (
        <ContentBox textAlign="center">
          <Spinner />
        </ContentBox>
      )}
      {isLoaded && (
        <ContentBox isBetween>
          {uploadImageList.map((item, index) => {
            return (
              <ItemWrapper key={index}>
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
              </ItemWrapper>
            );
          })}
        </ContentBox>
      )}
    </div>
  );
};

export default UploadFileList;
