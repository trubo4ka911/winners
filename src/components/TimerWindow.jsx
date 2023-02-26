import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

const TimerWindow = ({ participantName, participantId, onCancel, onSave }) => {
  const [timerValue, setTimerValue] = useState(0); // состояние для хранения значения таймера
  const [timerRunning, setTimerRunning] = useState(false); // состояние для хранения информации о том, работает ли таймер в данный момент

  // функция для управления таймером
  const handleTimer = () => {
    setTimerValue(prev => prev + 1);
  };

  // функция для старта таймера
  const startTimer = () => {
    setTimerRunning(true);
  };

  // функция для остановки таймера
  const stopTimer = () => {
    setTimerRunning(false);
  };

  // функция для сброса таймера
  const resetTimer = () => {
    setTimerValue(0);
  };

  // эффект для управления таймером в зависимости от состояния
  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(handleTimer, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timerRunning]);

  return (
    <div>
      <h2>Timer for {participantName} ({participantId})</h2>
      <h3>{formatTimerValue(timerValue)}</h3>
      <Button onClick={startTimer} disabled={timerRunning}>
        Start
      </Button>
      <Button onClick={stopTimer} disabled={!timerRunning}>
        Stop
      </Button>
      <Button onClick={resetTimer} disabled={timerRunning}>
        Reset
      </Button>
      <Button onClick={() => onSave(timerValue)} disabled={timerValue === 0}>
        Save
      </Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
};

// функция для форматирования значения таймера в формат "HH:MM:SS"
const formatTimerValue = value => {
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const seconds = value % 60;
  return `${formatValue(hours)}:${formatValue(minutes)}:${formatValue(seconds)}`;
};

// функция для форматирования значения времени в двухзначный формат
const formatValue = value => {
  return value < 10 ? `0${value}` : value;
};

export default TimerWindow;
