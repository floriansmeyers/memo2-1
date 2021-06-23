import React, { useState, useEffect } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import { Form, Input } from 'antd';
import { FormInstance } from 'antd/lib/form/Form';
import { useTranslation } from 'utils';
import './ColorPicker.scss';

interface IColorPickerProps {
  name: string;
  form?: FormInstance;
}
const ColorPicker: React.FC<IColorPickerProps> = ({ name, form }) => {
  const translate = useTranslation();
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [currentColor, setCurrentColor] = useState('');

  useEffect(() => {
    setCurrentColor(form?.getFieldValue(name));
  }, []);

  const pickColor = ({ hex }: ColorResult) => setCurrentColor(hex);

  const colorHelper = new Option().style;

  const isColor = (checkColor: string) => {
    if (/#([a-fA-F0-9]{3}){1,2}\b/.test(checkColor)) {
      return true;
    }

    colorHelper.color = checkColor.toLowerCase();
    return colorHelper.color === checkColor.toLowerCase();
  };

  useEffect(() => {
    if (form) {
      form?.setFieldsValue({
        [name]: currentColor,
      });
    }
  }, [currentColor]);

  return (
    <>
      <Form.Item
        className="color-picker__input"
        name={name}
        rules={[
          { required: true, message: translate('form.isrequired') },
          {
            validator(_, value, callback) {
              !isColor(value) && callback(translate('form.invalidColor'));
            },
          },
        ]}
      >
        <Input
          addonBefore={
            <span
              style={{ backgroundColor: currentColor }}
              role="button"
              aria-label="trigger"
              id="trigger"
              tabIndex={0}
              className="trigger"
              onClick={() => setIsPickerVisible(!isPickerVisible)}
            />
          }
          type="text"
          value={currentColor}
          onChange={({ target: { value } }) => pickColor({ hex: value } as ColorResult)}
        />
      </Form.Item>

      {isPickerVisible && (
        <div className="popover">
          <div
            role="button"
            aria-label="cover"
            tabIndex={0}
            className="cover"
            onClick={() => setIsPickerVisible(false)}
          />
          <ChromePicker color={currentColor} onChange={pickColor} />
        </div>
      )}
    </>
  );
};

export default ColorPicker;
