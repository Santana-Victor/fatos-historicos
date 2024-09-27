import styles from './SearchYear.module.css';
import { useState } from 'react';
import { useErrorResponseStore } from '../../store/useErrorResponseStore';
import { FaSearch } from 'react-icons/fa';
import useFactRequest from '../../hooks/useFactRequest';

interface IProps {
  type: string;
  id: string;
  placeHolder: string;
}

export default function SearchYear({ type, id, placeHolder }: IProps) {
  const [yearEntered, setYearEntered] = useState('');
  const isError = useErrorResponseStore((state) => state.isError);
  const { handleSearchForClick, handleSearchForKey } = useFactRequest();

  return (
    <div className={isError ? `${styles.input} input_error` : styles.input}>
      <input
        type={type}
        id={id}
        placeholder={placeHolder}
        value={yearEntered}
        onChange={(event) => setYearEntered(event.target.value)}
        onKeyDown={(event) =>
          handleSearchForKey({ event, yearEntered, setYearEntered })
        }
      />
      <button
        onClick={() => handleSearchForClick({ yearEntered, setYearEntered })}
      >
        <FaSearch className={styles.icon} />
      </button>
    </div>
  );
}
