import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Wallet, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  Bell, 
  PieChart,
  Target,
  Users,
  Lock,
  Zap,
  BarChart3,
  CreditCard
} from 'lucide-react';
import { useStaggerChildren, useFadeIn } from '@/hooks/useGSAP';

export default function FeaturesPage() {
  const heroRef = useFadeIn(0.2);
  const featuresRef = useStaggerChildren(0.4);

  const features = [
    {
      icon: Wallet,
      title: 'Smart Budget Tracking',
      description: 'Set budgets for different categories and track your spending in real-time with intelligent alerts.',
    },
    {
      icon: TrendingUp,
      title: 'Spending Insights',
      description: 'Get detailed analytics and insights about your spending patterns to make better financial decisions.',
    },
    {
      icon: CreditCard,
      title: 'Bank Account Linking',
      description: 'Securely connect all your Nigerian bank accounts and view everything in one place.',
    },
    {
      icon: Target,
      title: 'Financial Goals',
      description: 'Set and track financial goals with progress monitoring and personalized recommendations.',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Receive timely alerts about unusual spending, bill reminders, and budget limits.',
    },
    {
      icon: PieChart,
      title: 'Visual Reports',
      description: 'Beautiful charts and graphs that make understanding your finances easy and intuitive.',
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Your data is encrypted with 256-bit SSL and stored securely. We never share your information.',
    },
    {
      icon: Smartphone,
      title: 'Mobile PWA',
      description: 'Install as a mobile app for quick access. Works offline and syncs when you\'re back online.',
    },
    {
      icon: Users,
      title: 'Family Sharing',
      description: 'Share budgets and track expenses together with family members or roommates.',
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'We never sell your data. Your financial information stays private and secure.',
    },
    {
      icon: Zap,
      title: 'Instant Sync',
      description: 'Real-time synchronization across all your devices. Always up to date.',
    },
    {
      icon: BarChart3,
      title: 'Export Reports',
      description: 'Download your financial data in PDF or CSV format for tax filing or record keeping.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 text-2xl font-bold text-purple-600 dark:text-purple-400">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              FinGuard
            </a>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features">
              <a className="text-purple-600 dark:text-purple-400 font-semibold">
                Features
              </a>
            </Link>
            <Link href="/login">
              <a className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Log In
              </a>
            </Link>
            <Link href="/signup">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div ref={heroRef} className="container mx-auto px-4 pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Everything You Need to
          <br />
          <span className="text-purple-600 dark:text-purple-400">Manage Your Money</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          FinGuard provides powerful tools to help you track spending, save money, and achieve your financial goals.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-8">
              Get Started Free
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" className="h-12 px-8">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-20">
        <Card className="bg-gradient-to-r from-purple-600 to-purple-700 p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians who are already managing their money smarter with FinGuard.
          </p>
          <Link href="/signup">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 h-12 px-8 text-lg">
              Start Free Trial
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
