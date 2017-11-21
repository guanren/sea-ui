import Button from './desktop/button';
import Carousel from './desktop/carousel';
import Checkbox from './desktop/checkbox';
import Input from './desktop/input';
import Modal from './desktop/modal';
import SeoTable from './desktop/seoTable';

const componentsFlatMap = [{
  name: 'button',
  title: 'Button',
  component: Button,
}, {
  name: 'carousel',
  title: 'Carousel',
  component: Carousel,
}, {
  name: 'checkbox',
  title: 'Checkbox',
  component: Checkbox,
}, {
  name: 'input',
  title: 'Input',
  component: Input,
}, {
  name: 'modal',
  title: 'Modal',
  component: Modal,
}, {
  name: 'seoTable',
  title: 'SeoTable',
  component: SeoTable,
}];

export default componentsFlatMap;
