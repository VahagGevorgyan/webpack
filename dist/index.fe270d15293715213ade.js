/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\n\r\nlet taskInput = document.getElementById(\"new-task\"); //Add a new task.\r\nlet addButton = document.getElementsByTagName(\"button\")[0]; //first button\r\nlet incompleteTaskHolder = document.getElementById(\"incomplete-tasks\"); //ul of #incomplete-tasks\r\n\r\n//New task list item\r\nlet createNewTaskElement = function (taskString) {\r\n  let listItem = document.createElement(\"li\");\r\n\r\n  //input (checkbox)\r\n  let checkBox = document.createElement(\"input\"); //checkbx\r\n  //label\r\n  let label = document.createElement(\"label\"); //label\r\n  //input (text)\r\n  let editInput = document.createElement(\"input\"); //text\r\n  //button.edit\r\n  let editButton = document.createElement(\"button\"); //edit button\r\n\r\n  //button.delete\r\n  let deleteButton = document.createElement(\"button\"); //delete button\r\n\r\n  label.innerText = taskString;\r\n\r\n  //Each elements, needs appending\r\n  checkBox.type = \"checkbox\";\r\n  editInput.type = \"text\";\r\n\r\n  editButton.innerText = \"Edit\"; //innerText encodes special characters, HTML does not.\r\n  editButton.className = \"edit\";\r\n  deleteButton.innerText = \"Delete\";\r\n  deleteButton.className = \"delete\";\r\n\r\n  //and appending.\r\n  listItem.appendChild(checkBox);\r\n  listItem.appendChild(label);\r\n  listItem.appendChild(editInput);\r\n  listItem.appendChild(editButton);\r\n  listItem.appendChild(deleteButton);\r\n  return listItem;\r\n};\r\n\r\nlet addTask = function () {\r\n  //Create a new list item with the text from the #new-task:\r\n  let listItem = createNewTaskElement(taskInput.value);\r\n\r\n  //Append listItem to incompleteTaskHolder\r\n  incompleteTaskHolder.appendChild(listItem);\r\n  bindTaskEvents(listItem, taskCompleted);\r\n\r\n  taskInput.value = \"\";\r\n};\r\n\r\nlet editTask = function () {\r\n  let listItem = this.parentNode;\r\nconsole.log(this.parentNode)\r\n  let editInput = listItem.querySelector(\"input[type=text]\");\r\n  let label = listItem.querySelector(\"label\");\r\n  let containsClass = listItem.classList.contains(\"editMode\");\r\n  //If class of the parent is .editmode\r\n  if (containsClass) {\r\n    //switch to .editmode\r\n    //label becomes the inputs value.\r\n    label.innerText = editInput.value;\r\n  } else {\r\n    editInput.value = label.innerText;\r\n  }\r\n\r\n  //toggle .editmode on the parent.\r\n  listItem.classList.toggle(\"editMode\");\r\n};\r\n\r\n//Delete task.\r\nlet deleteTask = function () {\r\n  let listItem = this.parentNode;\r\n  let ul = listItem.parentNode;\r\n  //Remove the parent list item from the ul.\r\n  ul.removeChild(listItem);\r\n};\r\n\r\n//Mark task completed\r\nlet taskCompleted = function () {\r\n  console.log(\"Complete Task...\");\r\n\r\n  //Append the task list item to the #completed-tasks\r\n  let listItem = this.parentNode;\r\n  completedTasksHolder.appendChild(listItem);\r\n  bindTaskEvents(listItem, taskIncomplete);\r\n};\r\n\r\nlet taskIncomplete = function () {\r\n  console.log(\"Incomplete Task...\");\r\n  //Mark task as incomplete.\r\n  //When the checkbox is unchecked\r\n  //Append the task list item to the #incomplete-tasks.\r\n  let listItem = this.parentNode;\r\n  incompleteTaskHolder.appendChild(listItem);\r\n  bindTaskEvents(listItem, taskCompleted);\r\n};\r\n\r\nlet ajaxRequest = function () {\r\n  console.log(\"AJAX Request\");\r\n};\r\n//Set the click handler to the addTask function.\r\naddButton.onclick = addTask;\r\naddButton.addEventListener(\"click\", addTask);\r\naddButton.addEventListener(\"click\", ajaxRequest);\r\n\r\nlet bindTaskEvents = function (taskListItem, checkBoxEventHandler) {\r\n  console.log(\"bind list item events\");\r\n  //select ListItems children\r\n  let checkBox = taskListItem.querySelector(\"input[type=checkbox]\");\r\n  let editButton = taskListItem.querySelector(\"button.edit\");\r\n  let deleteButton = taskListItem.querySelector(\"button.delete\");\r\n\r\n  //Bind editTask to edit button.\r\n  editButton.onclick = editTask;\r\n  //Bind deleteTask to delete button.\r\n  deleteButton.onclick = deleteTask;\r\n  //Bind taskCompleted to checkBoxEventHandler.\r\n  checkBox.onchange = checkBoxEventHandler;\r\n};\r\n\r\n//cycle over incompleteTaskHolder ul list items\r\n//for each list item\r\nfor (let i = 0; i < incompleteTaskHolder.children.length; i++) {\r\n  //bind events to list items chldren(tasksCompleted)\r\n  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;