import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TreeNode from './TreeNode';
import { undoAction, redoAction, updateNodeValueAction } from './redux/store';

const App = () => {
  const dispatch = useDispatch();
  const tree = useSelector((state) => state.tree);

  const updateNodeValue = (nodeId, newValue) => {
    dispatch(updateNodeValueAction(nodeId, newValue));
  };

  const handleUndo = () => {
    dispatch(undoAction());
  };

  const handleRedo = () => {
    dispatch(redoAction());
  };

  return (
    <div>
      <button onClick={handleUndo} disabled={currentVersion <= 0}>
        Undo
      </button>
      <button onClick={handleRedo} disabled={currentVersion >= history.length - 1}>
        Redo
      </button>
      <TreeNode node={tree} updateNodeValue={updateNodeValue} />
    </div>
  );
};

export default App;
