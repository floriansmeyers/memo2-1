import React, { useRef } from 'react';
import { SearchCustomerTemporaryInstruction } from 'models/graphql';
import { useHistory } from 'react-router-dom';

interface IProps {
  item: SearchCustomerTemporaryInstruction;
}

export const SearchResultTemporaryInstruction: React.FC<IProps> = ({ item }) => {
  const { customerTemporaryInstruction: instruction } = item;
  const history = useHistory();
  const text = useRef<HTMLParagraphElement>(null);

  return (
    <div>
      {instruction && (
        <div
          className="result-card"
          role="button"
          tabIndex={0}
          onClick={() =>
            history.push(`/customer/instructions/fixed/${instruction && instruction.id}`)
          }
        >
          <h2 className="search-card__title">{instruction.name}</h2>
          <p
            className="search-card__content"
            ref={text}
            dangerouslySetInnerHTML={{ __html: instruction.content }}
          />
        </div>
      )}
    </div>
  );
};
