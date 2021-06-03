import { EuiBasicTable, EuiBasicTableColumn, EuiButtonIcon, EuiTextColor } from '@elastic/eui';
import { SCHEMA_FIELDS } from './components/schemaFields';
import { ISelectedFields } from './deduplicationModal';

interface Props {
  onFieldNameClick(e: any): any;
  onFieldRemovalClick(e: any): any;
  selectedFields: ISelectedFields[];
}

const SchemaFieldTable: React.FC<Props> = ({ onFieldNameClick, onFieldRemovalClick, selectedFields }) => {

  const handleClick = (item: any) => {
    onFieldNameClick(item.fieldName);
  }

  const handleRemoveClick = (item: any) => {
    onFieldRemovalClick(item.fieldName);
  }

  const columns: Array<EuiBasicTableColumn<any>> = [
    {
      field: "fieldName",
      name: "Field Name",
      render: (name, item) => (
        <EuiTextColor color={selectedFields.indexOf(item.fieldName) >= 0 ? 'subdued' : 'default'}>
          {selectedFields.indexOf(item.fieldName) >= 0 ? (
            <s>{item.fieldName}</s>
          ) : (
            <span>{item.fieldName}</span>
          )}
        </EuiTextColor>
      ),
    },
    {
      name: '',
      actions: [
        {
          render: (item) => {
            return (
              <>
                {
                  selectedFields.indexOf(item.fieldName) < 0 ? (
                    <EuiButtonIcon iconType="plusInCircleFilled" onClick={() => handleClick(item)} color="primary" />
                  ) : (
                    <EuiButtonIcon iconType="minusInCircle" onClick={() => handleRemoveClick(item)} color="danger" />
                  )
                }
              </>
            );
          },
        },
      ],
    },
  ];

  return <EuiBasicTable compressed items={SCHEMA_FIELDS} columns={columns} />
}

export default SchemaFieldTable;