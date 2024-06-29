import { createStore } from 'redux';

// Initial state
const initialState = {
  tree: {
    id: 'root',
    value: 'Root',
    children: [],
  },
  history: [],
  currentVersion: -1,
};

// Actions
export const ActionTypes = {
  UPDATE_NODE_VALUE: 'UPDATE_NODE_VALUE',
  UNDO: 'UNDO',
  REDO: 'REDO',
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_NODE_VALUE: {
      const { nodeId, newValue } = action.payload;
      const updatedTree = updateNodeValue(state.tree, nodeId, newValue);
      const newHistory = state.history.slice(0, state.currentVersion + 1);
      return {
        ...state,
        tree: updatedTree,
        history: [...newHistory, state.tree],
        currentVersion: state.currentVersion + 1,
      };
    }
    case ActionTypes.UNDO: {
      if (state.currentVersion > 0) {
        const previousVersion = state.history[state.currentVersion - 1];
        return {
          ...state,
          tree: previousVersion,
          currentVersion: state.currentVersion - 1,
        };
      }
      return state;
    }
    case ActionTypes.REDO: {
      if (state.currentVersion < state.history.length - 1) {
        const nextVersion = state.history[state.currentVersion + 1];
        return {
          ...state,
          tree: nextVersion,
          currentVersion: state.currentVersion + 1,
        };
      }
      return state;
    }
    default:
      return state;
  }
};

// Action creators
export const updateNodeValueAction = (nodeId, newValue) => ({
  type: ActionTypes.UPDATE_NODE_VALUE,
  payload: { nodeId, newValue },
});

export const undoAction = () => ({
  type: ActionTypes.UNDO,
});

export const redoAction = () => ({
  type: ActionTypes.REDO,
});

// Helper function to update node value recursively
const updateNodeValue = (node, nodeId, newValue) => {
  if (node.id === nodeId) {
    return { ...node, value: newValue };
  }
  if (node.children.length > 0) {
    return {
      ...node,
      children: node.children.map((child) => updateNodeValue(child, nodeId, newValue)),
    };
  }
  return node;
};

// Create store
const store = createStore(reducer);

export default store;
