import React, { useRef } from 'react';
import { SearchCustomerFixedInstruction } from 'models/graphql';
import { useHistory } from 'react-router-dom';

interface IProps {
  item: SearchCustomerFixedInstruction;
}

const SearchResultInstruction: React.FC<IProps> = ({ item }) => {
  const history = useHistory();
  const { customerFixedInstruction: instruction } = item;
  const text = useRef<HTMLParagraphElement>(null);

  return (
    <div>
      {instruction && (
        <div
          role="button"
          tabIndex={0}
          className="result-card"
          onClick={() =>
            history.push(`/customer/instructions/fixed/${instruction && instruction.id}`)
          }
        >
          <h2 className="search-card__title">{instruction.name}</h2>
          <p
            ref={text}
            className="search-card__content"
            dangerouslySetInnerHTML={{ __html: instruction.content }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchResultInstruction;
