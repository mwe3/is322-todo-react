import axios from "axios";
import config from '../../config';

/////////////////CONSTANTS/////////////////////


const GET_ALL_TASKS = "GET_ALL_TASKS";
const POST_TASK = "POST_TASK";
const CHANGE_STATUS = "CHANGE_STATUS";
const DELETE_TASK = "DELETE_TASK";

/////////////////ACTIONS//////////////

const getTasks = (tasks) => ({type: GET_ALL_TASKS, tasks});
const addTask = (task) => ({type: POST_TASK, task});
const changeStatus = (task) => ({type: CHANGE_STATUS, task});
const taskDelete = (slug) => ({type: DELETE_TASK, slug});
