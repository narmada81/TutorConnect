import { useState } from 'react';
import { TeacherLayout } from '../../components/TeacherLayout';
import { Save, Plus, X } from 'lucide-react';
import { motion } from 'motion/react';

export function TeacherProfile() {
  const [name, setName] = useState('Sarah Chen');
  const [email, setEmail] = useState('sarah.chen@example.com');
  const [bio, setBio] = useState('Passionate about making complex math concepts simple and fun.');
  const [experience, setExperience] = useState('8');
  const [hourlyRate, setHourlyRate] = useState('3500');
  const [subjects, setSubjects] = useState(['Mathematics', 'Physics']);
  const [newSubject, setNewSubject] = useState('');
  const [saved, setSaved] = useState(false);

  const availableSubjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'Computer Science',
    'History',
    'Geography',
    'Economics',
    'Accounting',
  ];

  const handleAddSubject = () => {
    if (newSubject && !subjects.includes(newSubject)) {
      setSubjects([...subjects, newSubject]);
      setNewSubject('');
    }
  };

  const handleRemoveSubject = (subject: string) => {
    setSubjects(subjects.filter(s => s !== subject));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <TeacherLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Teacher Profile</h1>
          <p className="text-gray-600">Manage your profile information and teaching subjects</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="space-y-8">
            {/* Profile Picture */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Profile Picture</label>
              <div className="flex items-center gap-6">
                <img
                  src="https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwdHV0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNzc4ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                    Upload New Photo
                  </button>
                  <p className="text-sm text-gray-500 mt-2">JPG, PNG or GIF (max. 2MB)</p>
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="Tell students about yourself and your teaching style..."
              />
              <p className="text-sm text-gray-500 mt-2">{bio.length}/500 characters</p>
            </div>

            {/* Teaching Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                <input
                  type="number"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate ($)</label>
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Subjects */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Subjects</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {subjects.map((subject) => (
                  <span
                    key={subject}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-2"
                  >
                    {subject}
                    <button
                      onClick={() => handleRemoveSubject(subject)}
                      className="hover:text-purple-900"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <select
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select a subject to add</option>
                  {availableSubjects
                    .filter(s => !subjects.includes(s))
                    .map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                </select>
                <button
                  onClick={handleAddSubject}
                  disabled={!newSubject}
                  className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add
                </button>
              </div>
            </div>

            {/* Qualifications */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Qualifications</label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="List your degrees, certifications, and qualifications..."
              />
            </div>

            {/* Languages */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Languages Spoken</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['English', 'Hindi', 'Spanish', 'French'].map((lang) => (
                  <label key={lang} className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
                    <span className="ml-2 text-gray-700">{lang}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Weekly Availability</label>
              <div className="space-y-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex items-center gap-4">
                    <label className="flex items-center w-32">
                      <input type="checkbox" defaultChecked={day !== 'Sunday'} className="w-4 h-4 text-purple-600 rounded" />
                      <span className="ml-2 text-gray-700">{day}</span>
                    </label>
                    <input
                      type="time"
                      defaultValue="09:00"
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="time"
                      defaultValue="18:00"
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSave}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {saved && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Profile saved successfully!
          </motion.div>
        )}
      </div>
    </TeacherLayout>
  );
}