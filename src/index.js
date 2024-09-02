import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions'; // импортируем все сущности в 1{} и называем все как actions


const store = createStore(reducer);

const { dispatch, subscribe, getState } = store; // вытаскиваем диспатч, субскриб и гетСтэйт из нашего стора

const update = () => {
  document.getElementById('counter').textContent = getState().value; // для обновления счетсика на страннице
}

subscribe(update); // подписываемся на обновление

// const bindActionCreator = (creator, dispatch) => (...args) => { // пример как работает встроенная ф-ция от самого редакса
//   dispatch(creator(...args));
// }

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch); // ф-ция по уменьшению счетчика
// const rndDispatch = bindActionCreators(rnd, dispatch); // ф-ция рандом

document.getElementById('inc').addEventListener('click', inc) // по клику вызываем ф-цию по увеличению счетчика

document.getElementById('dec').addEventListener('click', dec) // по клику вызываем ф-цию по уменьшению счетчика

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10); // по клику создается переменная с рандом значением
  rnd(value);                                  // и вызываем ф-цию рандомного числа
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  </React.StrictMode>
);


