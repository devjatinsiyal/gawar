import { useState, type FC } from 'react'
import styles from './checkbox-input.module.scss'
import classNames from 'classnames'

interface CheckBoxInputProps {
  onChange: (val: string) => void
  id: string
  label: string
  isValid: boolean
  checked: boolean
  className?: string[]
  sideText?: string
  placeholder?: string
  spacing?: string
  tooltip?: string
  required?: boolean
  errorMessage?: string
}

const { container, label, textInput, inputError } = styles

const CheckBoxInput: FC<CheckBoxInputProps> = ({
  onChange,
  checked,
  className,
  id,
  label: inputLabel,
  placeholder,
  tooltip,
  required,
  isValid,
  errorMessage,
}) => {
  const [isChanged, setIsChanged] = useState<boolean>(false)
  const inputClasses = classNames({
    [inputError]: !isValid && isChanged,
  })

  return (
    <div className={container}>
      <label className={label} htmlFor={id} />
      <input
        // placeholder={placeholder ?? ''}
        id={id}
        className={`${className ? className.join(' ') : textInput} ${inputClasses}`}
        onChange={e => {
          if (!isChanged) setIsChanged(true)
          onChange(e.currentTarget.value)
        }}
        checked={checked}
        type={'checkbox'}
      />
    </div>
  )
}

export default CheckBoxInput
