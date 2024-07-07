import React from "react";
//import './App.css';
//import {render} from '@testing-library/react';
import ExpenseEntryItem from './second';
import Counter from './third';
import Registration from './fourth';
import './fourth.css';
import UseEffect from './useEffect';

function Add() {
  return (
    <div>
      <center>
      <h1>hello world</h1>
      <h2>welcome to reactjs</h2>
      <ExpenseEntryItem />
      <Counter></Counter>
      <div class='main'>
      
      <fieldset>
      <Registration></Registration>


      </fieldset>
      </div>
      </center>
      <UseEffect></UseEffect>
     
     
    </div>
  );
}

export default Add;

