import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('isomorphic-fetch');
global.fetch = require('jest-fetch-mock');
configure({ adapter: new Adapter() });