import { EuiBadge, EuiBasicTable, EuiBasicTableColumn, EuiPanel } from '@elastic/eui';
import { useState } from 'react';
import { ISchemaField } from './components/schemaFields';
import DeduplicationModalOptTwo from './deduplicationModalOptTwo';

export interface Domain {
  domainName: String;
  hashableFields: ISchemaField[];
};

const DomainsTableOptionTwo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeDomain, setActiveDomain] = useState<Domain>({domainName: '', hashableFields: []});

  const handleManageClick = (domain: {domainName: String, hashableFields: ISchemaField[]}) => {
    setActiveDomain(domain);
    setIsModalVisible(true);
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  const items = [
    {domainName: "https://google.com", hashableFields: [{fieldName: 'title'}, {fieldName: 'release_date'}, {fieldName: 'director'}]},
    {domainName: "https://askjeeves.com", hashableFields: [{fieldName: 'title'}]},
    {domainName: "https://altavista.com", hashableFields: []},
    {domainName: "https://excitemail.com", hashableFields: []},
    {domainName: "https://geocities.com", hashableFields: [{fieldName: 'title'}, {fieldName: 'release_date'}]},
  ];

  const columns: Array<EuiBasicTableColumn<any>> = [
    {
      field: 'domainName',
      name: 'Domain',
    },
    {
      field: 'hashableFields',
      name: 'Hashable Fields',
      render: (items: ISchemaField[]) => (
        <>{items.map(item => (
          <EuiBadge key={`${item.fieldName}`} color="hollow">{item.fieldName}</EuiBadge>
        ))}</>
      )
    },
    {
      name: 'Actions',
      actions: [
        {
          name: 'Deduplication',
          description: 'Manage deduplication',
          type: 'icon',
          icon: 'wrench',
          onClick: handleManageClick,
        },
      ],
    },
  ]

  return (
    <>
      <EuiPanel>
        <EuiBasicTable
          columns={columns}
          items={items}
        />
      </EuiPanel>
      {
        isModalVisible && (
          <DeduplicationModalOptTwo
            onModalClose={() => onModalClose()}
            isModalVisible={isModalVisible}
            domain={activeDomain.domainName}
            selectedFields={activeDomain.hashableFields}
          />
        )
      }
    </>
  )
}

export default DomainsTableOptionTwo;