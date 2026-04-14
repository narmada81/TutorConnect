import { TeacherLayout } from '../../components/TeacherLayout';
import { useNavigate } from 'react-router';
import { DollarSign, Users, Video, Calendar, TrendingUp, Clock, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { mockDoubts } from '../../data/mockData';

export function TeacherDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Earnings', value: '₹1,85,000', icon: DollarSign, color: 'text-green-600', trend: '+12%' },
    { label: 'Active Students', value: '34', icon: Users, color: 'text-blue-600', trend: '+5' },
    { label: 'Sessions This Month', value: '48', icon: Video, color: 'text-purple-600', trend: '+8' },
    { label: 'Avg. Rating', value: '4.8', icon: TrendingUp, color: 'text-yellow-600', trend: '+0.2' },
  ];

  const pendingDoubts = mockDoubts.filter(d => d.status === 'pending');
  const acceptedDoubts = mockDoubts.filter(d => d.status === 'accepted');

  const upcomingSessions = [
    {
      id: '1',
      student: 'Priya Sharma',
      subject: 'Mathematics',
      time: 'Today, 2:00 PM',
      duration: '60 mins',
    },
    {
      id: '2',
      student: 'Arjun Patel',
      subject: 'Physics',
      time: 'Today, 4:30 PM',
      duration: '45 mins',
    },
    {
      id: '3',
      student: 'Maya Singh',
      subject: 'Chemistry',
      time: 'Tomorrow, 10:00 AM',
      duration: '60 mins',
    },
  ];

  return (
    <TeacherLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold mb-2">Welcome back, Teacher! 👨‍🏫</h1>
            <p className="text-purple-100">You have {pendingDoubts.length} new doubt requests waiting</p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <span className="text-sm font-medium text-green-600">{stat.trend}</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pending Doubt Requests */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Doubt Requests</h2>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                {pendingDoubts.length} New
              </span>
            </div>
            {pendingDoubts.length > 0 ? (
              <div className="space-y-4">
                {pendingDoubts.map((doubt) => (
                  <div key={doubt.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{doubt.topic}</h3>
                        <p className="text-sm text-gray-600">{doubt.subject}</p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {doubt.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{doubt.description}</p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center justify-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Accept
                      </button>
                      <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center justify-center gap-1">
                        <XCircle className="w-4 h-4" />
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <CheckCircle className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p>No pending requests</p>
              </div>
            )}
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Sessions</h2>
              <button
                onClick={() => navigate('/teacher/bookings')}
                className="text-sm text-purple-600 hover:text-purple-700"
              >
                View All
              </button>
            </div>
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Video className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{session.subject}</h3>
                    <p className="text-sm text-gray-600">with {session.student}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {session.time}
                      </span>
                      <span>•</span>
                      <span>{session.duration}</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                    Start
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => navigate('/teacher/profile')}
            className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all text-left"
          >
            <Users className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Update Profile</h3>
            <p className="text-sm text-gray-600">Manage your info & subjects</p>
          </button>
          <button
            onClick={() => navigate('/teacher/upload-demo')}
            className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all text-left"
          >
            <Video className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Upload Demo</h3>
            <p className="text-sm text-gray-600">Add teaching videos</p>
          </button>
          <button
            onClick={() => navigate('/teacher/bookings')}
            className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all text-left"
          >
            <Calendar className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Manage Schedule</h3>
            <p className="text-sm text-gray-600">Set availability & slots</p>
          </button>
          <button
            onClick={() => navigate('/teacher/earnings')}
            className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all text-left"
          >
            <DollarSign className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">View Earnings</h3>
            <p className="text-sm text-gray-600">Track your income</p>
          </button>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4 py-3 border-b border-gray-100">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Session completed with <span className="font-medium">Priya Sharma</span></p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-3 border-b border-gray-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">New 5-star review from <span className="font-medium">Arjun Patel</span></p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Earned <span className="font-medium">₹3,500</span> from Mathematics session</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
}