# FinGuard Personal Finance PWA - Design Guidelines

## Design Approach
**Selected Approach:** Reference-Based (FinTech Best Practices)  
Drawing inspiration from modern fintech apps like Revolut, N26, and Cash App - focusing on clarity, trust, and actionable insights. The design emphasizes data visualization and transaction clarity while maintaining a friendly, accessible interface for Nigerian users.

## Core Design Principles
1. **Financial Clarity First:** All monetary values prominently displayed with Naira (₦) symbol
2. **Actionable Insights:** Transform data into clear, actionable recommendations
3. **Trust & Security:** Visual cues emphasizing bank-grade security
4. **Mobile-First PWA:** Seamless experience across devices with bottom navigation on mobile

## Color Palette

**Primary Brand Colors:**
- Primary Purple: 270 60% 50% (#6F38C5)
- Primary Purple Hover: 270 60% 45%
- Background: 0 0% 98%
- Card Background: 0 0% 100%

**Functional Colors:**
- Success/Savings: 142 76% 36% 
- Warning/Budget Alert: 38 92% 50%
- Expense Red: 0 84% 60%
- Text Primary: 240 10% 15%
- Text Secondary: 240 5% 45%

**Category Colors (for charts/icons):**
- Food & Dining: 32 95% 58%
- Transport: 217 91% 60%
- Subscriptions: 271 81% 56%
- Shopping: 340 82% 52%
- Bills: 162 63% 50%

## Typography

**Font Stack:**
- Primary: 'Inter', system-ui, -apple-system, sans-serif
- Numeric: 'SF Mono', 'Roboto Mono', monospace (for amounts)

**Scale:**
- Hero/Headline: text-4xl font-bold (36px)
- Page Title: text-2xl font-semibold (24px)
- Card Title: text-lg font-semibold (18px)
- Body: text-base (16px)
- Caption/Meta: text-sm text-gray-500 (14px)
- Currency Amounts: text-xl font-semibold (20px) or larger in context

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Card padding: p-6
- Section spacing: space-y-6
- Button padding: px-8 py-3
- Icon margins: mr-3

**Responsive Breakpoints:**
- Mobile (base): 320-768px - Bottom tab navigation, single column
- Tablet (md): 768-1024px - Sidebar begins to appear
- Desktop (lg+): 1024px+ - Full sidebar navigation, multi-column layouts

**Container Strategy:**
- Mobile: Full width with px-4 padding
- Desktop: max-w-7xl mx-auto with sidebar (280px fixed)

## Component Library

### Navigation
**Mobile (PWA):**
- Fixed bottom tab bar with 4 icons: Dashboard, Insights, Budget, Profile
- Purple active state with icon fill
- Top header: Logo left, notification bell right

**Desktop:**
- Left sidebar (280px) with logo, navigation links, user profile at bottom
- Active state: purple background with rounded-lg

### Cards & Containers
**Data Card:**
- White background, rounded-2xl
- Shadow: shadow-sm hover:shadow-md transition
- Padding: p-6
- Border: Optional 1px border-gray-100

**Transaction Card:**
- Horizontal flex layout
- Left: Category icon (40px circle, colored background)
- Center: Merchant name (font-semibold), Category (text-sm text-gray-500)
- Right: Amount (₦) in primary text or expense red

**Alert/Insight Card:**
- Light purple background (270 60% 95%)
- Left border: 4px solid primary purple
- Icon: Light bulb or info icon
- Bold insight text with actionable message

### Buttons
**Primary Button:**
- Background: Primary Purple
- Text: White, font-semibold
- Padding: px-8 py-3
- Rounded: rounded-full
- Shadow: shadow-lg on hover
- Full width on mobile

**Secondary Button:**
- Border: 2px solid primary purple
- Text: Primary purple, font-semibold  
- Background: White
- Same padding/rounding as primary

**Bank Connection Button:**
- White card with bank logo left
- Bank name center-left
- Lock icon right (security indicator)
- Border hover state

### Data Visualization
**Donut Chart (Spending):**
- Center: Total spent amount in large text
- Segments: Category colors matching palette
- Legend below with color dots, category names, amounts
- Percentage labels on hover

**Budget Progress Bar:**
- Category name and icon left
- Horizontal bar showing spent/remaining
- Colors: Purple for spent, light gray for remaining
- Amount labels: ₦XX,XXX / ₦XX,XXX

**Balance Display:**
- Large currency amount (text-3xl font-bold)
- "Total Balance" label above in text-sm
- Card with subtle gradient or solid white

### Forms & Inputs
**Input Fields:**
- Border: 2px solid gray-200, focus:border-purple-500
- Rounded: rounded-lg
- Padding: px-4 py-3
- Placeholder: text-gray-400
- Currency inputs: Naira symbol prefix

**Bank Selection:**
- Grid of bank cards (2 columns mobile, 4 desktop)
- Each card: Bank logo, name, "Connect" state
- Selected state: Purple border-2

### Icons & Imagery
**Icon Strategy:**
- Heroicons for UI elements (outline weight)
- Category icons: Filled circles with white icons
- Bank logos: Actual Nigerian bank logos
- Size scale: 16px (small), 24px (standard), 40px (category)

**Image Placement:**
- Landing hero: Illustration of piggy bank/savings concept (right side on desktop, above CTA on mobile)
- Onboarding: Financial illustration showing app features
- Empty states: Friendly illustrations for no transactions/budgets

## Screen-Specific Guidelines

### Landing Page
- Hero section with tagline "Track smart. Spend wise. Live free."
- Illustration on right (desktop) or top (mobile)
- Two CTAs: "Get Started" (primary), "Sign Up/Log In" (secondary)
- Features section showing app capabilities
- Trust indicators: Bank-level security badges

### Dashboard
- Total balance card at top (prominent)
- Key insight/alert card below balance
- Spending donut chart in card
- Recent transactions list (5-8 items)
- Quick actions: Add Transaction, View All

### Spending Insights
- Full donut chart with current month selector
- Category breakdown with progress bars
- Month-over-month comparison
- Top spending categories list

### Budgeting
- Circular budget progress (overall)
- Category-wise budget bars
- Add/Edit budget controls
- Remaining budget alerts in warning color

### Bank Linking
- Nigerian banks grid: Access, First Bank, GTBank, UBA, Zenith, OPay, MTN MoMo
- Security message: "Your data is encrypted and secure"
- "Connect Bank Account" primary CTA
- Skip option available

### Profile/Settings
- User info card with avatar
- Settings list: Edit Profile, Linked Accounts, Security, Currency (₦)
- Dark mode toggle
- Logout in red

## Accessibility & Quality
- All interactive elements minimum 44px touch target
- Color contrast ratios 4.5:1 minimum
- Loading states for all async operations
- Error states in warning/error colors
- Success feedback with checkmarks
- Currency amounts always have ₦ prefix
- Responsive font scaling for readability

## Animation Guidelines
**Use sparingly:**
- Page transitions: Slide left/right (mobile), fade (desktop)
- Card hover: Subtle lift (translateY(-2px))
- Button press: Scale(0.98)
- Chart animations: Smooth draw-in on mount (1s ease)
- NO excessive motion or parallax effects