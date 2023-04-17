import { useCallback, useMemo, useRef, useState } from "react";

import debounce from "lodash/debounce";

const WAIT_INTERVAL = 500;

export default function useFilterNews(handleCallBack: (val: string) => void) {
  const [keyword, setKeyword] = useState<string>("");
  const txtRef = useRef("");

  const handleSearchNews = useCallback(() => {
    handleCallBack(txtRef.current);
  }, [handleCallBack]);

  const debouncedRefetch = useMemo(() => {
    return debounce(handleSearchNews, WAIT_INTERVAL);
  }, [handleSearchNews]);

  const handleSearchKeywordChange = useCallback(
    (value: string) => {
      setKeyword(value);
      txtRef.current = value || "";
      void debouncedRefetch();
    },
    [debouncedRefetch]
  );

  return { keyword, handleSearchKeywordChange };
}
