import * as Styles from './index.css';

type Props = {
  text1: string;
  text2: string;
  text3: string;
};

const SiteTitle = ({
  text1 = 'HOSONO',
  text2 = 'KOTARO',
  text3 = 'Tech Blog',
}: Partial<Props>) => {
  return (
    <h1 className={Styles.baseWrapper}>
      <span className={Styles.base}>{text1}</span>
      <span className={Styles.base}>{text2}</span>
      <span className={Styles.base}>{text3}</span>
    </h1>
  );
};

export default SiteTitle;
