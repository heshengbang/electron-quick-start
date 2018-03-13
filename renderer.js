// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// const newWindowBtn = document.getElementById('new-window')

// newWindowBtn.addEventListener('click', (event) => {
//   console.log("fuck you");
// });
console.log("1");
const ipcr = require('electron').ipcRenderer;


const defaultBtn = document.getElementsByClassName("btn-default")[0];
const primary = document.getElementsByClassName("btn-primary")[0];
const success = document.getElementsByClassName("btn-success")[0];
const info = document.getElementsByClassName("btn-info")[0];

const warning = document.getElementsByClassName("btn-warning")[0];

const danger = document.getElementsByClassName("btn-danger")[0];

const link = document.getElementsByClassName("btn-link")[0];

defaultBtn.addEventListener('click', (event) => {
  console.log("默认按钮");
  ipcr.send('event-msg', 'ping');
});

ipcr.on('event-reply', (event, arg) => {
   let message = `message reply:${arg}`;
   document.getElementById('msg-reply').innerHTML = message;
});

primary.addEventListener('click', (event) => {
  console.log("这是一个原始按钮");
});
success.addEventListener('click', (event) => {
  console.log("这是一个成功按钮");
});
info.addEventListener('click', (event) => {
  console.log("这是一个信息按钮");
});
warning.addEventListener('click', (event) => {
  console.log("这是一个警告按钮");
});
danger.addEventListener('click', (event) => {
  console.log("这是一个危险按钮");
});
link.addEventListener('click', (event) => {
  console.log("这是一个链接按钮");
});