import { StudentLayout } from '../../components/StudentLayout';
import { useNavigate } from 'react-router';
import { HelpCircle, Users, Video, Calendar, Star, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { mockSessions, mockDoubts } from '../../data/mockData';

export function StudentDashboard() {
  const navigate = useNavigate();

  const quickActions = [
    {
      icon: HelpCircle,
      title: 'Post a Doubt',
      description: 'Get instant help from tutors',
      color: 'bg-blue-500',
      path: '/student/post-doubt',
    },
    {
      icon: Users,
      title: 'Browse Tutors',
      description: 'Find the perfect tutor',
      color: 'bg-purple-500',
      path: '/student/tutors',
    },
    {
      icon: Video,
      title: 'Watch Demos',
      description: 'Preview tutor styles',
      color: 'bg-green-500',
      path: '/student/tutors',
    },
    {
      icon: Calendar,
      title: 'View Sessions',
      description: 'Check your schedule',
      color: 'bg-orange-500',
      path: '/student/sessions',
    },
  ];

  const stats = [
    { label: 'Total Sessions', value: '12', icon: Video, color: 'text-blue-600' },
    { label: 'Active Doubts', value: '3', icon: HelpCircle, color: 'text-purple-600' },
    { label: 'Hours Learned', value: '18', icon: Clock, color: 'text-green-600' },
    { label: 'Avg Rating Given', value: '4.8', icon: Star, color: 'text-yellow-600' },
  ];

  const upcomingSessions = mockSessions.filter(s => s.status === 'scheduled');
  const recentDoubts = mockDoubts.slice(0, 3);

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
            <p className="text-blue-100">Ready to continue your learning journey?</p>
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
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(action.path)}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-left"
              >
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Sessions</h2>
              <button
                onClick={() => navigate('/student/sessions')}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                View All
              </button>
            </div>
            {upcomingSessions.length > 0 ? (
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Video className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{session.subject}</h3>
                      <p className="text-sm text-gray-600">with {session.tutorName}</p>
                      <p className="text-sm text-gray-500">
                        {session.date.toLocaleDateString()} at {session.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-green-600">Scheduled</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p>No upcoming sessions</p>
                <button
                  onClick={() => navigate('/student/tutors')}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Book a Session
                </button>
              </div>
            )}
          </div>

          {/* Recent Doubts */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Recent Doubts</h2>
              <button
                onClick={() => navigate('/student/post-doubt')}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Post New
              </button>
            </div>
            {recentDoubts.length > 0 ? (
              <div className="space-y-4">
                {recentDoubts.map((doubt) => (
                  <div key={doubt.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{doubt.topic}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        doubt.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        doubt.status === 'accepted' ? 'bg-green-100 text-green-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {doubt.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{doubt.subject}</p>
                    <p className="text-sm text-gray-500">
                      {doubt.createdAt.toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <HelpCircle className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p>No doubts posted yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
