// DataTable.tsx

import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const sampleData = [
  { location: '011', description: 'Alabang' },
  { location: '012', description: 'Cebu' },
  { location: '013', description: 'Japan' },
  { location: '014', description: 'China/HK' },
  { location: '015', description: 'Makati' },
];

const DataTable: React.FC = () => {
  const handleEditClick = (location: string) => {
    // Handle edit click based on the location (you can implement your logic here)
    console.log(`Editing location: ${location}`);
  };

  const handleDeleteClick = (location: string) => {
    // Handle delete click based on the location (you can implement your logic here)
    console.log(`Deleting location: ${location}`);
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Location</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sampleData.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.location}</td>
            <td>{item.description}</td>
            <td>
              <Button variant="primary" onClick={() => handleEditClick(item.location)}>
                {/* Edit icon SVG */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* ... Your edit SVG path here ... */}
                </svg>
                Edit
              </Button>
              <Button variant="danger" onClick={() => handleDeleteClick(item.location)}>
                {/* Delete icon SVG */}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* ... Your delete SVG path here ... */}
                </svg>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
