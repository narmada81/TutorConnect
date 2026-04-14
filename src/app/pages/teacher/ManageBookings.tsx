import { useState } from 'react';
import { TeacherLayout } from '../../components/TeacherLayout';
import { Calendar, Clock, Video, Phone, MessageSquare, User } from 'lucide-react';
import { motion } from 'motion/react';

export function ManageBookings() {
  const [view, setView] = useState<'upcoming' | 'completed' | 'cancelled'>('upcoming');

  const bookings = [
    {
      id: '1',
      student: 'Priya Sharma',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
      subject: 'Mathematics',
      topic: 'Quadratic Equations',
      date: new Date('2026-03-17T14:00:00'),
      duration: 60,
      type: 'video' as const,
      status: 'upcoming' as const,
    },
    {
      id: '2',
      student: 'Arjun Patel',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arjun',
      subject: 'Physics',
      topic: 'Newton\'s Laws',
      date: new Date('2026-03-17T16:30:00'),
      duration: 45,
      type: 'voice' as const,
      status: 'upcoming' as const,
    },
    {
      id: '3',
      student: 'Maya Singh',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maya',
      subject: 'Chemistry',
      topic: 'Chemical Bonding',
      date: new Date('2026-03-18T10:00:00'),
      duration: 60,
      type: 'video' as const,
      status: 'upcoming' as const,
    },
    {
      id: '4',
      student: 'Rahul Kumar',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul',
      subject: 'Mathematics',
      topic: 'Calculus',
      date: new Date('2026-03-15T11:00:00'),
      duration: 60,
      type: 'video' as const,
      status: 'completed' as const,
    },
  ];

  const filteredBookings = bookings.filter(b => b.status === view);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return Video;
      case 'voice':
        return Phone;
      case 'chat':
        return MessageSquare;
      default:
        return Video;
    }
  };

  return (
    <TeacherLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Bookings</h1>
          <p className="text-gray-600">View and manage your session bookings</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Upcoming Sessions</p>
                <p className="text-2xl font-bold text-gray-900">
                  {bookings.filter(b => b.status === 'upcoming').length}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {bookings.filter(b => b.status === 'completed').length}
                </p>
              </div>
              <User className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 p-1 inline-flex">
          {(['upcoming', 'completed', 'cancelled'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setView(status)}
              className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                view === status
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.map((booking, index) => {
            const TypeIcon = getTypeIcon(booking.type);
            const isToday = booking.date.toDateString() === new Date().toDateString();
            const isPast = booking.date < new Date();

            return (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Student Info */}
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={booking.avatar}
                      alt={booking.student}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{booking.student}</h3>
                      <p className="text-gray-600">{booking.subject} - {booking.topic}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {booking.date.toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {booking.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <TypeIcon className="w-4 h-4" />
                          {booking.duration} mins
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  {isToday && booking.status === 'upcoming' && (
                    <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium">
                      Today
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    {booking.status === 'upcoming' && !isPast && (
                      <>
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                          Start Session
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          Reschedule
                        </button>
                        <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                          Cancel
                        </button>
                      </>
                    )}
                    {booking.status === 'completed' && (
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredBookings.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No {view} bookings</h3>
            <p className="text-gray-600">You don't have any {view} sessions at the moment.</p>
          </div>
        )}

        {/* Set Availability Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Availability Toggle</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-900 font-medium">Currently Available for Instant Sessions</p>
              <p className="text-sm text-gray-600">Students can book instant sessions with you</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
}
