.mix {
  align-items: space-evenly;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.slider input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 300px;
  height: 300px;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  background-color: transparent;
}

.slider input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  animate: 0.2s;
  background: #f09609;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

.slider input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
  margin-top: -4px;
}