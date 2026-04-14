import { useState } from 'react';
import { StudentLayout } from '../../components/StudentLayout';
import { useNavigate, useParams } from 'react-router';
import { Calendar, Clock, Video, MessageSquare, Phone, CreditCard, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { mockTutors } from '../../data/mockData';

export function BookSession() {
  const { tutorId } = useParams();
  const navigate = useNavigate();
  const tutor = mockTutors.find(t => t.id === tutorId);

  const [sessionType, setSessionType] = useState<'instant' | 'scheduled'>('instant');
  const [communicationType, setCommunicationType] = useState<'video' | 'voice' | 'chat'>('video');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState(60);
  const [booked, setBooked] = useState(false);

  if (!tutor) {
    return (
      <StudentLayout>
        <div className="text-center py-16">
          <p className="text-gray-600">Tutor not found</p>
        </div>
      </StudentLayout>
    );
  }

  const handleBooking = () => {
    setBooked(true);
    setTimeout(() => {
      navigate('/student/sessions');
    }, 2000);
  };

  if (booked) {
    return (
      <StudentLayout>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center py-16"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Session Booked!</h2>
          <p className="text-gray-600 mb-6">
            Your session with {tutor.name} has been confirmed.
          </p>
          <p className="text-sm text-gray-500">Redirecting to sessions...</p>
        </motion.div>
      </StudentLayout>
    );
  }

  const cost = (tutor.hourlyRate * duration) / 60;

  return (
    <StudentLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Session</h1>
          <p className="text-gray-600">Schedule your learning session with {tutor.name}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Session Type */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Session Type</h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSessionType('instant')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    sessionType === 'instant'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="font-medium text-gray-900">Instant</p>
                  <p className="text-sm text-gray-600">Start now</p>
                </button>
                <button
                  onClick={() => setSessionType('scheduled')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    sessionType === 'scheduled'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="font-medium text-gray-900">Scheduled</p>
                  <p className="text-sm text-gray-600">Pick a time</p>
                </button>
              </div>
            </div>

            {/* Date & Time (if scheduled) */}
            {sessionType === 'scheduled' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Date & Time</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Communication Type */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Communication Type</h2>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => setCommunicationType('video')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    communicationType === 'video'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Video className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="font-medium text-gray-900 text-sm">Video Call</p>
                </button>
                <button
                  onClick={() => setCommunicationType('voice')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    communicationType === 'voice'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Phone className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="font-medium text-gray-900 text-sm">Voice Call</p>
                </button>
                <button
                  onClick={() => setCommunicationType('chat')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    communicationType === 'chat'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <MessageSquare className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="font-medium text-gray-900 text-sm">Chat</p>
                </button>
              </div>
            </div>

            {/* Duration */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Duration</h2>
              <div className="grid grid-cols-3 gap-4">
                {[30, 60, 90].map((min) => (
                  <button
                    key={min}
                    onClick={() => setDuration(min)}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      duration === min
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className="font-medium text-gray-900">{min} mins</p>
                    <p className="text-sm text-gray-600">₹{Math.round((tutor.hourlyRate * min / 60)).toLocaleString('en-IN')}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-blue-600 bg-blue-50 rounded-lg cursor-pointer">
                  <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-blue-600" />
                  <CreditCard className="w-5 h-5 ml-3 text-blue-600" />
                  <span className="ml-3 text-gray-900">Credit/Debit Card</span>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300">
                  <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
                  <span className="ml-3 text-gray-900">💳 UPI</span>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300">
                  <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
                  <span className="ml-3 text-gray-900">💰 Wallet</span>
                </label>
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Booking Summary</h2>

              {/* Tutor Info */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                <img
                  src={tutor.avatar}
                  alt={tutor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
                  <p className="text-sm text-gray-600">{tutor.subjects[0]}</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Session Type</span>
                  <span className="font-medium text-gray-900 capitalize">{sessionType}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Communication</span>
                  <span className="font-medium text-gray-900 capitalize">{communicationType}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium text-gray-900">{duration} mins</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Rate</span>
                  <span className="font-medium text-gray-900">₹{tutor.hourlyRate.toLocaleString('en-IN')}/hr</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">₹{Math.round(cost).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Book Button */}
              <button
                onClick={handleBooking}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Confirm Booking
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By booking, you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}