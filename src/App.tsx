import './App.css';
import SearchYear from './components/SearchYear';
import { useHistoricalFactStore } from './store/useHistoricalFactStore';
import { useErrorResponseStore } from './store/useErrorResponseStore';

export default function App() {
  const historicalFact = useHistoricalFactStore(
    (state) => state.historicalFact
  );
  const isError = useErrorResponseStore((state) => state.isError);

  return (
    <main className={'main'}>
      <h1>Fatos Históricos</h1>
      <div className={'container_input'}>
        <label htmlFor="search_year">Pesquise um ano entre 1920 e 2020:</label>
        <SearchYear
          type={'text'}
          id={'search_year'}
          placeHolder={'Exemplo: 2020'}
        />
        {isError && <p className={'error'}>O ano informado é inválido</p>}
      </div>
      {!isError && historicalFact.mensagem !== '' && (
        <p className={'fact'}>{historicalFact.mensagem}.</p>
      )}
    </main>
  );
}
