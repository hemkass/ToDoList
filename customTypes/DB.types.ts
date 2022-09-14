export interface Task_TS {
  item: string;
  description: string;
  deadline: string;
  taskid: number;
  done: boolean;
  username?: string;
  email?: string;
  creatorId?: number;
  creator?: { email: string; username: string } | number;
  owner?: { email: string; username: string } | number;
  ownerId?: number;
  name?: string;
  picture?: string;
}

export interface USER_TS {
  username: string | "";
  email: string;
  userid: number;
  name: string;
}

export interface USER_DB_TS {
  username: string | "";
  email: string;
  userid: number;
  name: string;
  salt?: string;
  hash?: string;
}

export interface SET_TASK_PAYLOAD {
  creatorId?: number;
  creator?: { email: string; username: string };
  item: string;
  owner?: { email: string; username: string };
  ownerId?: number;
  taskid: string;
}

export interface ADD_TASK_PAYLOAD {
  creatorEmail: string;
  description: string;
  done: false;
  item: string;
}

export interface ModifyTaskPayload {
  task: Task_TS;
  date?: string | Date;
  donetask?: boolean;
  user?: USER_TS;
  item?: string;
  description?: string;
}
