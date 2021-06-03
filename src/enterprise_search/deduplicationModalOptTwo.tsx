import {
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
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
import SchemaFieldGrid from './schemaFieldGrid';


interface Props {
  domain: string;
  isModalVisible: boolean;
  onModalClose(): any;
}


const DeduplicationModalOptTwo: React.FC<Props> = ({ domain, isModalVisible, onModalClose }) => {
  const styles = {
    modalStyle: {
      width: '60rem'
    },
  };
  
  const handleClose = () => {
    onModalClose()
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
          <p>To permit duplicate documents, deselect all schema fields below.</p>
        </EuiText>
        <EuiSpacer />
        <SchemaFieldGrid />
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