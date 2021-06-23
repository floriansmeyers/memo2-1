import * as React from 'react';
import { ChannelType, PairChannelMutationVariables, usePairChannelMutation } from 'models/graphql';
import { useEffect, useState } from 'react';
import { message } from 'antd';
import { ButtonTypes, useTranslation } from 'utils';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'components';
import LinkNewAccountModal from '../../SocialMediaSettingsPage/LinkNewAccountModal';

type TypeFB = { [key: string]: string }[];

const AddChannelItem: React.FC = () => {
  const translate = useTranslation();
  const [pairChannel, { error }] = usePairChannelMutation();
  const [submit, setSubmit] = useState<boolean>(false);
  const [linkNewAccountModalVisible, setLinkNewAccountModalVisible] = useState(false);

  if (error) {
    message.error(translate(error.message));
  }

  const onResponseFacebook = async (response: fb.StatusResponse) => {
    if (response.status !== 'connected') {
      message.error(translate('error.connectingFailed'));
    }
    const { accessToken } = response.authResponse;

    const pages = await new Promise<TypeFB>((resolve) => {
      FB.api(`/me/accounts?access_token=${accessToken}`, (result: { data: TypeFB }) => {
        resolve(result.data);
      });
    });

    for await (const page of pages) {
      const variables: PairChannelMutationVariables = {
        input: {
          type: ChannelType.TextFacebook,
          channelIdentifier: page.name,
          facebook: {
            accessToken,
            pageId: page.id,
          },
        },
      };

      try {
        const result = await pairChannel({ variables });

        if (result?.data) {
          message.success(translate('facebookSuccessfullyAdded'));
        } else {
          message.error(translate('error.unknown'));
        }
      } catch (err) {
        message.error(translate(err.message));
      }
    }
  };

  const startPairChannel = () => {
    FB.login(() => onResponseFacebook, {
      scope: 'pages_messaging,pages_show_list',
      enable_profile_selector: true,
    });
  };

  useEffect(() => {
    if (submit) {
      startPairChannel();
    }
  }, [submit]);

  return (
    <div>
      <LinkNewAccountModal
        setSubmit={setSubmit}
        visible={linkNewAccountModalVisible}
        onCloseModal={() => setLinkNewAccountModalVisible(false)}
      />
      <Button
        icon={<PlusOutlined />}
        text={translate('connectNewAccount')}
        type={ButtonTypes.Blue}
        onClick={() => {
          setLinkNewAccountModalVisible(true);
          setSubmit(false);
        }}
      />
    </div>
  );
};

export default AddChannelItem;
