import { ComponentProps, ReactNode, useState } from 'react';

import Anchor from '@/atoms/Anchor';
import Icon from '@/atoms/Icon';

type IconProps = ComponentProps<typeof Icon>;

type Props = {
  children: ReactNode;
  linkPath: string;
  icon?: IconProps;
};

const MarkdownLink = ({ children, linkPath, icon }: Props) => {
  const [isExternalLink] = useState(!!linkPath.match(/^(http|https):\/\//));

  return (
    <Anchor linkPath={linkPath} isExternalLink={isExternalLink}>
      {children}
      {isExternalLink && icon && (
        <Icon
          iconName={icon.iconName}
          size={icon.size}
          fillColor="link"
          sideMargin={icon.sideMargin}
        />
      )}
    </Anchor>
  );
};

export default MarkdownLink;
