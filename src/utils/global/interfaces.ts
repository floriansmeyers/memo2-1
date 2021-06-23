import { FormInstance } from 'antd/es/form/Form';
import { CallModel } from 'models/graphql';

export interface ICommonColumns {
  key: string;
}

export interface IRoutesProps {
  name: string;
  path: string;
  icon?: JSX.Element;
  Component: React.FC;
  exact?: boolean;
  restricted?: boolean;
}

export interface IWrapperProps {
  children: React.ReactNode;
}

export interface IMessages {
  status: string;
  icon: JSX.Element;
  qty: number;
}

export interface IReportsPageProps {
  loading: boolean;
  tableData: CallModel[];
}

interface IAddOrEditModalProps {
  form: FormInstance;
}

export interface IAddOrEditModalSections {
  id: string;
  props?: IAddOrEditModalProps;
  Component?: React.FC<IAddOrEditModalProps>;
  Section?: JSX.Element;
}
