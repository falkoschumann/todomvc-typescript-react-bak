export type NewTodoCommand = Readonly<{
  type: "NEW_TODO_COMMAND";
  title: string;
}>

export type ToggleAllCommand = Readonly<{
  type: "TOGGLE_ALL_COMMAND";
  completed: boolean;
}>

export type ToggleCommand = Readonly<{
  type: "TOGGLE_COMMAND";
  id: string;
}>

export type DestroyCommand = Readonly<{
  type: "DESTROY_COMMAND";
  id: string;
}>

export type EditCommand = Readonly<{
  type: "EDIT_COMMAND";
  id: string;
  title: string;
}>

export type ClearCompletedCommand = Readonly<{
  type: "CLEAR_COMPLETED_COMMAND";
}>
