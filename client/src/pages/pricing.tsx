import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useStaggerChildren } from '@/hooks/useGSAP';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const cardsRef = useStaggerChildren(0.3);

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started',
      features: [
        'Track up to 50 transactions',
        'Basic budget management',
        'Link 1 bank account',
        'Monthly spending insights',
        'Mobile app access',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: { monthly: 2500, yearly: 25000 },
      description: 'Best for individuals',
      features: [
        'Unlimited transactions',
        'Advanced budget tracking',
        'Link up to 5 bank accounts',
        'Real-time insights & alerts',
        'Goal tracking',
        'Export reports (PDF/CSV)',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Family',
      price: { monthly: 5000, yearly: 50000 },
      description: 'For families and small teams',
      features: [
        'Everything in Pro',
        'Up to 5 family members',
        'Shared budgets',
        'Link unlimited accounts',
        'Custom categories',
        'Advanced analytics',
        'Dedicated support',
        'API access',
      ],
      cta: 'Start Free Trial',
      popular: false,
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
              <a className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Features
              </a>
            </Link>
            <Link href="/pricing">
              <a className="text-purple-600 dark:text-purple-400 font-semibold">
                Pricing
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Blog
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

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Choose the plan that's right for you
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-8 ${
                plan.popular
                  ? 'border-2 border-purple-600 shadow-2xl scale-105'
                  : 'border border-gray-200 dark:border-gray-700'
              } bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ₦{plan.price[billingCycle].toLocaleString()}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-12 ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <Card className="p-6 bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Can I switch plans anytime?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </Card>
            <Card className="p-6 bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Is there a free trial?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! Pro and Family plans come with a 14-day free trial. No credit card required.
              </p>
            </Card>
            <Card className="p-6 bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We accept all major credit cards, debit cards, and bank transfers. Payments are processed securely.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
