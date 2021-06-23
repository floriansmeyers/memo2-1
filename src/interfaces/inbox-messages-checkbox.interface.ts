import { Dispatch, SetStateAction } from 'react';
import { FilterCb } from '../pages/InboxPage/CallCenterHeader/CheckBoxBlock/CheckBoxBlock';
import { IObjectLiteral } from './object-literal.interface';

export interface IInboxMessagesCheckbox {
  checkByFilter: (filter: FilterCb) => void;
  allChecked: boolean;
  setAllChecked: Dispatch<SetStateAction<boolean>>;
  checkedMessages: IObjectLiteral<boolean>;
  checkMessageFactory: (id: string) => (state: boolean) => void;
}
