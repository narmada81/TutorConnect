import { TeacherLayout } from '../../components/TeacherLayout';
import { DollarSign, TrendingUp, Calendar, Download, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export function TeacherEarnings() {
  const monthlyData = [
    { month: 'Jan', earnings: 9000 },
    { month: 'Feb', earnings: 13500 },
    { month: 'Mar', earnings: 18500 },
    { month: 'Apr', earnings: 15700 },
    { month: 'May', earnings: 19750 },
    { month: 'Jun', earnings: 27500 },
  ];

  const transactions = [
    {
      id: '1',
      date: new Date('2026-03-15'),
      student: 'Priya Sharma',
      subject: 'Mathematics',
      duration: '60 mins',
      amount: 45,
      status: 'completed',
    },
    {
      id: '2',
      date: new Date('2026-03-14'),
      student: 'Arjun Patel',
      subject: 'Physics',
      duration: '45 mins',
      amount: 33.75,
      status: 'completed',
    },
    {
      id: '3',
      date: new Date('2026-03-13'),
      student: 'Maya Singh',
      subject: 'Chemistry',
      duration: '60 mins',
      amount: 45,
      status: 'completed',
    },
    {
      id: '4',
      date: new Date('2026-03-12'),
      student: 'Rahul Kumar',
      subject: 'Mathematics',
      duration: '90 mins',
      amount: 67.5,
      status: 'completed',
    },
  ];

  const stats = [
    {
      label: 'Total Earnings',
      value: '₹18,500',
      change: '+12% from last month',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'This Month',
      value: '₹6,700',
      change: '18 sessions',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Pending Payout',
      value: '₹24,000',
      change: 'Available on March 20',
      icon: CreditCard,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      label: 'Avg. Per Session',
      value: '₹3,720',
      change: '+5% this month',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <TeacherLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Earnings Dashboard</h1>
            <p className="text-gray-600">Track your income and payment history</p>
          </div>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-5 h-5" />
            Export Report
          </button>
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
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Monthly Earnings Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Monthly Earnings</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="earnings" fill="#9333ea" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Earnings Trend */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Earnings Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="earnings" stroke="#9333ea" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h2>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Bank Account</p>
                <p className="text-sm text-gray-600">•••• •••• •••• 4532</p>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition-colors">
              Update
            </button>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
            <button className="text-sm text-purple-600 hover:text-purple-700">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Student</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Subject</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Duration</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <motion.tr
                    key={transaction.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {transaction.date.toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">{transaction.student}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{transaction.subject}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{transaction.duration}</td>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">
                      ${transaction.amount.toFixed(2)}
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs capitalize">
                        {transaction.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payout Schedule */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="font-semibold text-purple-900 mb-3">💰 Payout Information</h3>
          <ul className="text-sm text-purple-800 space-y-2">
            <li>• Payouts are processed every two weeks (bi-weekly)</li>
            <li>• Next payout date: <strong>March 20, 2026</strong></li>
            <li>• Minimum payout amount: ₹3,000</li>
            <li>• Processing time: 2-3 business days</li>
            <li>• Platform fee: 15% per transaction</li>
          </ul>
        </div>
      </div>
    </TeacherLayout>
  );
}