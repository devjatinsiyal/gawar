import { useState, type FC } from 'react'
import { InfoImage, ErrorIcon } from '../icon-image/icon-image.component'
import styles from './text-input.module.scss'
import classNames from 'classnames'

interface TextInputProps {
  onChange: (val: string) => void
  value: any
  className?: string[]
  id: string
  label: string
  sideText?: string
  placeholder?: string
  type?: 'text' | 'number' | 'date'
  spacing?: string
  tooltip?: string
  required?: boolean
  isValid: boolean
  errorMessage?: string
}

const {
  label,
  labelContent,
  requiredTextContainer,
  tooltipIcon,
  textInput,
  sideText,
  inputError,
  labelError,
  errorMessageContainer,
} = styles

const TextInput: FC<TextInputProps> = ({
  onChange,
  value,
  className,
  id,
  label: inputLabel,
  sideText: inputSideText,
  placeholder,
  type,
  spacing,
  tooltip,
  required,
  isValid,
  errorMessage,
}) => {
  const [isChanged, setIsChanged] = useState<boolean>(false)
  const labelClasses = classNames({
    [labelError]: !isValid && isChanged,
  })
  const inputClasses = classNames({
    [inputError]: !isValid && isChanged,
  })

  return (
    <>
      <label className={label} htmlFor={id}>
        <div className={labelContent}>
          <span className={labelClasses}>
            {inputLabel}
            {required ? <span className={requiredTextContainer}>*</span> : null}
          </span>
          {tooltip ? (
            <div
              data-custom-tooltip={tooltip}
              data-custom-tooltip-location='top'
              className={tooltipIcon}>
              <InfoImage />
            </div>
          ) : null}
        </div>
      </label>
      <input
        placeholder={placeholder ?? ''}
        id={id}
        className={`${className ? className.join(' ') : textInput} ${inputClasses}`}
        onChange={e => {
          if (!isChanged) setIsChanged(true)
          onChange(e.currentTarget.value)
        }}
        value={value}
        type={type ?? 'text'}
      />
      {!isValid && isChanged && errorMessage ? (
        <div className={`${errorMessageContainer}`}>
          <div>
            <ErrorIcon />
          </div>
          {errorMessage}
        </div>
      ) : null}
      {sideText ? <div className={`${sideText}`}>{inputSideText}</div> : null}
      {spacing ? <div style={{ marginBottom: spacing }}></div> : null}
    </>
  )
}

export default TextInput
