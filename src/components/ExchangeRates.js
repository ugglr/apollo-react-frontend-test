import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <div>
      {data.rates.map(({ currency, rate }) => {
        return (
          <div key={currency}>
            <p>
              {currency} : {rate}
            </p>
          </div>
        );
      })}
    </div>
  );
}
