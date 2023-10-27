import { useContext } from 'react';
import { Context } from './context';

const useRouter = () => useContext(Context);

export { useRouter };
