// eslint-disable-next-line @typescript-eslint/ban-types
import { getLastIndex } from './get-last-index';

const getLastElement = <T>(array: Array<T>): T => array[getLastIndex(array)];

export { getLastElement };
