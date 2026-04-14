import { useNavigate } from 'react-router';
import { GraduationCap, Video, Clock, Star, CheckCircle2, Users, BookOpen, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Video,
      title: 'Live Video Sessions',
      description: 'Connect with expert tutors through high-quality video calls',
    },
    {
      icon: Clock,
      title: 'Instant Help',
      description: 'Get help within minutes from available tutors',
    },
    {
      icon: Star,
      title: 'Rated Tutors',
      description: 'Choose from highly-rated and experienced educators',
    },
    {
      icon: BookOpen,
      title: 'All Subjects',
      description: 'Mathematics, Science, English, Programming & more',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Post Your Doubt',
      description: 'Share your question with subject, topic, and optional image',
    },
    {
      number: '2',
      title: 'Browse Tutors',
      description: 'Watch demo videos and select the perfect tutor for you',
    },
    {
      number: '3',
      title: 'Book a Session',
      description: 'Schedule instantly or pick a time that works for you',
    },
    {
      number: '4',
      title: 'Learn & Grow',
      description: 'Connect via chat, voice, or video with whiteboard support',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Class 12 Student',
      text: 'TutorConnect helped me ace my Math exam! The tutors are so patient and explain everything clearly.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    },
    {
      name: 'Arjun Patel',
      role: 'Engineering Student',
      text: 'Amazing platform! I can get help anytime I\'m stuck. The demo videos help me choose the right tutor.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arjun',
    },
    {
      name: 'Emily Chen',
      role: 'High School Student',
      text: 'The video sessions are super clear and the whiteboard feature makes learning so much easier!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">TutorConnect</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/student/login')}
                className="px-6 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Login as Student
              </button>
              <button
                onClick={() => navigate('/teacher/login')}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login as Teacher
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Instant help when learning gets stuck.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with expert tutors in seconds. Get personalized help through video, voice, or chat.
              Watch tutor demos before booking.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/student/login')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Get Started as Student
              </button>
              <button
                onClick={() => navigate('/teacher/login')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Teach on Platform
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759984782106-4b56d0aa05b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBvbmxpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzM3NTYwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Student learning online"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TutorConnect?</h2>
            <p className="text-xl text-gray-600">Everything you need for effective online learning</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in 4 simple steps</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-blue-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600">Join thousands of happy learners</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10k+</div>
              <div className="text-blue-100">Active Students</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Expert Tutors</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50k+</div>
              <div className="text-blue-100">Sessions Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.8</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to unlock your learning potential?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join TutorConnect today and experience personalized learning like never before.
          </p>
          <button
            onClick={() => navigate('/student/login')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            Start Learning Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold text-white">TutorConnect</span>
              </div>
              <p className="text-sm">Empowering students with instant access to quality education.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">For Students</h4>
              <ul className="space-y-2 text-sm">
                <li>Find Tutors</li>
                <li>How it Works</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">For Teachers</h4>
              <ul className="space-y-2 text-sm">
                <li>Become a Tutor</li>
                <li>Teacher Resources</li>
                <li>Earnings</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 TutorConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}