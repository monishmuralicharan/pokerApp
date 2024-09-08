import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Import the checkmark icon from react-icons

const DynamicForm = () => {
  // State to store the color-value pairs
  const [formData, setFormData] = useState([{ color: '', value: '' }]);
  const [showSuccess, setShowSuccess] = useState(false);

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

  // Function to display success message on submit
  const handleSubmit = () => {
    // Reset the success message and show it again
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleRemoveRow = () => {
    if (formData.length > 1) {
      setFormData(formData.slice(0, -1));
    }
  };
  


  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Chip Counts</h1>
      
      {/* Form Container with blue outline */}
      <div className="border-2 border-blue-700 rounded-lg p-8 w-full max-w-lg">
        <div className="flex justify-between mb-4">
          <span className="text-lg font-semibold text-blue-900">Color</span>
          <span className="text-lg font-semibold text-blue-900">Count</span>
        </div>

        {formData.map((row, index) => (
          <div key={index} className="flex mb-4 space-x-4">
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
              type="number"
              step="0.1"
              placeholder="Enter value in dollars"
              value={row.value}
              onChange={(e) => handleInputChange(index, e)}
              className="flex-1 p-2 rounded-lg border-2 border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
            />
          </div>
        ))}

        <div className="flex justify-center space-x-4 mt-4 mr-4">
            {/* Button to add new rows */}
            <button 
            onClick={addRow} 
            className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 mb-6 hover:bg-blue-800 transition">
            Add Row
            </button>

            <button onClick={handleRemoveRow} className="bg-blue-700 text-white mt-4 mb-6 px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                Remove Row
            </button>

            {/* Submit Button */}
            <button 
            onClick={handleSubmit} 
            className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 mb-6 mr-6 hover:bg-blue-800 transition">
            Submit
            </button>
        </div>
      </div>

      {/* Conditionally display success message */}
      {showSuccess && (
        <div className="mt-6 flex items-center bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          <FaCheckCircle className="mr-2" />  {/* Checkmark icon */}
          <p className="text-lg font-semibold">Chip Counts Submitted!</p>
        </div>
      )}
    </div>
  );
};

export default DynamicForm;
