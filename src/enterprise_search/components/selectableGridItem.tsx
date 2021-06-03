import { EuiFlexGroup, EuiFlexItem, EuiIcon, EuiTextColor } from '@elastic/eui';
import { CircleIcon } from './circleIcon';
import { ISchemaField } from './schemaFields';


interface Props {
  field: ISchemaField;
  isSelected: Boolean;
  onItemClick(field: ISchemaField): any;
}

const SelectableGridItem: React.FC<Props> = ({ field, isSelected, onItemClick }) => {
  const toggleSelected = (field: ISchemaField) => {
    onItemClick(field)
  }
  const style = {
    minWidth: "15rem",
    backgroundColor: isSelected ? '#E6F9F7' : '#FAFBFD',
    padding: '.75rem',
    borderRadius: '6px',
    cursor: 'pointer',
  }

  return (
    <div style={style} onClick={() => toggleSelected(field)}>
      <EuiFlexGroup gutterSize="s">
        <EuiFlexItem grow={false}>
          <EuiIcon type={isSelected ? 'checkInCircleFilled' : CircleIcon} color={isSelected ? "secondary" : "default"} />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiTextColor color={isSelected ? "secondary" : "default"}>{field.fieldName}</EuiTextColor>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  )
}

export default SelectableGridItem;