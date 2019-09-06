import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

test('App renders',()=>{
  const app = rtl.render(<App />);
  // await rtl.wait(() => getByText(/alex morgan/i));
  // app.getByText(/dark mode/i);
  // app.unmount()
})

test('Dark Mode button works',()=>{    
  
  const app = rtl.render(<App />);
  const dark = app.getByText(/dark mode/i);
  rtl.fireEvent.click(dark);
  let body = document.getElementsByTagName('body');
  expect(body[0].classList.contains('dark-mode')).toBe(true);
  // rtl.fireEvent.click(dark);
  // expect(body[0].classList.contains('dark-mode')).toBe(false);

  // app.unmount()
})


// test('Dark Mode button changes class',()=>{    
  
//   const app = rtl.render(<App />);
//   const dark = app.getByText(/dark mode/i);
//   app.unmount()

// })