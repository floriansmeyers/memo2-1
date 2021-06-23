import React from 'react';
import { Form, Input, Tooltip, message } from 'antd';
import { CopyOutlined, DownloadOutlined } from '@ant-design/icons';
import qr from 'qr-image';
import { useTranslation, StorageUtils } from 'utils';
import { CustomerLocation, Scalars } from 'models/graphql';
import environment from 'environment';

interface IVideoReceptionModalContentProps {
  defaultLanguage?: Scalars['String'];
  locations?: Array<CustomerLocation>;
}

const generateQr = (url: string) => {
  const image = qr.imageSync(url, { type: 'png', margin: 0, size: 4 });
  const blob = new Blob([image], { type: 'image/png' });
  const imageUrl = URL.createObjectURL(blob);

  const pdf = qr.imageSync(url, { type: 'pdf', margin: 0 });
  const pdfBlob = new Blob([pdf], { type: 'application/pdf' });
  const pdfUrl = URL.createObjectURL(pdfBlob);

  return (
    <a role="button" className="qr" download href={pdfUrl}>
      <img src={imageUrl} alt="QR" />
      <DownloadOutlined />
    </a>
  );
};

const selectedCustomerId = StorageUtils.getCustomerId();
const selectedPlatormId = StorageUtils.getPlatformId();

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const baseUrl = `${environment.VIDEO_CALL_URL}/${selectedPlatormId}/${selectedCustomerId}`;

const VideoReceptionModalContent: React.FC<IVideoReceptionModalContentProps> = ({
  defaultLanguage,
  locations,
}) => {
  const translate = useTranslation();

  const copyText = (str: string) => {
    if (!document.getSelection()) {
      return;
    }

    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);

    let selected: Range | undefined;
    const documentSelection = document.getSelection();

    if (documentSelection) {
      selected = documentSelection.rangeCount > 0 ? documentSelection.getRangeAt(0) : undefined;
    }

    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if (selected && documentSelection) {
      documentSelection.removeAllRanges();
      documentSelection.addRange(selected);
    }

    message.info(translate('info.urlCopied'));
  };

  const script = `<script>
  (function (d) {
      var memo = d.createElement('script')
      var s = d.scripts[0];
      memo.async = true;
      memo.src = '${environment.VIDEO_CALL_URL}/plugin.js';
      s.parentNode.insertBefore(memo, s);
      memo.onload = function () {
          initMemo("${selectedPlatormId}", "${selectedCustomerId}", "${defaultLanguage}", "${environment.VIDEO_CALL_URL}")
      };
      }(document));
  </script>`;

  return (
    <>
      <h2>{translate('general')}</h2>
      <Form.Item label={translate('form.unique.url')}>
        <Input
          readOnly
          value={`${baseUrl}`}
          addonAfter={
            <Tooltip title={translate('info.copyUrl')}>
              <CopyOutlined style={{ cursor: 'pointer' }} onClick={() => copyText(`${baseUrl}`)} />
            </Tooltip>
          }
        />
      </Form.Item>
      {generateQr(`${baseUrl}`)}

      <Form.Item label={translate('form.plugin.script')} extra={translate('info.paste.in.html')}>
        <Input.TextArea
          style={{ fontFamily: 'monospace' }}
          readOnly
          autoSize
          value={script}
          contentEditable={false}
        />
      </Form.Item>
      <h2>{translate('formTitle.locations')}</h2>
      {locations &&
        locations.map((loc) => (
          <Form.Item {...formItemLayout} key={loc.id} label={loc.title}>
            <Input
              readOnly
              value={`${baseUrl}/${loc.id}`}
              addonAfter={
                <Tooltip title={translate('info.copyUrl')}>
                  <CopyOutlined
                    style={{ cursor: 'pointer' }}
                    onClick={() => copyText(`${baseUrl}/${loc.id}`)}
                  />
                </Tooltip>
              }
            />
          </Form.Item>
        ))}
      {locations && !locations.length && translate('info.noLocations')}
    </>
  );
};

export default VideoReceptionModalContent;
