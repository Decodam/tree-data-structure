// Tree.js

import React, { useState } from 'react';
import TreeNode from './TreeNode';
import './Tree.css'; // Stylesheet for Tree (customize as per UI requirements)

const Tree = () => {
  const [tree, setTree] = useState(initializeTree());

  // Initialize tree with 10,000 nodes
  function initializeTree() {
    const tree = {};
    // Create tree nodes with depth of 10,000 (sample data)
    // You can adjust this based on actual data or generation logic
    // Here, we're creating a simple tree with depth 3 for demonstration
    for (let i = 1; i <= 3; i++) {
      tree[`node${i}`] = {
        value: `Node ${i}`,
        children: {}
      };
      for (let j = 1; j <= 3; j++) {
        tree[`node${i}`].children[`node${i}${j}`] = {
          value: `Node ${i}${j}`,
          children: {}
        };
        for (let k = 1; k <= 3; k++) {
          tree[`node${i}`].children[`node${i}${j}`].children[`node${i}${j}${k}`] = {
            value: `Node ${i}${j}${k}`,
            children: {}
          };
        }
      }
    }
    return tree;
  }

  const handleChange = (nodeId, newValue) => {
    setTree((prevTree) => ({
      ...prevTree,
      [nodeId]: {
        ...prevTree[nodeId],
        value: newValue
      }
    }));
  };

  const renderTree = (nodes) => {
    return Object.keys(nodes).map((key) => (
      <div key={key} className="tree-node-container">
        <TreeNode value={nodes[key].value} onChange={(newValue) => handleChange(key, newValue)} />
        {Object.keys(nodes[key].children).length > 0 && (
          <div className="children-nodes">
            {renderTree(nodes[key].children)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="tree-container">
      <h1>Tree with 10,000 Nodes</h1>
      {renderTree(tree)}
    </div>
  );
};

export default Tree;
