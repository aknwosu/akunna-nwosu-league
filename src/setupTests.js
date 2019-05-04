// import enzyme and enzyme-adapter-react for running test with
// enzyme matchers
// import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
