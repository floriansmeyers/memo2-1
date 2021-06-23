import React from 'react';
import { CallCenterActionBlock } from '..';
import CallCenterTitleBlock, {
  ICallCenterTitleBlockProps,
} from '../CallCenterTitleBlock/CallCenterTitleBlock';

interface ICallCenterHeaderPartialProps extends ICallCenterTitleBlockProps {
  className: string;
}

const CallCenterHeaderPartial: React.FC<ICallCenterHeaderPartialProps> = ({
  className,
  ...props
}) => (
  <div className={className}>
    <CallCenterTitleBlock {...props} />
    <CallCenterActionBlock />
  </div>
);

export default CallCenterHeaderPartial;
