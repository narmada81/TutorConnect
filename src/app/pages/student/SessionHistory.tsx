import { StudentLayout } from '../../components/StudentLayout';
import { Video, MessageSquare, Phone, Star, Calendar, Clock, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import { mockSessions } from '../../data/mockData';
import { useState } from 'react';

export function SessionHistory() {
  const [filter, setFilter] = useState<'all' | 'completed' | 'scheduled' | 'cancelled'>('all');
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [rating, setRating] = useState(0);

  const filteredSessions = filter === 'all'
    ? mockSessions
    : mockSessions.filter(s => s.status === filter);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleRateSession = (sessionId: string) => {
    setSelectedSession(sessionId);
    setShowRatingModal(true);
  };

  const submitRating = () => {
    // Mock rating submission
    alert(`Rated ${rating} stars!`);
    setShowRatingModal(false);
    setRating(0);
    setSelectedSession(null);
  };

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Session History</h1>
            <p className="text-gray-600">View and manage your past and upcoming sessions</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Sessions</p>
                <p className="text-2xl font-bold text-gray-900">{mockSessions.length}</p>
              </div>
              <Video className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Hours</p>
                <p className="text-2xl font-bold text-gray-900">
                  {mockSessions.reduce((acc, s) => acc + s.duration, 0) / 60}h
                </p>
              </div>
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{mockSessions.reduce((acc, s) => acc + s.cost, 0).toLocaleString('en-IN')}
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 p-1 inline-flex">
          {(['all', 'completed', 'scheduled', 'cancelled'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Sessions List */}
        <div className="space-y-4">
          {filteredSessions.map((session, index) => {
            const TypeIcon = getTypeIcon(session.type);
            return (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Session Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {session.subject}
                        </h3>
                        <p className="text-gray-600">with {session.tutorName}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm capitalize ${getStatusColor(session.status)}`}>
                        {session.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{session.date.toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{session.duration} mins</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <TypeIcon className="w-4 h-4" />
                        <span className="capitalize">{session.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        <span>₹{session.cost.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    {session.rating && (
                      <div className="flex items-center gap-1 mt-4">
                        <span className="text-sm text-gray-600 mr-2">Your rating:</span>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < session.rating!
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex md:flex-col gap-2">
                    {session.status === 'completed' && !session.rating && (
                      <button
                        onClick={() => handleRateSession(session.id)}
                        className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                      >
                        Rate Session
                      </button>
                    )}
                    {session.status === 'scheduled' && (
                      <>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Join Session
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          Reschedule
                        </button>
                      </>
                    )}
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredSessions.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No sessions found</h3>
            <p className="text-gray-600">You don't have any {filter !== 'all' ? filter : ''} sessions yet.</p>
          </div>
        )}
      </div>

      {/* Rating Modal */}
      {showRatingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rate This Session</h2>
            <p className="text-gray-600 mb-6">How was your experience?</p>

            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>

            <textarea
              placeholder="Write your review (optional)"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-6"
            />

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowRatingModal(false);
                  setRating(0);
                }}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={submitRating}
                disabled={rating === 0}
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Rating
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </StudentLayout>
  );
}