export interface IThrottleFunc<F extends TAnyFunc> {
  (this: ThisParameterType<F>, ...args: Parameters<F>): void
}

export interface IDebounceFunc<F extends TAnyFunc> {
  (this: ThisParameterType<F>, ...args: Parameters<F>): void
  cancel: () => void
}
