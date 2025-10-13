import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FinGuardLogo } from "@/components/finguard-logo";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FinGuardLogo className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">FinGuard</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-features">
                Features
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-pricing">
                Pricing
              </a>
              <Link href="/dashboard">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-login">
                  Log In
                </a>
              </Link>
              <Link href="/dashboard">
                <Button size="default" data-testid="button-signup-header">
                  Sign Up
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Track smart. Spend wise. Live free.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your personal finance copilot. Effortlessly monitor all accounts, categorize, and achieve financial goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8" data-testid="button-get-started">
                  Get Started
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full px-8 border-2 border-primary text-primary hover:bg-primary/5" 
                  data-testid="button-login"
                >
                  Sign Up / Log In
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Piggy bank illustration */}
                  <ellipse cx="200" cy="320" rx="150" ry="20" fill="hsl(270, 60%, 90%)" opacity="0.3"/>
                  
                  {/* Piggy body */}
                  <ellipse cx="200" cy="240" rx="120" ry="100" fill="hsl(270, 60%, 70%)"/>
                  
                  {/* Piggy snout */}
                  <ellipse cx="200" cy="240" rx="60" ry="50" fill="hsl(270, 60%, 65%)"/>
                  <ellipse cx="185" cy="240" rx="12" ry="20" fill="hsl(270, 60%, 55%)"/>
                  <ellipse cx="215" cy="240" rx="12" ry="20" fill="hsl(270, 60%, 55%)"/>
                  
                  {/* Ears */}
                  <ellipse cx="140" cy="180" rx="30" ry="45" fill="hsl(270, 60%, 70%)" transform="rotate(-30 140 180)"/>
                  <ellipse cx="260" cy="180" rx="30" ry="45" fill="hsl(270, 60%, 70%)" transform="rotate(30 260 180)"/>
                  
                  {/* Eyes */}
                  <circle cx="170" cy="210" r="8" fill="hsl(270, 60%, 30%)"/>
                  <circle cx="230" cy="210" r="8" fill="hsl(270, 60%, 30%)"/>
                  
                  {/* Coin slot */}
                  <rect x="180" y="160" width="40" height="8" rx="4" fill="hsl(270, 60%, 50%)"/>
                  
                  {/* Floating coins */}
                  <g transform="translate(280, 120)">
                    <circle cx="0" cy="0" r="25" fill="hsl(45, 95%, 58%)"/>
                    <text x="0" y="8" textAnchor="middle" fontSize="24" fill="hsl(45, 95%, 30%)">₦</text>
                  </g>
                  
                  <g transform="translate(100, 100)">
                    <circle cx="0" cy="0" r="20" fill="hsl(45, 95%, 58%)"/>
                    <text x="0" y="6" textAnchor="middle" fontSize="20" fill="hsl(45, 95%, 30%)">₦</text>
                  </g>
                  
                  {/* Financial icons */}
                  <g transform="translate(320, 200)">
                    <rect x="-20" y="-25" width="40" height="50" rx="4" fill="hsl(270, 60%, 60%)"/>
                    <rect x="-15" y="-20" width="30" height="3" fill="white"/>
                    <rect x="-15" y="-10" width="30" height="3" fill="white"/>
                    <rect x="-15" y="0" width="30" height="3" fill="white"/>
                  </g>
                  
                  {/* Chart bars */}
                  <g transform="translate(70, 220)">
                    <rect x="0" y="20" width="12" height="40" rx="2" fill="hsl(217, 91%, 60%)"/>
                    <rect x="18" y="10" width="12" height="50" rx="2" fill="hsl(270, 60%, 60%)"/>
                    <rect x="36" y="0" width="12" height="60" rx="2" fill="hsl(32, 95%, 58%)"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Everything you need to manage your finances
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Track Spending</h3>
              <p className="text-muted-foreground">
                Visualize where your money goes with beautiful charts and insights
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Set Budgets</h3>
              <p className="text-muted-foreground">
                Stay on track with smart budgeting tools and alerts
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Bank-Grade Security</h3>
              <p className="text-muted-foreground">
                Your data is encrypted and kept private with industry-leading security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <FinGuardLogo className="w-6 h-6" />
              <span>© 2024 FinGuard</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
