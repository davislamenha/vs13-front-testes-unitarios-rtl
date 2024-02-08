import { createContext, useState } from 'react';

const brewUrl = 'https://api.punkapi.com/v2';

export interface IBrew {
  id: number;
  name: string;
  volume: {
    value: number;
  };
  image_url: string;
}

interface BrewContextType {
  brewData: IBrew[] | null;
  getAllBrews: () => Promise<void>;
}

export const BrewContext = createContext({} as BrewContextType);

export function BrewProvider({ children }: { children: React.ReactNode }) {
  const [brewData, setBrewData] = useState(null);

  async function getAllBrews() {
    try {
      const response = await fetch(`${brewUrl}/beers`);

      if (!response.ok) {
        throw new Error('Os cafés não foram encontrados');
      }

      const data = await response.json();

      setBrewData(data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <BrewContext.Provider value={{ brewData, getAllBrews }}>
      {children}
    </BrewContext.Provider>
  );
}
