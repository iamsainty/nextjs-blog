"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">Create Account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 mt-4">
        <input type="text" name="name" placeholder="Name" className="p-2 border rounded" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" className="p-2 border rounded" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="p-2 border rounded" onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}