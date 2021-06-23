import { ColumnsType } from 'antd/es/table';

export interface IDraftColumnsProps {
  key: string;
  invoiceNumber: string;
  month: string;
  year: number;
  amount: number;
  status: string;
}

export const draftData: IDraftColumnsProps[] = [
  {
    key: '1',
    invoiceNumber: '3min. 16sec',
    month: 'February',
    year: 2018,
    amount: 2045,
    status: 'Online betalen',
  },
  {
    key: '2',
    invoiceNumber: '19502154',
    month: 'January',
    year: 2018,
    amount: 3025,
    status: 'Online betalen',
  },
  {
    key: '3',
    invoiceNumber: '14002154',
    month: 'March',
    year: 2018,
    amount: 5245,
    status: 'Online betalen',
  },
  {
    key: '4',
    invoiceNumber: '18802154',
    month: 'February',
    year: 2019,
    amount: 1955,
    status: 'Betaald',
  },

  {
    key: '5',
    invoiceNumber: '18002154',
    month: 'February',
    year: 2018,
    amount: 2045,
    status: 'Betaald',
  },
  {
    key: '6',
    invoiceNumber: '19502154',
    month: 'January',
    year: 2018,
    amount: 3025,
    status: 'Online betalen',
  },
  {
    key: '7',
    invoiceNumber: '14002154',
    month: 'March',
    year: 2018,
    amount: 5245,
    status: 'Betaald',
  },
  {
    key: '8',
    invoiceNumber: '18802154',
    month: 'February',
    year: 2019,
    amount: 1955,
    status: 'Betaald',
  },
  {
    key: '17',
    invoiceNumber: '14002154',
    month: 'March',
    year: 2018,
    amount: 5245,
    status: 'Betaald',
  },
  {
    key: '11',
    invoiceNumber: '3min. 16sec',
    month: 'February',
    year: 2018,
    amount: 2045,
    status: 'Online betalen',
  },
  {
    key: '22',
    invoiceNumber: '19502154',
    month: 'January',
    year: 2018,
    amount: 3025,
    status: 'Online betalen',
  },
  {
    key: '33',
    invoiceNumber: '14002154',
    month: 'March',
    year: 2018,
    amount: 5245,
    status: 'Online betalen',
  },
  {
    key: '44',
    invoiceNumber: '18802154',
    month: 'February',
    year: 2019,
    amount: 1955,
    status: 'Betaald',
  },

  {
    key: '51',
    invoiceNumber: '18002154',
    month: 'February',
    year: 2018,
    amount: 2045,
    status: 'Betaald',
  },
  {
    key: '61',
    invoiceNumber: '19502154',
    month: 'January',
    year: 2018,
    amount: 3025,
    status: 'Online betalen',
  },
  {
    key: '71',
    invoiceNumber: '14002154',
    month: 'March',
    year: 2018,
    amount: 5245,
    status: 'Betaald',
  },
  {
    key: '81',
    invoiceNumber: '18802154',
    month: 'February',
    year: 2019,
    amount: 1955,
    status: 'Betaald',
  },
  {
    key: '17',
    invoiceNumber: '14002154',
    month: 'March',
    year: 2018,
    amount: 5245,
    status: 'Betaald',
  },
];

export const draftColumns: ColumnsType<IDraftColumnsProps> = [
  {
    title: 'InvoiceNumber',
    dataIndex: 'invoiceNumber',
  },
  {
    title: 'Month',
    dataIndex: 'month',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    sorter: {
      compare: (a: IDraftColumnsProps, b: IDraftColumnsProps) => a.year - b.year,
      multiple: 2,
    },
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    sorter: {
      compare: (a: IDraftColumnsProps, b: IDraftColumnsProps) => a.amount - b.amount,
      multiple: 1,
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];

export interface ITempCommonColumns {
  invoiceNumber: string;
  month: string;
  year: number;
  amount: number;
  status: string;
}

export const mockMessageBodyCardTitle = 'INTERN REPLY';
export const mockMessageBodyCardText = `Curabitur vel enim magna. Cras tristique sapien vitae nisl aliquam, et
porttitor nisi luctus. Sed viverra tincidunt augue, tempus
sollicitudin arcu interdum eu. Vivamus faucibus In luctus bibendum
auctor. Proin ac semper augue, at convallis tellus. Sed elementum enim
ac tellus mollis egestas eget nec nisl. Etiam vitae lacus sit amet
tellus rutrum finibus a sit amet nulla. Mauris elit mi, ultrices quis
odio nec, aliquam cursus lacus.`;
export const mockMessageBodyCardDateTime = '22/11/2020 - 20:44';

export const mockMessagePreviewTitle = 'Memo - Oproep';
export const mockMessagePreviewStatus = 'Open';
export const mockMessagePreviewDay = 'Vandaag';
export const mockMessagePreviewTime = '19:14';
export const mockMessagePreviewTitle2 = 'TELEFOONOPROEP';
export const mockMessagePreviewSubtitle = 'Integer ac euismod';
export const mockMessagePreviewText = `Integer ac euismod tortor, ut consectetur nulla. Nulla dui elit,
viverra in augue sed.`;

export const mockCallCenterHeaderMessages = '156 Berichten, 49 ongelezen';
export const mockCallCenterHeaderSubtitle = 'SMS BERICHT - 2 berichten';

export const mockDashboardNotifications = 'Christel Pelgrims terugbellen';

export const mockLanguage1 = 'NL';
export const mockLanguage2 = 'EN';

export const mockUser1 = 'Mark Peters';
export const mockUser2 = 'Pete Markers';

export const mockDashboardMessage = 'We ondersteunen nu WhatsApp Business!';

export const loremIpsum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
