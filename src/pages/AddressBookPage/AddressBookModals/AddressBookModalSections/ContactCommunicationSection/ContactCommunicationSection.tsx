import React from 'react';
import { Form } from 'antd';
import { CustomerCrmContactCommunicationInput, User } from 'models/graphql';
import { useTranslation } from 'utils';
import ContactCommunicationInput from './ContactCommunicationInput/ContactCommunicationInput';
import './ContactCommunicationSection.scss';

export interface IContactCommunicationSectionProps {
  initialValues: User & { communications: CustomerCrmContactCommunicationInput[] };
}

const ContactCommunicationSection: React.FC<IContactCommunicationSectionProps> = ({
  initialValues,
}) => {
  const translate = useTranslation();

  return (
    <div className="contact-communication-section">
      <Form.List name="communications">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey }) => (
              <ContactCommunicationInput
                key={name}
                id={name}
                fieldKey={fieldKey}
                onRemoveClick={remove}
                initialValues={initialValues!}
              />
            ))}
            <span
              role="button"
              tabIndex={0}
              className="link-like-button"
              onClick={() => add()}
            >{`+ ${translate('addCommunication')}`}</span>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default ContactCommunicationSection;
