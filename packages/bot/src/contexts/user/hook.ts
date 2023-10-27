import { useContext } from 'react';
import { Context } from './context';

const useUser = () => useContext(Context);

export { useUser };
