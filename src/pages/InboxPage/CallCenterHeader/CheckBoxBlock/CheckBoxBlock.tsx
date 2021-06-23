import React, { Dispatch, SetStateAction } from 'react';
import { Checkbox, Dropdown, Menu } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import { IObjectLiteral } from '../../../../interfaces/object-literal.interface';
import { MeccaConversationModel, SocialConversationModel } from '../../../../models/graphql';
import './CheckBoxBlock.scss';

export type FilterCb = (message: MeccaConversationModel | SocialConversationModel) => boolean;

interface ICheckBoxBlockProps {
  checked: boolean;
  toggleCheckbox: Dispatch<SetStateAction<boolean>>;
  checkByFilter: (filter: FilterCb) => void;
}

const CheckBoxBlock: React.FC<ICheckBoxBlockProps> = ({
  toggleCheckbox,
  checked,
  checkByFilter,
}) => {
  const menuItems: IObjectLiteral<() => void> = {
    Everything: () => {
      checkByFilter(() => true);
    },
    None: () => {
      checkByFilter(() => false);
    },
    Read: () => {
      checkByFilter((message) => message.read);
    },
    Unread: () => {
      checkByFilter((message) => !message.read);
    },
    Flagged: () => {
      checkByFilter((message) => !!message.flagged);
    },
    Unflagged: () => {
      checkByFilter((message) => !message.flagged);
    },
  };

  const onMenuItemHandler = (info: MenuInfo): void => {
    menuItems[info.key]();
  };

  const menu = (
    <Menu onClick={onMenuItemHandler} className="filter-menu">
      {Object.keys(menuItems).map((item) => (
        <Menu.Item key={item}>{item}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="checkbox-block">
      <Checkbox checked={checked} onChange={() => toggleCheckbox((prev) => !prev)} />
      <Dropdown overlay={menu} trigger={['click']}>
        <CaretDownFilled className="arrow-icon" style={{ color: '#D5D5D5' }} />
      </Dropdown>
    </div>
  );
};

export default CheckBoxBlock;
