import * as Styles from './index.css';

// FIXME: 要望として出れば、サイズを指定しても良いかもしれない
const Spinner = () => {
  return (
    <div className={Styles.baseWrapper} role="alert" aria-busy="true">
      <svg className={Styles.base} viewBox="0 0 50 50">
        <circle
          className={Styles.circle}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default Spinner;
