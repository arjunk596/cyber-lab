/// <reference types="vite/client" />
export { };
declare global {
  interface Window {
    api: {
      winCtrl: {
        minimize: () => void
        maximize: () => void
        close: () => void
      }
    }
  }
}
