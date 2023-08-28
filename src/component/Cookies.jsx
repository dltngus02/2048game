import React, { useEffect, useReducer, useCallback, useState } from "react";
import Game from "./Game";
import { save, load } from "react-cookies";
// 데이터를 쿠키에 저장하는 함수
export const saveToCookie = (key, value) => {
  save(key, value);
};

// 쿠키에서 데이터를 읽어오는 함수
export const readFromCookie = (key) => {
  return load(key);
};
