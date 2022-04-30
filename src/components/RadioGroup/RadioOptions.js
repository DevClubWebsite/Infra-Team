import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { StyledRadioGroup } from './RadioOptions.styled';

export default function RadioOptions() {
  const [option, setOption] = useState('startup')
  
  const StyledRadioGroupOption = StyledRadioGroup(RadioGroup.Option);

  return (
    <RadioGroup value={option} onChange={setOption}>
      <StyledRadioGroupOption value="startup">
        {({ checked }) => (
          <span className={checked ? 'bg-blue-200' : ''}>Startup</span>
        )}
      </StyledRadioGroupOption>
      <StyledRadioGroupOption value="business">
        {({ checked }) => (
          <span className={checked ? 'bg-blue-200' : ''}>Business</span>
        )}
      </StyledRadioGroupOption>
      <StyledRadioGroupOption value="enterprise">
        {({ checked }) => (
          <span className={checked ? 'bg-blue-200' : ''}>Enterprise</span>
        )}
      </StyledRadioGroupOption>
    </RadioGroup>
  )
}
