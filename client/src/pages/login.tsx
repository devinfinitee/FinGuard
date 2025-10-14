import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { PiggyBank } from 'lucide-react';
import { useFadeIn, useSlideIn } from '@/hooks/useGSAP';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setLocation] = useLocation();
  const leftSideRef = useFadeIn(0.2);
  const rightSideRef = useSlideIn('right', 0.4);
  const piggyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate piggy bank illustration
    if (piggyRef.current) {
      gsap.to(piggyRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, accept any login and redirect to dashboard
    setLocation('/dashboard');
  };

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
            <Link href="/signup">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Illustration */}
          <div ref={leftSideRef} className="hidden md:flex flex-col items-center justify-center">
            <div ref={piggyRef} className="relative">
              {/* Piggy Bank Illustration */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50"></div>
                <PiggyBank className="w-64 h-64 text-purple-600 dark:text-purple-400" strokeWidth={1} />
                
                {/* Floating coins */}
                <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  ₦
                </div>
                <div className="absolute top-20 right-10 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  $
                </div>
                <div className="absolute bottom-20 left-20 w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  ₦
                </div>
                
                {/* Floating cards */}
                <div className="absolute top-32 right-0 w-16 h-12 bg-purple-500 rounded-lg shadow-lg transform rotate-12"></div>
                <div className="absolute bottom-32 left-0 w-16 h-12 bg-purple-600 rounded-lg shadow-lg transform -rotate-12"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div ref={rightSideRef}>
            <Card className="p-8 shadow-2xl border-0 bg-white dark:bg-gray-800">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Track smart. Spend wise. Live free.
                  </h1>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    <Link href="/forgot-password">
                      <a className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        Forgot Password?
                      </a>
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold"
                  >
                    Log In
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">OR</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-12 border-2"
                    onClick={() => console.log('Google login')}
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 border-2"
                    onClick={() => console.log('Apple login')}
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    Apple
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                  Don't have your account?{' '}
                  <Link href="/signup">
                    <a className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                      Sign Up
                    </a>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
