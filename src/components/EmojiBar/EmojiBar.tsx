import { EmojiData, NimblePicker } from 'emoji-mart';
import * as React from 'react';
import data from 'emoji-mart/data/google.json';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../../utils';
import './EmojiBar.scss';
// eslint-disable-next-line import/order
import 'emoji-mart/css/emoji-mart.css';

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inputRef: React.MutableRefObject<any>;
  disabled: boolean;
  onEmojiAdded(emoji: EmojiData): void;
}

export const EmojiBar: React.FC<IProps> = ({ inputRef, disabled, onEmojiAdded }) => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const translate = useTranslation();

  const i18n = {
    search: translate('emojiPicker.search'),
    clear: translate('emojiPicker.clear'),
    notfound: translate('emojiPicker.notfound'),
    skintext: translate('emojiPicker.skintext'),
    categories: {
      search: translate('emojiPicker.categories.search'),
      recent: translate('emojiPicker.categories.recent'),
      smileys: translate('emojiPicker.categories.smileys'),
      people: translate('emojiPicker.categories.people'),
      nature: translate('emojiPicker.categories.nature'),
      foods: translate('emojiPicker.categories.foods'),
      activity: translate('emojiPicker.categories.activity'),
      places: translate('emojiPicker.categories.places'),
      objects: translate('emojiPicker.categories.objects'),
      symbols: translate('emojiPicker.categories.symbols'),
      flags: translate('emojiPicker.categories.flags'),
      custom: translate('emojiPicker.categories.custom'),
    },
    categorieslabel: translate('emojiPicker.categorieslabel'),
    skintones: {
      1: 'Default Skin Tone',
      2: 'Light Skin Tone',
      3: 'Medium-Light Skin Tone',
      4: 'Medium Skin Tone',
      5: 'Medium-Dark Skin Tone',
      6: 'Dark Skin Tone',
    },
  };
  const selectEmoji = (emoji: EmojiData) => {
    onEmojiAdded(emoji);
  };

  const emojiBarRef = useRef<HTMLDivElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      event.stopPropagation();
      if (
        !emojiBarRef.current?.contains(event.target as Node) &&
        !emojiPickerRef.current?.contains(event.target as Node) &&
        !inputRef?.current?.resizableTextArea?.textArea?.contains(event.target)
      ) {
        setShowPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [emojiBarRef]);

  return (
    <>
      <div
        className={showPicker ? 'emoji-picker emoji-picker-active' : 'emoji-picker'}
        ref={emojiPickerRef}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="smile"
          className={
            showPicker
              ? 'svg-inline--fa fa-smile fa-w-16 smile-svg smile-svg-active'
              : 'svg-inline--fa fa-smile fa-w-16 smile-svg'
          }
          onClick={(e) => {
            e.stopPropagation();
            setShowPicker(!showPicker);
          }}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            className="smile-icon"
            fill={disabled ? '#f1ecec' : '#26A65B'}
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
          />
        </svg>
      </div>
      {showPicker && !disabled && (
        <div className="emoji-popoup" ref={emojiBarRef}>
          {/* @ts-ignore */}
          <NimblePicker set="facebook" i18n={i18n} data={data} onSelect={selectEmoji} />
        </div>
      )}
    </>
  );
};
