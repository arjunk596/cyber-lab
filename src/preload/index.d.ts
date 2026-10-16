import type { CmdType } from '../main/Process/checkDependency'
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
      process: {
        checkDependency: (cmd: CmdType) => Promise<boolean>
      }
      openURL: (url: string) => Promise<void>
    }
  }
}
