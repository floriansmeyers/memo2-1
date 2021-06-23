import React from 'react';
import { Form } from 'antd';
import { useTranslation } from 'utils';
import ContactAddressInput from './ContactAddressInput/ContactAddressInput';
import './ContactAddressSection.scss';

const ContactAddressSection: React.FC = () => {
  const translate = useTranslation();

  return (
    <div className="contact-address-section">
      <Form.List name="addresses">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey }) => (
              <ContactAddressInput
                key={name}
                id={name}
                fieldKey={fieldKey}
                onRemoveClick={remove}
              />
            ))}
            <span
              role="button"
              tabIndex={0}
              className="link-like-button"
              onClick={() => add()}
            >{`+ ${translate('addAddress')}`}</span>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default ContactAddressSection;
