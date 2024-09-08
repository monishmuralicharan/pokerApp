import React, { useState } from 'react';

const DynamicForm = () => {
  // State to store the color-value pairs
  const [formData, setFormData] = useState([{ color: '', value: '' }]);
  const [showData, setShowData] = useState(false);

  // Function to handle input changes
  const handleInputChange = (index, event) => {
    const newFormData = [...formData];
    newFormData[index][event.target.name] = event.target.value;
    setFormData(newFormData);
  };

  // Function to add a new row
  const addRow = () => {
    setFormData([...formData, { color: '', value: '' }]);
  };

  // Function to display key-value pairs on submit
  const handleSubmit = () => {
    setShowData(true);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Chip Counts</h1>
      
      <div className="flex justify-between w-full max-w-lg mb-4">
        <span className="text-lg font-semibold text-blue-900">Chip Color</span>
        <span className="text-lg font-semibold text-blue-900">Chip Count</span>
      </div>

      {formData.map((row, index) => (
        <div key={index} className="flex mb-4 w-full max-w-lg space-x-4">
          {/* Color Input */}
          <input
            name="color"
            placeholder="Enter color"
            value={row.color}
            onChange={(e) => handleInputChange(index, e)}
            className="flex-1 p-2 rounded-lg border-2 border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
          />
          {/* Value Input */}
          <input
            name="value"
            placeholder="Enter value in dollars"
            value={row.value}
            onChange={(e) => handleInputChange(index, e)}
            className="flex-1 p-2 rounded-lg border-2 border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
          />
        </div>
      ))}

      {/* Button to add new rows */}
      <button 
        onClick={addRow} 
        className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 mb-6 hover:bg-blue-800 transition"
      >
        Add Row
      </button>

      {/* Submit Button */}
      <button 
        onClick={handleSubmit} 
        className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
      >
        Submit
      </button>

      {/* Conditionally display stored key-value pairs */}
      {showData && (
        <div className="mt-6 p-4 bg-white shadow rounded-lg w-full max-w-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">Key-Value Pairs:</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DynamicForm;
