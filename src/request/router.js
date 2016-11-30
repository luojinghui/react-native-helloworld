import {createRouter} from '@exponent/ex-navigation';
import TestOne from './TestOne';

const router = createRouter(() => ({
    'TestOne': () => TestOne
}));

export default router;