// src/components/ApplicationForm.tsx
"use client";

import { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    age: "",
    experience: "",
    discord: "",
    referral: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-xl mx-auto bg-zinc-900 p-6 rounded-md shadow-md text-white">
      <form
        action="https://formspree.io/f/xblyvjyq"
        method="POST"
        className="max-w-md mx-auto space-y-4 bg-neutral-900 p-6 rounded-lg"
      >
        <div>
          <label htmlFor="nickname" className="block mb-1">Nickname:</label>
          <input
            type="text"
            name="nickname"
            id="nickname"
            value={formData.nickname}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black text-white border border-zinc-700 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="age" className="block mb-1">Age:</label>
          <input
            type="text"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black text-white border border-zinc-700 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="experience" className="block mb-1">ARMA Experience (briefly):</label>
          <textarea
            name="experience"
            id="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black text-white border border-zinc-700 rounded"
            rows={3}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="discord" className="block mb-1">Discord ID:</label>
          <input
            type="text"
            name="discord"
            id="discord"
            value={formData.discord}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black text-white border border-zinc-700 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="referral" className="block mb-1">How did you hear about REAPER SIX?</label>
          <input
            type="text"
            name="referral"
            id="referral"
            value={formData.referral}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black text-white border border-zinc-700 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-700 hover:bg-green-800 text-white rounded mt-4"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
