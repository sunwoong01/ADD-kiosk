import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import { message, Steps, List, Divider } from "antd";
import "react-calendar/dist/Calendar.css";
import * as actionTypes from "../../../store/actions";
import "./Product.css";
import TimeList from "./TimeList";
import { useNavigate } from "react-router-dom";

const product = (props) => {
  const cardIndex = props.index;
  const cardData = props.localStorageData;
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [getItem, setGetItem] = useState(0);
  const [buttonSet, setButtonSet] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [toggle, setToggle] = useState(false);
  const [copySave, setCopySave] = useState(cardData);

  const payClickSave = () => {
    let copy = [];
    copySave.map((item, idx) => {
      if (buttonSet[idx] === 0) {
        copy.push(item);
      } else {
        copy.push(1);
      }
    });
    // console.log("copy", copy);
    setCopySave((copySave) => [...copy]);
  };
  console.log("copySave", copySave);
  const timeList = [1];
  // const [timeList2, setTimeList] = useState([]);

  // For dynamic images
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const buttonDisable = (idx) => {
    buttonSet.map((item, i) => {
      if (idx === i) {
        let copy = [...buttonSet];
        if (item === 0) {
          copy[idx] = 1;
        } else {
          copy[idx] = 0;
        }
        setButtonSet(copy);
      }
    });
  };

  const prev = () => {
    setCurrent(current - 1);
    setButtonSet([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  };

  const images = require.context("../../../assets/image", true);
  // console.log(images);
  const timeTableMaker = () => {
    console.log("클릭");
  };

  const onClickDay = (value) => {
    // alert(`Clicked day: ${value}`);
    console.log("day 클릭");
    timeTableMaker();
    datePick();
  };

  const onClickTime = () => {
    console.log("====================================");
    console.log("5,000");
    console.log("====================================");
    // setGetItem(idx);
  };

  const datePick = () => {
    let nowDay = new Date();
    nowDay.setDate(nowDay.getDate() + 7);
    // console.log(nowDay);
    return nowDay;
  };

  const payScreen = () => {
    return (
      <div className="text-pay">
        <hr />

        <div>
          날짜 :{" "}
          {`${value.getFullYear()}년 ${
            value.getMonth() + 1
          }월 ${value.getDate()}일`}
          {/* {value.getFullYear()} */}
        </div>
        <div>이용시간 : {timeList[getItem].time}시간</div>
        <div>가격 : {timeList[getItem].price}원</div>
        <br />
      </div>
    );
  };

  const storageMap = () => {};

  console.log("storage", typeof JSON.parse(window.localStorage.getItem(0)));
  const steps = [
    {
      title: "이용권 선택",
      content: (
        <div>
          <hr />
          <Modal.Body className="m-0 p-0 text-primary">
            예약하실 날짜와 시간을 선택해 주세요.
          </Modal.Body>
          <Modal.Body style={{ margin: "auto" }}>
            <Calendar
              calendarType="US"
              onClickDay={() => onClickDay(value)}
              minDate={new Date()}
              maxDate={new Date(datePick())}
              onChange={onChange}
            />
          </Modal.Body>
          <Modal.Body className="m-6">
            <TimeList props={{ buttonDisable, buttonSet, copySave }} />
          </Modal.Body>
        </div>
      ),
    },
    {
      title: "결제",
      content: payScreen(),
    },
  ];
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  // console.log("copySave", copySave);

  useEffect(() => {
    if (copySave.find((e) => e === 1)) {
      localStorage.setItem(cardIndex, JSON.stringify(copySave));
    }
  }, [copySave]);

  return (
    <React.Fragment>
      <Card className="text-center my-3 card" onClick={handleShow}>
        <Card.Img
          variant="top"
          src={`image/office${cardIndex}.jpg`}
          // src={`${props.product.prod_image}`}
          alt={props.product.prod_image}
          style={{ width: "13rem" }}
          className="mx-auto pt-4"
        />
        <Card.Body>
          <Card.Title>{props.product.prod_name}</Card.Title>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="text-center p-5 modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Card.Img
          variant="top"
          src={`image/office${cardIndex}.jpg`}
          // src={`${props.product.prod_image}`}
          style={{ width: "20rem" }}
          className="mx-auto pt-4"
        />
        <Modal.Title className="mx-auto">{props.product.prod_name}</Modal.Title>

        {/* <Modal.Body className="m-0 p-0 text-primary">
          $ {props.product.prod_price}
        </Modal.Body> */}

        {/* <Modal.Body className="m-0 p-0  border-0">{timeSelect}</Modal.Body> */}
        <Modal.Body className="m-0 p-0  border-0">
          {/* <Steps current={current} items={items} /> */}
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current > 0 && (
              <Button
                style={{
                  margin: "0 8px",
                  color: "white",
                }}
                onClick={() => prev()}
              >
                취소
              </Button>
            )}
            {current < steps.length - 1 && (
              <>
                {/* <Button onClick={payClickSave}>저장</Button> */}
                <Button type="primary" onClick={() => next()}>
                  다음
                </Button>
              </>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => {
                  handleClose();
                  payClickSave();
                  setButtonSet([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                  setCurrent(0);
                  setToggle(!toggle);
                }}
              >
                결제하기
              </Button>
            )}
          </div>
        </Modal.Body>

        <Modal.Body className="mt-3 p-0">{props.product.prod_desc}</Modal.Body>

        {/* <Modal.Footer className="border-0">
          <Button
            variant="secondary mb-3 mt-3"
            onClick={() => {
              props.addToCart(props.product);
              handleClose();
            }}
            block
          >
            결제
          </Button>
        </Modal.Footer> */}
      </Modal>
    </React.Fragment>
  );
};

// STORE
const mapStateToProps = (global_state) => {
  return {
    data: global_state.selectedItems,
  };
};

// ACTION
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) =>
      dispatch({
        type: actionTypes.ADD_TO_CART,
        product: item,
      }),
    increaseQuantity: (prod_obj) =>
      dispatch({
        type: actionTypes.INCREASE_QUANTITY,
        prod_obj: prod_obj,
      }),
    decreaseQuantity: (prod_obj) =>
      dispatch({
        type: actionTypes.DECREASE_QUANTITY,
        prod_obj: prod_obj,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(product);
