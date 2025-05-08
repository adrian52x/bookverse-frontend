'use client'

import { useEffect } from "react";
import { useCurrentUserQuery } from "../redux/api/apiSlice";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";

export function useAuthInit() {
  const dispatch = useDispatch();
  const { data: user, isSuccess } = useCurrentUserQuery();

  useEffect(() => {
    if (isSuccess && user) {
      dispatch(setUser(user));
    }
  }, [isSuccess, user, dispatch]);
}