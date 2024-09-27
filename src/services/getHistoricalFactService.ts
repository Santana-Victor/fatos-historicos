import { IResponseHistoricalFacts } from '../interfaces/ResponseHistoricalFacts';

export default async function getHistoricalFactService(
  urlAPI: string,
  yearEntered: number
) {
  const fact: IResponseHistoricalFacts = await fetch(
    `${urlAPI}/${yearEntered}`
  ).then((response) => response.json());
  return fact;
}
