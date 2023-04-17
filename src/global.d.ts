declare module '*.jpg' {
  export default '' as string;
}
declare module '*.png' {
  export default '' as string;
}
declare module '*.svg' {
  export default '' as string;
}

interface Window {
  clipboardData: {
    setData: (key: string, text: string) => void;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ReactNativeWebView: any;
}
