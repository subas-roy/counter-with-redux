import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RooteState } from './store';

export const useAppSelector = useSelector.withTypes<RooteState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
