import * as React from 'react';
import { useRef, useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { SearchCustomerCrmContact, CustomerCrmContact } from 'models/graphql';
import { CommunicationStatusIcon } from './CommunicationStatusIcon/CommunicationStatusIcon';
import './SearchResultCrmContact.scss';

interface IProps {
  item: SearchCustomerCrmContact;
}

export const SearchResultCrmContact: React.FC<IProps> = ({ item }) => {
  const { customerCrmContact } = item;
  const {
    firstName,
    lastName,
    functionName,
    communications,
    groups,
    addresses,
  } = customerCrmContact as CustomerCrmContact;
  const [visible, setVisible] = useState<boolean>(false);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const groupRef = useRef<HTMLParagraphElement>(null);
  const positionRef = useRef<HTMLParagraphElement>(null);
  const communicationRef = useRef<HTMLParagraphElement>(null);
  const addressRef = useRef<HTMLParagraphElement>(null);
  const cityRef = useRef<HTMLParagraphElement>(null);

  // TODO: Add modal when it will be done
  // const renderCrmContactModal = () => {
  //   if (visible && customerCrmContact) {
  //     return <CrmContactModal onClose={() => setVisible(false)} customerCrmContact={customerCrmContact} visible={true} />;
  //   }
  // };

  return (
    <div className="crm result-card">
      {/* TODO: Add modal when it will be done */}
      {/* {renderCrmContactModal()} */}
      <div className="main">
        <p ref={nameRef}>
          {firstName} {lastName}
        </p>
        <div className="groups">
          {groups &&
            groups.map((group) => (
              <p ref={groupRef} key={`${group.group.name}-${group.subGroup.name}`}>
                {group.group.name} - {group.subGroup.name}
              </p>
            ))}
        </div>
        <p ref={positionRef}>{functionName}</p>
        <div className="contact">
          {communications &&
            communications.map((communication, idx) => (
              <p
                className="contact__item"
                style={{ display: 'flex' }}
                ref={communicationRef}
                key={communication.value}
              >
                <CommunicationStatusIcon status={communication.forwardStatus} type="forward" />
                <CommunicationStatusIcon
                  status={communication.passThroughStatus}
                  type="passThrough"
                />
                {communication.value}
              </p>
            ))}
        </div>
        <div className="groups">
          {addresses &&
            addresses.map((address) => (
              <div className="address groups" key={address.id}>
                <p>{address.address}</p>
                <p>
                  {address.postalCode} {address.city}
                </p>
              </div>
            ))}
        </div>
      </div>
      <RightOutlined onClick={() => setVisible(true)} />
    </div>
  );
};
