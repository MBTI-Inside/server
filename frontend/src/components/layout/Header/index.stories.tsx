import { BrowserRouter } from 'react-router-dom';

import Header from './index';

export default {
  title: 'components/layout/Header',
  component: Header
};

const Template = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

export const Primary = Template.bind({});
