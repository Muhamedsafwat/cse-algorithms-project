import React, { useState } from "react";
import { LuX, LuCheck } from "react-icons/lu";
const UserPreferencesPopup = ({
  setIsOpen,
  preferences,
  setPreferences,
  sortProducts,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg relative py-4 px-8 w-full max-w-sm">
        <button
          className="btn btn-square btn-error btn-sm absolute top-2 right-2 !text-white"
          onClick={() => setIsOpen(false)}
        >
          <LuX size={20} />
        </button>
        <h2 className="font-bold mb-5 text-xl">User Preferences: </h2>
        <label className="block ">Price:</label>
        <div className="flex flex-row gap-5 w-full">
          <input
            className="w-full"
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={preferences.price}
            onChange={(e) =>
              setPreferences({ ...preferences, price: e.target.value })
            }
          />
        </div>
        <label className="block ">Rating:</label>
        <div className="flex flex-row gap-5 w-full">
          <input
            className="w-full"
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={preferences.rating}
            onChange={(e) =>
              setPreferences({ ...preferences, rating: e.target.value })
            }
          />
        </div>
        <label className="block ">Brand:</label>
        <div className="flex flex-row gap-5 w-full">
          <input
            className="w-full"
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={preferences.brand}
            onChange={(e) =>
              setPreferences({ ...preferences, brand: e.target.value })
            }
          />
        </div>
        <div className="flex flex-row gap-2 mt-5">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              sortProducts("pref");
              setIsOpen(false);
            }}
          >
            Apply
          </button>
          <button
            className="btn btn-outline btn-error btn-sm"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPreferencesPopup;
