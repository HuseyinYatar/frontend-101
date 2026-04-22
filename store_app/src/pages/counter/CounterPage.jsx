import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "./counterSlice";

export default function CounterPage() {
  const dispacth = useDispatch();
  const value = useSelector((state) => state.counter.value);
  return (
    <div>
      {value}
      <Button variant="outlined" onClick={() => dispacth(increment())}>
        increment
      </Button>
      <Button onClick={() => dispacth(decrement())}>dec</Button>
      <Button onClick={() => dispacth(incrementByValue(3))}>incByVal</Button>
    </div>
  );
}
