import DropdownFull from "./dropdown-full";
import { useEffect, useState } from "react";
import { DropdownOption, Query } from "@/src/config/types";
import { useGetCountriesQuery } from "@/src/redux/slices/api/service-slice";

type Props = {
  error?: boolean | null;
  value?: string | null;
  onSelect?: (selected: DropdownOption) => void;
};

export default function CountrySelect({ value, onSelect, error = true }: Props) {
  const [countryOptions, setCountryOptions] = useState<DropdownOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<DropdownOption | null>(null);

  const [query, setQuery] = useState<Query>({
    page: 1,
    limit: 10,
  });

  const handleCountrySelect = (option: DropdownOption) => {
    setSelectedCountry(option);

    if (onSelect) {
      onSelect(option);
    }
  };

  const {
    data: countryData,
    isFetching: isFetchingCountries,
    isError: isErrorCountries,
    isSuccess: isSuccessCountries,
  } = useGetCountriesQuery(query, { refetchOnMountOrArgChange: true });

  useEffect(() => {
    if (!isErrorCountries && !isFetchingCountries && isSuccessCountries && countryData?.data != null) {
      const countries = countryData.data?.map((item) => ({ id: item.code, value: item.name }));
      setCountryOptions(countries);

      if (onSelect && countries?.length > 0) {
        onSelect(countries[0]);
      }
    }
  }, [isErrorCountries, isSuccessCountries, isFetchingCountries]);

  useEffect(() => {
    if (value) {
      const selected = countryOptions.find((o) => o.id == value);

      if (selected) {
        setSelectedCountry(selected!);
      }
    }
  }, [value]);

  return (
    <>
      <DropdownFull options={countryOptions} onSelect={handleCountrySelect} selected={selectedCountry} error={error} />
    </>
  );
}
