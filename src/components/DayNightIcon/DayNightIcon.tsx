import React from 'react';
import { DayNightCallTypes } from 'models/graphql';
import { Icon } from '../index';

const iconMapper = {
  [DayNightCallTypes.Daylight]: 'sun',
  [DayNightCallTypes.Day]: 'sun',
  [DayNightCallTypes.Night]: 'moon',
};

const DayNightIcon = ({ val }: { val: DayNightCallTypes }) => <Icon name={iconMapper[val]} />;

export default DayNightIcon;
