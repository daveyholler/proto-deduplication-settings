import {
  EuiBadge,
  EuiBadgeGroup,
  EuiButton,
  EuiButtonEmpty,
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiPanel,
  EuiSpacer,
  EuiSwitch,
  EuiText,
  EuiTextColor,
  EuiTitle
} from '@elastic/eui';
import { useState } from 'react';
import SchemaFieldTable from './schemaFieldTable';

interface Props {
  domain: string;
  isModalVisible: boolean;
  onModalClose(): any;
}

export interface ISelectedFields {
  [index: number]: String;
}

const DeduplicationModal: React.FC<Props> = ({ domain, isModalVisible, onModalClose }) => {
  const [checked, setChecked] = useState(false);
  const [selectedFields, setSelectedFields] = useState<ISelectedFields[]>([]);
  
  const handleClose = () => {
    onModalClose()
  }

  const onChange = (e: any) => {
    setChecked(e.target.checked);
    if (e) {
      setSelectedFields([])
    }
  }

  const handleFieldNameClick = (fieldName: string) => {
    console.log(fieldName);
    if (selectedFields.indexOf(fieldName) < 0) {
      let fields: ISelectedFields[] = [...selectedFields, fieldName];
      setSelectedFields(fields);
    }
  }

  const handleFieldRemoval = (fieldName: any) => {
    let fields = [...selectedFields];
    fields.splice(selectedFields.indexOf(fieldName), 1);
    setSelectedFields(fields);
  }

  const disabledBody = (
    <div style={{ backgroundColor: "rgba(255,255,255,.9)" }}>
      <EuiEmptyPrompt
        iconType="copy"
        titleSize="xs"
        title={<h4>Duplicate documents are allowed</h4>}
        body={<p>This engine currently allows duplicate documents. To ensure documents are unique, use the toggle above and select the fields you wish to use when generating a unique document hash.</p>}
      />
    </div>
  )

  const enabledBody = (
    <>
      <p>Select the fields that determine the uniqueness of documents. <a href="/#">Learn more about deduplication.</a></p>
      <EuiSpacer />
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiText color="subdued" size="s">
            <SchemaFieldTable
              selectedFields={selectedFields}
              onFieldNameClick={field => handleFieldNameClick(field)}
              onFieldRemovalClick={field => handleFieldRemoval(field)}
            />
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiSpacer size="xs" />
          {selectedFields.length > 0 ? (
            <>
              <EuiText size="xs">
                <p><b>{selectedFields.length} Fields selected</b></p>
              </EuiText>
              <EuiSpacer size="s" />
              <EuiBadgeGroup>
                {selectedFields.map(field => (
                  <EuiBadge
                    key={`key-${field}`}
                    color="default"
                    iconType="cross"
                    iconSide="right"
                    onClick={() => {}}
                    onClickAriaLabel={`Click to remove "${field}" from the list of selected fields. `}
                    iconOnClick={() => handleFieldRemoval(field)}
                    iconOnClickAriaLabel={`Click to remove "${field}" from the list of selected fields. `}
                  >
                    {field}
                  </EuiBadge>
                ))}
              </EuiBadgeGroup>
            </>
          ) : (
            <EuiPanel color="subdued">
              <EuiEmptyPrompt
                iconType="database"
                titleSize="xs"
                title={<h3>Select Schema Fields</h3>}
                body={
                  <EuiText size="s">
                    <p>Select one or more schema fields to be used when determining document uniqueness.</p>
                  </EuiText>
                }
              />
            </EuiPanel>
          )}
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  )

  return (
    <>
      {isModalVisible && (
        <EuiModal onClose={handleClose} style={{width: "60rem"}}>
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
            <EuiSwitch
              label="Allow duplicate documents"
              checked={checked}
              onChange={(e) => onChange(e)}
            />
            <EuiSpacer />
            { checked ? disabledBody : enabledBody}
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
      )}
    </>
  )
}

export default DeduplicationModal;