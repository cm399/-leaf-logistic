import { Breakpoint, Theme, useMediaQuery } from '@mui/material';

const useGetMediaQueryUp = (key: Breakpoint) => {
  const isSizeUp = useMediaQuery((theme: Theme) => theme.breakpoints.up(key), {
    noSsr: true,
  });

  return isSizeUp;
};
const useGetMediaQueryDown = (key: Breakpoint) => {
  const isSizeDown = useMediaQuery(
    (theme: Theme) => theme.breakpoints.down(key),
    { noSsr: true },
  );

  return isSizeDown;
};

export { useGetMediaQueryUp, useGetMediaQueryDown };
