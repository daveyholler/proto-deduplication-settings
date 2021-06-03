import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { SCHEMA_FIELDS } from './components/schemaFields';
import SelectableGridItem from './components/selectableGridItem';


const SchemaFieldGrid = () => {
  return (
    <EuiFlexGroup wrap gutterSize="s">
      {SCHEMA_FIELDS.map(field => (
        <EuiFlexItem key={field.fieldName}>
          <SelectableGridItem label={field.fieldName} />
        </EuiFlexItem>
      ))}
    </EuiFlexGroup>
  )
}

export default SchemaFieldGrid;