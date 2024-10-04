import './App.css';
import SearchYear from './components/SearchYear';
import { useHistoricalFactStore } from './store/useHistoricalFactStore';
import { useErrorResponseStore } from './store/useErrorResponseStore';
import { useIsLoadingStore } from './store/useIsLoadingStore';
import Loading from './components/Loading';

export default function App() {
  const historicalFact = useHistoricalFactStore(
    (state) => state.historicalFact
  );
  const isError = useErrorResponseStore((state) => state.isError);
  const isLoading = useIsLoadingStore((state) => state.isLoading);

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
      </div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p className={'error'}>O ano informado é inválido</p>
      ) : (
        historicalFact.mensagem !== '' && (
          <p className={'fact'}>{historicalFact.mensagem}.</p>
        )
      )}
    </main>
  );
}
