import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import _ from 'lodash';
import { ISchemaField, SCHEMA_FIELDS } from './components/schemaFields';
import SelectableGridItem from './components/selectableGridItem';
interface Props {
  selectedItems: ISchemaField[];
  onItemClick(field: ISchemaField): any;
}

const SchemaFieldGrid: React.FC<Props> = ({ selectedItems, onItemClick }) => {
  const handleItemClick = (value: ISchemaField) => {
    console.log(value);
    onItemClick(value)
  }
  return (
    <EuiFlexGroup wrap gutterSize="s">
      {SCHEMA_FIELDS.map(field => (
        <EuiFlexItem key={`${field.fieldName}`}>
          <SelectableGridItem
            field={field}
            isSelected={_.filter(selectedItems, {fieldName: field.fieldName}).length > 0}
            onItemClick={handleItemClick}
          />
        </EuiFlexItem>
      ))}
    </EuiFlexGroup>
  )
}

export default SchemaFieldGrid;