// TreeNode.js

import React, { useState } from 'react';
import './TreeNode.css'; // Stylesheet for TreeNode (customize as per UI requirements)

const TreeNode = ({ value, onChange }) => {
  const [editMode, setEditMode] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  const handleInputChange = (e) => {
    setLocalValue(e.target.value);
  };

  const handleBlur = () => {
    setEditMode(false);
    if (localValue !== value) {
      onChange(localValue); // Propagate change to parent
    }
  };

  return (
    <div className="tree-node">
      {editMode ? (
        <input
          type="text"
          value={localValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <div className="node-value" onClick={() => setEditMode(true)}>
          {value}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
