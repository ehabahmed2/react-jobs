
import React from 'react';

const ConfirmAction = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold text-neutral-dark mb-4">Confirm Action</h2>
        <p className="text-neutral-dark mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-neutral-dark text-white rounded hover:bg-neutral-light hover:text-neutral-dark transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-brand text-white rounded hover:bg-brand-dark transition"
          >
            Yes, Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAction;
