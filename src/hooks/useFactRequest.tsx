import { useHistoricalFactStore } from '../store/useHistoricalFactStore';
import { useErrorResponseStore } from '../store/useErrorResponseStore';
import { validateYearEntered } from '../validators/YearEnteredValidator';
import getHistoricalFactService from '../services/getHistoricalFactService';

interface IProps {
  yearEntered: string;
  setYearEntered: (yearEntered: React.SetStateAction<string>) => void;
}

interface IHandleSearchForKeyProps extends IProps {
  event: React.KeyboardEvent<HTMLInputElement>;
}

export default function useFactRequest() {
  const setHistoricalFact = useHistoricalFactStore(
    (state) => state.setHistoricalFact
  );
  const setIsError = useErrorResponseStore((state) => state.setIsError);
  const urlAPI = import.meta.env.VITE_URL_API as string;

  async function executeSearchHistoricalFact({
    yearEntered,
    setYearEntered,
  }: IProps) {
    const isValid = validateYearEntered(yearEntered);

    if (isValid) {
      const fact = await getHistoricalFactService(urlAPI, Number(yearEntered));
      setHistoricalFact(fact);
      setIsError(false);
    } else {
      setIsError(true);
    }

    setYearEntered('');
  }

  function handleSearchForClick({ yearEntered, setYearEntered }: IProps) {
    if (yearEntered !== '') {
      executeSearchHistoricalFact({ yearEntered, setYearEntered });
    } else {
      return;
    }
  }

  function handleSearchForKey({
    event,
    yearEntered,
    setYearEntered,
  }: IHandleSearchForKeyProps) {
    if (event.key === 'Enter' && yearEntered !== '') {
      executeSearchHistoricalFact({ yearEntered, setYearEntered });
    } else {
      return;
    }
  }

  return { handleSearchForClick, handleSearchForKey };
}
