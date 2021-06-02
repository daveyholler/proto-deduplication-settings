import { EuiBasicTable, EuiBasicTableColumn, EuiButtonIcon, EuiTextColor } from '@elastic/eui';
import { ISelectedFields } from './deduplicationModal';

interface Props {
  onFieldNameClick(e: any): any;
  onFieldRemovalClick(e: any): any;
  selectedFields: ISelectedFields[];
}

const SchemaFieldTable: React.FC<Props> = ({ onFieldNameClick, onFieldRemovalClick, selectedFields }) => {
  const items = [
    { fieldName: "title" },
    { fieldName: "url" },
    { fieldName: "description" },
    { fieldName: "release_date" },
    { fieldName: "critic_score" },
    { fieldName: "mppg_rating" },
    { fieldName: "synopsis" },
    { fieldName: "director" },
    { fieldName: "rotten_tomatos_score" },
  ];

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

  return <EuiBasicTable compressed items={items} columns={columns} />
}

export default SchemaFieldTable;