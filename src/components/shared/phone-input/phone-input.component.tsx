import { type FC } from 'react'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { InfoImage } from '../icon-image/icon-image.component'
import styles from './phone-input.module.scss'

interface PhoneInputComponentProps {
  onChange: (val: string) => void
  value: any
  className?: string[]
  id: string
  label: string
  sideText?: string
  spacing?: string
}

const cellPhoneTooltip =
  'If you already have a Dario account, please enter the phone number you used to register'

const { label, labelContent, tooltipIcon, textInput, sideText } = styles

const PhoneInputComponent: FC<PhoneInputComponentProps> = ({
  onChange,
  value,
  className,
  id,
  label: phoneLabel,
  sideText: phoneSideText,
  spacing,
}) => {
  return (
    <>
      <label className={label} htmlFor={id}>
        <div className={labelContent}>
          {phoneLabel}
          <div
            data-custom-tooltip={cellPhoneTooltip}
            data-custom-tooltip-location='top'
            className={tooltipIcon}>
            <InfoImage />
          </div>
        </div>
      </label>
      <PhoneInput
        defaultCountry='us'
        className={`${className ? className.join(' ') : textInput}`}
        onChange={phone => {
          onChange(phone)
        }}
        value={value}
      />
      {sideText ? <div className={sideText}>{phoneSideText}</div> : null}
      {spacing ? <div style={{ marginBottom: spacing }}></div> : null}
    </>
  )
}

export default PhoneInputComponent
