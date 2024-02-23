export const isValidEmail = (value: string): boolean => {
  const mustBeEmailRegex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:&\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const isEmail = mustBeEmailRegex.test(value)
  const isLessThen60Chars = value.length <= 60
  return isEmail && isLessThen60Chars
}
