import { ComponentProps, useEffect, useState, VFC } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import InputTextInline from '@/atoms/InputTextInline';
import Spinner from '@/atoms/Spinner';
import LoadingImage from '@/molecules/LoadingImage';
import useCopyClipboard from '~/customHooks/useCopyClipboard';

import { ItemWrapper } from './styledIndex';

type ImagePath = {
  fullPath: string;
  fileName: string;
};

interface Props {
  imagePathList: ImagePath[];
  marginTopSize: ComponentProps<typeof ContentBox>['marginTopSize'];
  deleteImage: (fileName: string) => void;
}

const UploadFileList: VFC<Props> = ({
  imagePathList,
  marginTopSize,
  deleteImage,
}) => {
  const [isShow, setIsShow] = useState(false);

  const { copyClipboard, inputRef } = useCopyClipboard();

  // HACK: imagePathList が取得できているのにも関わらずレンダリングがされないので、仕方なく wait をかけてレンダリングを遅らせている
  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 1000);
  }, []);

  return (
    <div>
      {!isShow && (
        <ContentBox textAlign="center">
          <Spinner />
        </ContentBox>
      )}
      {isShow && (
        <ContentBox isBetween>
          {imagePathList.map((item, index) => {
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
