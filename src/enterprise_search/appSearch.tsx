import { useState } from 'react'
import { EuiFlexGroup, EuiPageTemplate } from '@elastic/eui'
import DomainsTable from './domainsTable';
import DomainsTableOptionTwo from './domainsTableOptionTwo';

const AppSearch = () => {
  const [tab, setTab] = useState(0);
  const style = {
    minHeight: "100vh"
  };
  
  return (
    <EuiFlexGroup style={style}>
      <EuiPageTemplate
        pageHeader={{
          iconType: 'logoAppSearch',
          pageTitle: 'App Search',
          tabs: [
            { label: 'Option 1', isSelected: tab === 0, onClick: () => setTab(0) },
            { label: 'Option 2', isSelected: tab === 1, onClick: () => setTab(1) },
          ],
        }}
      >
        {tab === 0 && <DomainsTable />}
        {tab === 1 && <DomainsTableOptionTwo/>}
      </EuiPageTemplate>
    </EuiFlexGroup>
  )
}

export default AppSearch;