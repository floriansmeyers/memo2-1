import React from 'react';
import { Form } from 'antd';
import { useTranslation } from 'utils';
import ContactGroupInput from './ContactGroupInput/ContactGroupInput';
import './ContactGroupSection.scss';

const ContactGroupSection: React.FC = () => {
  const translate = useTranslation();

  return (
    <div className="contact-group-section">
      <Form.List name="groups">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey }) => (
              <ContactGroupInput id={name} fieldKey={fieldKey} key={key} onRemoveClick={remove} />
            ))}
            <span
              role="button"
              tabIndex={0}
              className="link-like-button"
              onClick={() => add()}
            >{`+ ${translate('addGroup')}`}</span>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default ContactGroupSection;
