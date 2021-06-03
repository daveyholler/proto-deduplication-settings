import {
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiSpacer,
  EuiText,
  EuiTextColor,
  EuiTitle
} from '@elastic/eui';
import _ from 'lodash';
import { useState } from 'react';
import { ISchemaField } from './components/schemaFields';
import SchemaFieldGrid from './schemaFieldGrid';

interface Props {
  domain: String;
  isModalVisible: Boolean;
  selectedFields: ISchemaField[];
  onModalClose(): any;
}


const DeduplicationModalOptTwo: React.FC<Props> = ({ domain, isModalVisible, onModalClose, selectedFields }) => {
  // const filtered = [] as ISchemaField[];
  // for (const field of selectedFields) {
  //   const result = _.filter(SCHEMA_FIELDS, {fieldName: field});
  //   filtered.push(result[0])
  // }
  const [selected, setSelected] = useState<ISchemaField[]>([...selectedFields])
  
  const styles = {
    modalStyle: {
      width: '60rem'
    },
  };
  
  const handleClose = () => {
    onModalClose()
  }

  const handleClick = (field: ISchemaField) => {
    if (_.filter(selected, {fieldName: field.fieldName}).length > 0) {
      let fields = [...selected];
      console.log(fields, _.findIndex(selected, {fieldName: field.fieldName}));
      fields.splice(_.findIndex(selected, {fieldName: field.fieldName}), 1);
      setSelected(fields);
    } else {
      let fields = [...selected, field];
      setSelected(fields);
    }
  }

  const clearFields = () => {
    setSelected([]);
  }

  return (
    <EuiModal onClose={handleClose} style={styles.modalStyle}>
      <EuiModalHeader>
        <EuiFlexGroup direction="column" gutterSize="xs">
          <EuiFlexItem>
            <EuiModalHeaderTitle>
              Deduplication Settings
            </EuiModalHeaderTitle>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiTitle size="xs">
              <h2><EuiTextColor color="subdued">{domain}</EuiTextColor></h2>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiModalHeader>
      <EuiModalBody>
        <EuiText size="s">
          <p>The Web Crawler can automatically skip duplicate documents when crawling your domains. Select the fields that should be used to determine uniqueness. <a href="/#">Learn more about deduplication &rarr;</a></p>
          <p><EuiLink onClick={clearFields}>Deselect all</EuiLink> schema fields below if you would like to allow the creation of duplcate documents.</p>
        </EuiText>
        <EuiSpacer />
        <SchemaFieldGrid selectedItems={selected} onItemClick={handleClick} />
        <EuiSpacer />
      </EuiModalBody>
      <EuiModalFooter>
        <EuiFlexGroup>
          <EuiFlexItem />
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty onClick={handleClose}>Cancel</EuiButtonEmpty>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton onClick={handleClose} fill>Save</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiModalFooter>
    </EuiModal>
  )
}

export default DeduplicationModalOptTwo;