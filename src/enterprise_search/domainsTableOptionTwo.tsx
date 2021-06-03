import { EuiBasicTable, EuiBasicTableColumn, EuiPanel } from '@elastic/eui';
import { useState } from 'react';
import DeduplicationModalOptTwo from './deduplicationModalOptTwo';


const DomainsTableOptionTwo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeDomain, setActiveDomain] = useState('');

  const handleManageClick = (domain: {domainName: string}) => {
    setActiveDomain(domain.domainName);
    setIsModalVisible(true);
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  const items = [
    {domainName: "https://google.com"},
    {domainName: "https://askjeeves.com"},
    {domainName: "https://altavista.com"},
    {domainName: "https://excitemail.com"},
    {domainName: "https://geocities.com"},
  ];

  const columns: Array<EuiBasicTableColumn<any>> = [
    {
      field: 'domainName',
      name: 'Domain',
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
      {isModalVisible && <DeduplicationModalOptTwo onModalClose={() => onModalClose()} isModalVisible={isModalVisible} domain={activeDomain} />}
    </>
  )
}

export default DomainsTableOptionTwo;