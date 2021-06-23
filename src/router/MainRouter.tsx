import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes, IRoutesProps } from 'utils';
import { AuthManager } from 'components';
import Layout from '../Layout';
import Fallback from './Fallback';
import ScrollToTop from './ScrollToTop';

const DashboardPage = lazy(() => import('pages/DashboardPage'));
const InboxPage = lazy(() => import('pages/InboxPage'));
const ReportsPage = lazy(() => import('pages/ReportsPage'));
const CustomerInfoPage = lazy(() => import('pages/CustomerInfoPage'));
const InstructionsPage = lazy(() => import('pages/InstructionsPage'));
const AttachmentsPage = lazy(() => import('pages/AttachmentsPage'));
const AddressBookPage = lazy(() => import('pages/AddressBookPage'));
const InvoicesPage = lazy(() => import('pages/InvoicesPage'));
const ConnectionsPage = lazy(() => import('pages/ConnectionsPage'));
const UsersPage = lazy(() => import('pages/UsersPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const InstructionsDetailsPage = lazy(
  () => import('pages/FixedInstructionsPage/FixedInstructionsDetails'),
);
const NewTempInstruction = lazy(() => import('pages/TempInstructionsPage/NewTempInstruction'));
const ContactPage = lazy(() => import('pages/ContactPage'));

// TODO add role-based access
const routes: IRoutesProps[] = [
  {
    name: 'DashboardPage',
    path: '/',
    Component: DashboardPage,
    exact: true,
  },
  {
    name: 'InboxPage',
    path: '/messages/callcenter',
    Component: InboxPage,
  },
  {
    name: 'SocialMediaInboxPage',
    path: '/messages/socialmedia',
    Component: InboxPage,
  },
  {
    name: 'InvoicesPage',
    path: '/invoices',
    Component: InvoicesPage,
    restricted: true,
  },
  {
    name: 'ReportsPage',
    path: '/reports/:tab?',
    Component: ReportsPage,
    restricted: true,
  },
  {
    name: 'CustomerInfoPage',
    path: '/customer/info',
    Component: CustomerInfoPage,
  },
  {
    name: 'InstructionsPage',
    path: '/customer/instructions/:type',
    Component: InstructionsPage,
    exact: true,
  },
  {
    name: 'InstructionsDetailsPage',
    path: '/customer/instructions/fixed/:instructionId',
    Component: InstructionsDetailsPage,
    exact: true,
  },
  {
    name: 'ModifyTempInstruction',
    path: '/customer/instructions/temporary/:updateType/:instructionId?',
    Component: NewTempInstruction,
    exact: true,
  },
  {
    name: 'AttachmentsPage',
    path: '/customer/attachments',
    Component: AttachmentsPage,
  },
  {
    name: 'AddressBookPage',
    path: '/customer/crmcontacts',
    Component: AddressBookPage,
  },
  {
    name: 'ConnectionsPage',
    path: '/settings/connections/:tab?',
    Component: ConnectionsPage,
    exact: true,
  },
  {
    name: 'UsersPage',
    path: '/settings/users',
    Component: UsersPage,
    exact: true,
  },
  {
    name: 'SearchPage',
    path: '/search',
    Component: SearchPage,
  },
  {
    name: 'ContactPage',
    path: '/contact',
    Component: ContactPage,
    exact: true,
  },
];

const MainRouter: React.FC = () => (
  <Router>
    <AuthManager>
      <ScrollToTop>
        <Layout>
          <Suspense fallback={<Fallback />}>
            <Switch>{renderRoutes(routes)}</Switch>
          </Suspense>
        </Layout>
      </ScrollToTop>
    </AuthManager>
  </Router>
);

export default MainRouter;
