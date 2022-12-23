import React, { useMemo, useState, useEffect, useRef, createRef } from "react";
import { Button } from "react-bootstrap";

export default function TimeList({ props }) {
  const [timeList, setTimeList] = useState([]);
  const disabledList = props.buttonSet;
  const copySave = props.copySave;
  // const cardIndex = props.cardIndex;
  // console.log(disabledList);
  // console.log(timeList);

  // console.log("Time copySave", copySave);
  const START_TIME = 9;
  console.log(timeList.length);
  useEffect(() => {
    for (let i = 0; i < START_TIME + 1; i++) {
      const cellTime = START_TIME * 1 + i;
      const cellStartTimeText = cellTime + ":00";
      const cellEndTimeText = cellTime + 1 + ":00";
      const inputCellText = cellStartTimeText + " ~ " + cellEndTimeText;

      // console.log(i);
      setTimeList((timeList) => {
        return [...timeList, inputCellText];
      });
    }
  }, [copySave]);
  console.log("랜더링 검사");
  const myRef = useRef([]);
  myRef.current = timeList.map((element, i) => myRef.current[i] ?? createRef());

  const buttonDisable = (idx) => {
    // console.log("idx", idx);

    // console.log(myRef.current[idx].current.disabled);
    if (myRef.current[idx].current.style.backgroundColor !== "red") {
      myRef.current[idx].current.style.backgroundColor = "red";
    } else {
      myRef.current[idx].current.style.backgroundColor = "#0d6efd";
    }
    // console.log("버튼idx", idx);
    handleDisable(idx);

    // consol.log(ref);
    // ref[idx].current.disabled = 1;
    // e.target.disabled = 1;
    // console.log(timeSelect[idx].props.disabled);
    // console.log(e);
  };

  const handleDisable = (idx) => {
    const { buttonDisable } = props;
    buttonDisable(idx);
  };
  const handleNext = (idx) => {
    const { buttonDisable } = props;
    buttonDisable(idx);
  };

  const timeSelect = timeList.map((item, idx) => {
    return (
      // <div className="button-timepick-padding" key={idx} ref={myRef[idx]}>
      <Button
        key={idx}
        className="button-timepick"
        variant="primary"
        onClick={
          () => {
            buttonDisable(idx);
          }

          // () => buttonDisable(idx)
          // props.addToCart(props.product);
          // onClickTime(idx);

          // handleNext;
        }
        disabled={copySave[idx]}
        ref={myRef.current[idx]}
      >
        {item}
      </Button>
      // </div>
    );
  });
  // console.log("랜더링 검사");

  return (
    <>
      <div>{timeSelect}</div>
    </>
  );
}
