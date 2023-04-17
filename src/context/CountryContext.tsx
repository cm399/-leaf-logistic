import {
  ReactNode,
  createContext,
  memo,
  useCallback,
  useContext,
  useState,
} from "react";

type CountryContextType = {
  country: string;
  setCountryData: (country: string) => void;
};
const initialValue = {
  country: "us",
  // eslint-disable-next-line
  setCountryData: (country: string) => {},
};

export const CountryContext = createContext<CountryContextType>(initialValue);

export const CountryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [country, setCountry] = useState<string>("us");
  const setCountryData = useCallback((country: string) => {
    setCountry(country);
  }, []);

  return (
    <CountryContext.Provider
      value={{
        country,
        setCountryData,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const UserProvider = memo(CountryContextProvider);

export const useCountry = () => {
  const CountryCntxt = useContext(CountryContext);
  return CountryCntxt;
};
