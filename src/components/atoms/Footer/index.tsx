import * as Styles from './index.css';

type Props = {
  year?: string;
};

const Footer = ({ year = '' }: Props) => {
  return (
    <footer className={Styles.base}>
      <div>{`© ${year} HOSONOKOTARO Tech Blog`}</div>
      <div className={Styles.shareButtonWrapper}>
        <a
          href="https://twitter.com/hosono_fe?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-lang="ja"
          data-dnt="true"
          data-show-count="false"
        >
          @hosono_fe
        </a>
      </div>
    </footer>
  );
};

export default Footer;
