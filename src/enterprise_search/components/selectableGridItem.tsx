import { EuiFlexGroup, EuiFlexItem, EuiIcon, EuiTextColor } from '@elastic/eui';
import { useState } from 'react';
import { CircleIcon } from './circleIcon';


interface Props {
  label: string
}

const SelectableGridItem: React.FC<Props> = ({ label }) => {
  const [isSelected, setIsSelected] = useState(false);
  const toggleSelected = () => {
    setIsSelected(!isSelected)
  }
  const style = {
    minWidth: "15rem",
    backgroundColor: isSelected ? '#0077CC' : '#FAFBFD',
    padding: '.75rem',
    borderRadius: '6px',
    cursor: 'pointer',
  }

  return (
    <div style={style} onClick={toggleSelected}>
      <EuiFlexGroup gutterSize="s">
        <EuiFlexItem grow={false}>
          <EuiIcon type={isSelected ? 'checkInCircleFilled' : CircleIcon} color={isSelected ? 'ghost' : 'default'} />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiTextColor color={isSelected ? 'ghost' : 'default'}>{label}</EuiTextColor>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  )
}

export default SelectableGridItem;