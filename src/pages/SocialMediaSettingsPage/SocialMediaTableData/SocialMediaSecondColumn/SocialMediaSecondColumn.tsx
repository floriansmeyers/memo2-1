import React, { SetStateAction, useEffect, useState } from 'react';
import { Checkbox, Input, message, Select } from 'antd';
import { useTranslation } from 'utils';
import { UpdateChannelMutationVariables, useUpdateChannelMutation } from 'models/graphql';
import './SocialMediaSecondColumn.scss';

const { Option } = Select;

interface ISocialMediaSecondColumnProps {
  redirect: boolean | null | undefined;
  id: string;
  redirectDelay: number | undefined | null;
}

enum RedirectUnits {
  Seconds = 'seconds',
  Hours = 'hours',
  Minutes = 'minutes',
  Days = 'days',
}

const getSecondsFromFormattedTime = (formattedTime: { unit: string; time: number }) => {
  const { unit, time } = formattedTime;

  const UNITS_TYPES = {
    minutes: time * 60,
    hours: time * 3600,
    days: time * 86400,
  };

  return UNITS_TYPES[unit as keyof typeof UNITS_TYPES];
};

const getFormattedTime = (seconds: number) => {
  let unit = RedirectUnits.Seconds;
  let time = seconds;

  if (seconds % 60 === 0) {
    unit = RedirectUnits.Minutes;
    time = seconds / 60;
  }

  if (seconds % 3600 === 0) {
    unit = RedirectUnits.Hours;
    time = seconds / 3600;
  }

  if (seconds % 86400 === 0) {
    unit = RedirectUnits.Days;
    time = seconds / 86400;
  }

  return {
    unit,
    time,
  };
};

const renderOptions = [
  {
    value: RedirectUnits.Seconds,
    text: 'seconds',
  },
  {
    value: RedirectUnits.Minutes,
    text: 'minutes',
  },
  {
    value: RedirectUnits.Hours,
    text: 'hours',
  },
  {
    value: RedirectUnits.Days,
    text: 'days',
  },
];

const SocialMediaSecondColumn: React.FC<ISocialMediaSecondColumnProps> = ({
  redirect,
  id,
  redirectDelay,
}) => {
  let unit: SetStateAction<string> = RedirectUnits.Seconds;
  let time = 0;
  const translate = useTranslation();
  const [shouldRedirect, setShouldRedirect] = useState(Boolean(redirect));
  const [updateChannel, { loading: isLoading }] = useUpdateChannelMutation({
    refetchQueries: ['pairedChannels'],
  });

  if (redirectDelay) {
    const formattedTime = getFormattedTime(redirectDelay);
    unit = formattedTime.unit;
    time = formattedTime.time;
  }
  const [redirectTime, setRedirectTime] = useState(time);
  const [redirectUnit, setRedirectUnit] = useState(unit);

  const updateChannelFunc = async () => {
    const variables: UpdateChannelMutationVariables = {
      id,
      input: {
        redirect: shouldRedirect,
        redirectDelay: getSecondsFromFormattedTime({
          unit: redirectUnit,
          time: redirectTime,
        }),
      },
    };

    try {
      const result = await updateChannel({
        variables,
      });

      if (result) {
        if (result.data?.updateChannel.id) {
          message.success('Success');
        }

        if (result.errors) {
          message.error('Error');
        }
      }
    } catch (error) {
      message.error('Error');
    }
  };

  const onChangeHandler = (state: { target: { checked: boolean } }) => {
    const value = state.target.checked;
    setShouldRedirect(value);
  };

  const onRedirectTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      return setRedirectTime(0);
    }

    return setRedirectTime(parseInt(event.target.value, 10));
  };

  const didMountRef = React.useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      updateChannelFunc();
    } else {
      didMountRef.current = true;
    }
  }, [redirectUnit, redirectTime, shouldRedirect]);

  return (
    <div className="second-column">
      <Checkbox value={shouldRedirect} checked={shouldRedirect} onChange={onChangeHandler}>
        {translate('forwardChannel')}
      </Checkbox>
      <Input
        value={redirectTime}
        disabled={!shouldRedirect}
        type="number"
        step={1}
        onChange={onRedirectTimeChange}
      />
      <Select
        disabled={!shouldRedirect}
        onChange={(value) => setRedirectUnit(value)}
        value={translate(redirectUnit)}
      >
        {renderOptions.map((option) => (
          <Option key={option.value} value={option.value}>
            {translate(option.text)}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SocialMediaSecondColumn;
