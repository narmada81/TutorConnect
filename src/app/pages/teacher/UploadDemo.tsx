import { useState } from 'react';
import { TeacherLayout } from '../../components/TeacherLayout';
import { Upload, Video, Play, Trash2, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function UploadDemo() {
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const existingVideos = [
    {
      id: '1',
      title: 'Introduction to Quadratic Equations',
      subject: 'Mathematics',
      duration: '8:45',
      views: 234,
      thumbnail: 'https://images.unsplash.com/photo-1528249072419-472a928b71c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmclMjB2aWRlbyUyMGNhbGx8ZW58MXx8fHwxNzczNzc4ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '2',
      title: 'Newton\'s Laws of Motion',
      subject: 'Physics',
      duration: '12:30',
      views: 189,
      thumbnail: 'https://images.unsplash.com/photo-1528249072419-472a928b71c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmclMjB2aWRlbyUyMGNhbGx8ZW58MXx8fHwxNzczNzc4ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }, 2000);
  };

  return (
    <TeacherLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Demo Teaching Videos</h1>
          <p className="text-gray-600">
            Upload demo videos to showcase your teaching style to potential students
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload New Demo Video</h2>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-purple-400 transition-colors mb-6">
            <input
              type="file"
              accept="video/*"
              className="hidden"
              id="video-upload"
            />
            <label htmlFor="video-upload" className="cursor-pointer">
              <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-lg text-gray-600 mb-2">
                Click to upload or drag and drop
              </p>
              <p className="text-sm text-gray-500">
                MP4, MOV, or AVI up to 100MB
              </p>
            </label>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Video Title</label>
              <input
                type="text"
                placeholder="e.g., Introduction to Calculus"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
                <input
                  type="text"
                  placeholder="e.g., Quadratic Equations"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                rows={3}
                placeholder="Describe what this video covers..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>
          </div>

          <button
            onClick={handleUpload}
            disabled={uploading}
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {uploading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                Upload Video
              </>
            )}
          </button>
        </div>

        {/* Existing Videos */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Demo Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {existingVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-200">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                    <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Play className="w-8 h-8 text-purple-600 ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{video.subject}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{video.views} views</span>
                    <span className="flex items-center gap-1">
                      <Video className="w-4 h-4" />
                      Demo
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Edit
                    </button>
                    <button className="p-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="font-semibold text-purple-900 mb-3">💡 Tips for Great Demo Videos:</h3>
          <ul className="text-sm text-purple-800 space-y-2">
            <li>• Keep videos between 5-15 minutes for best engagement</li>
            <li>• Use good lighting and clear audio</li>
            <li>• Showcase your unique teaching style and personality</li>
            <li>• Cover common topics that students often struggle with</li>
            <li>• Include examples and problem-solving techniques</li>
          </ul>
        </div>

        {/* Success Message */}
        {uploadSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            Video uploaded successfully!
          </motion.div>
        )}
      </div>
    </TeacherLayout>
  );
}
