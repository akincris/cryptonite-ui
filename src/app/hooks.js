import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
export const useAppTranslation = useTranslation;
