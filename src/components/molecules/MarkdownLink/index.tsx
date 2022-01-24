import { ComponentProps, ReactNode, VFC } from 'react';

import Anchor from '@/atoms/Anchor';
import Icon from '@/atoms/Icon';

type IconProps = ComponentProps<typeof Icon>;

type Props = {
  children: ReactNode;
  linkPath: string;
  icon?: IconProps;
};

const MarkdownLink: VFC<Props> = ({ children, linkPath, icon }) => {
  const isExternalLink = linkPath.match(/^(http|https):\/\//) ? true : false;

  return (
    <Anchor linkPath={linkPath} isExternalLink>
      {children}
      {isExternalLink && icon && (
        <Icon
          fileName={icon.fileName}
          alt={icon.alt}
          size={icon.size}
          sideMargin={icon.sideMargin}
        />
      )}
    </Anchor>
  );
};

export default MarkdownLink;
