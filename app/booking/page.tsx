'use client';
import { useState } from 'react';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    guests: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Booking request sent via WhatsApp!');
    window.open(`https://wa.me/918499941560?text=Booking Request:%0AName: ${formData.name}%0ADate: ${formData.date}%0AGuests: ${formData.guests}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`, '_blank');
  };

  return (
    <main className="bg-green-50 min-h-screen p-8 text-green-900">
      <h1 className="text-3xl font-bold mb-6 text-center">Booking Form</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4 bg-green-100 p-6 rounded-xl shadow">
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} className="p-3 rounded" />
        <input type="date" name="date" required onChange={handleChange} className="p-3 rounded" />
        <input type="number" name="guests" placeholder="Number of Guests" required onChange={handleChange} className="p-3 rounded" />
        <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className="p-3 rounded" />
        <textarea name="message" placeholder="Any Message" rows={4} onChange={handleChange} className="p-3 rounded" />
        <button type="submit" className="bg-green-600 text-white py-3 rounded hover:bg-green-700">
          Send Booking via WhatsApp
        </button>
      </form>
    </main>
  );
}
