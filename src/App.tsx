const Icon = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center ${className}`}
    aria-hidden="true"
  >
    {children}
  </span>
)

const ArrowUpRight = () => (
  <svg viewBox="0 0 20 20" fill="none" className="size-5">
    <path d="M5 15 15 5m0 0H7m8 0v8" stroke="currentColor" strokeWidth="1.7" />
  </svg>
)

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" className="size-4">
    <path d="m5 10 3.2 3.2L15 6.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
)

const Spark = () => (
  <svg viewBox="0 0 20 20" fill="none" className="size-4">
    <path
      d="M10 2.5c.45 4.3 2.15 6 6.5 6.5-4.35.5-6.05 2.2-6.5 6.5C9.55 11.2 7.85 9.5 3.5 9 7.85 8.5 9.55 6.8 10 2.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
)

const Peso = () => (
  <svg viewBox="0 0 20 20" fill="none" className="size-5">
    <path d="M6 17V3h4.25a4.25 4.25 0 0 1 0 8.5H6M4 6h8M4 9h8" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

const Calendar = () => (
  <svg viewBox="0 0 20 20" fill="none" className="size-5">
    <rect x="3" y="4.5" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 2.5v4M13.5 2.5v4M3 8.5h14" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const People = () => (
  <svg viewBox="0 0 20 20" fill="none" className="size-5">
    <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2.5 16c.4-3.15 2.23-4.75 5.5-4.75s5.1 1.6 5.5 4.75M13 5.1c2 .2 3 1.15 3 2.9s-1 2.7-3 2.9M15 12c1.55.65 2.38 2 2.5 4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#" className="inline-flex items-center gap-2.5" aria-label="SoloForge home">
      <span className={`grid size-8 place-items-center text-white ${inverse ? 'bg-[#3b705f]' : 'bg-[#1e4b3c]'}`}>
        <svg viewBox="0 0 24 24" fill="none" className="size-5">
          <path d="M5 17h5l4-5H9l4-5h6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
        </svg>
      </span>
      <span className={`text-[19px] font-bold tracking-[-0.03em] ${inverse ? 'text-white' : 'text-[#17392e]'}`}>SoloForge</span>
    </a>
  )
}

const Stat = ({
  label,
  value,
  detail,
  accent,
}: {
  label: string
  value: string
  detail: string
  accent?: boolean
}) => (
  <div className={`border-r border-[#dfe5e0] px-5 py-4 last:border-r-0 ${accent ? 'bg-[#edf7ef]' : ''}`}>
    <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#65756d]">
      {label}
    </div>
    <div className={`text-xl font-bold tracking-[-0.03em] ${accent ? 'text-[#1e6e4d]' : 'text-[#18372d]'}`}>{value}</div>
    <div className="mt-1 text-xs text-[#75837c]">{detail}</div>
  </div>
)

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[720px]">
      <div className="overflow-hidden border border-[#ccd7d1] bg-white shadow-[0_18px_45px_rgba(25,57,46,0.10)]">
        <div className="flex items-center justify-between border-b border-[#e1e7e3] px-5 py-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.11em] text-[#728078]">30-day outlook</p>
            <p className="mt-0.5 text-sm font-bold text-[#193a30]">Cash overview</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#6d7b74]">
            <span className="size-2 bg-[#4e9b71]" />
            Updated today, 9:30 AM
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-[#dfe5e0]">
          <Stat label="Cash today" value="₱482,500" detail="Across 2 accounts" />
          <Stat label="Expected in" value="₱735,000" detail="8 customer payments" />
          <Stat label="Lowest point" value="₱126,800" detail="Projected on Jun 24" accent />
        </div>

        <div className="grid gap-0 md:grid-cols-[1.55fr_1fr]">
          <div className="border-b border-[#e1e7e3] p-5 md:border-b-0 md:border-r">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <p className="text-sm font-bold text-[#18372d]">Projected balance</p>
                <p className="mt-0.5 text-xs text-[#7b8881]">May 28 – Jun 27</p>
              </div>
              <div className="flex gap-3 text-[10px] text-[#6f7d76]">
                <span className="flex items-center gap-1"><i className="size-2 bg-[#2e7b58]" /> Forecast</span>
                <span className="flex items-center gap-1"><i className="size-2 bg-[#f1a654]" /> Watch</span>
              </div>
            </div>
            <div className="relative h-40">
              <div className="absolute inset-0 flex flex-col justify-between">
                {[1, 2, 3, 4].map((line) => <div key={line} className="border-t border-dashed border-[#e7ebe8]" />)}
              </div>
              <svg viewBox="0 0 420 150" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
                <path d="M0 50 C45 40 55 47 88 54 S140 71 168 59 S210 34 240 52 S278 112 310 115 S355 78 420 65" fill="none" stroke="#2e7b58" strokeWidth="3" />
                <circle cx="310" cy="115" r="5" fill="#fff" stroke="#f1a654" strokeWidth="3" />
              </svg>
              <div className="absolute bottom-[-18px] left-0 flex w-full justify-between text-[9px] text-[#8a958f]">
                <span>May 28</span><span>Jun 6</span><span>Jun 15</span><span>Jun 24</span><span>Jun 27</span>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold text-[#18372d]">Needs attention</p>
              <span className="bg-[#fff3e2] px-2 py-1 text-[10px] font-bold text-[#9b5c16]">3 items</span>
            </div>
            <div className="space-y-3">
              <div className="border-l-2 border-[#e49a49] bg-[#fffbf4] py-2 pl-3">
                <p className="text-xs font-semibold text-[#29453b]">Northstar Trading</p>
                <p className="mt-1 text-[11px] text-[#748179]">₱185,000 expected Jun 18</p>
                <p className="mt-1.5 text-[10px] font-semibold text-[#a7631c]">Follow up this week</p>
              </div>
              <div className="border-l-2 border-[#a8b8af] py-2 pl-3">
                <p className="text-xs font-semibold text-[#29453b]">Warehouse rent</p>
                <p className="mt-1 text-[11px] text-[#748179]">₱96,000 due Jun 22</p>
              </div>
              <div className="flex items-start gap-2 bg-[#eef5f1] p-3 text-[11px] leading-relaxed text-[#4d665b]">
                <Icon className="mt-0.5 text-[#2e7b58]"><Spark /></Icon>
                <p><strong className="text-[#294a3d]">AI summary:</strong> Confirm Northstar’s date to reduce uncertainty near Jun 24.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f4] text-[#18372d]">
      <header className="border-b border-[#dce3de] bg-[#f7f8f4]/95">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 sm:px-8">
          <Logo />
          <div className="flex items-center gap-5">
            <span className="hidden text-sm text-[#68776f] sm:inline">Already using SoloForge?</span>
            <a href="/sign-in" className="group inline-flex items-center gap-2 border border-[#b8c8c0] bg-white px-4 py-2.5 text-sm font-bold text-[#21493b] transition hover:border-[#21493b]">
              Sign in
              <Icon className="transition group-hover:translate-x-0.5"><ArrowUpRight /></Icon>
            </a>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.83fr_1.17fr] lg:py-24">
          <div className="max-w-[520px]">
            <div className="mb-7 inline-flex items-center gap-2 border-l-2 border-[#e19a4a] pl-3 text-xs font-bold uppercase tracking-[0.12em] text-[#52665c]">
              Built for Philippine B2B teams
            </div>
            <h1 className="text-[44px] font-bold leading-[1.02] tracking-[-0.045em] text-[#17392e] sm:text-[60px]">
              See what’s ahead. Act on cash flow.
            </h1>
            <p className="mt-6 max-w-[490px] text-lg leading-8 text-[#5e6e66]">
              Bring collections, expected payment dates, upcoming expenses, and a 30-day forecast into one practical action plan.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#how-it-helps" className="group inline-flex items-center justify-center gap-3 bg-[#1e4b3c] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#153b2f]">
                See how it helps
                <Icon className="transition group-hover:translate-x-0.5"><ArrowUpRight /></Icon>
              </a>
              <p className="text-xs leading-5 text-[#76847d]">For invited teams and existing users.<br />No public registration.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#d8e0db] pt-6 text-sm text-[#53665c]">
              {['30-day visibility', 'Peso-based planning', 'Human-reviewed updates'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Icon className="size-5 rounded-full bg-[#dcebe1] text-[#286849]"><Check /></Icon>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <DashboardPreview />
        </div>
      </section>

      <section id="how-it-helps" className="border-y border-[#dce3de] bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#b66d25]">From numbers to next steps</p>
              <h2 className="mt-4 max-w-[440px] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#17392e] sm:text-4xl">
                What it helps with
              </h2>
              <p className="mt-5 max-w-[420px] text-base leading-7 text-[#66756d]">
                Focus on the cash questions that need attention. Know which dates matter, what needs checking, and where your team should focus.
              </p>
            </div>
            <div className="grid border border-[#dbe3de] md:grid-cols-3">
              {[
                {
                  icon: <Peso />,
                  number: '01',
                  title: 'Bring the picture together',
                  body: 'View customer collections and upcoming expenses alongside your expected cash position.',
                },
                {
                  icon: <Calendar />,
                  number: '02',
                  title: 'Spot pressure early',
                  body: 'See possible low-cash dates in the next 30 days and plan which assumptions to verify.',
                },
                {
                  icon: <People />,
                  number: '03',
                  title: 'Turn insight into follow-up',
                  body: 'Organize who to contact and what to confirm. Your team decides when and how to act.',
                },
              ].map((item) => (
                <article key={item.number} className="group border-b border-[#dbe3de] p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                  <div className="mb-12 flex items-start justify-between">
                    <Icon className="size-10 bg-[#e8f0ea] text-[#2c6f50]">{item.icon}</Icon>
                    <span className="text-xs font-bold text-[#a1aca6]">{item.number}</span>
                  </div>
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-[#1b4033]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6c7972]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#f7f8f4]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#b66d25]">A practical weekly rhythm</p>
              <h2 className="mt-4 max-w-[570px] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#17392e] sm:text-4xl">
                How it works
              </h2>
            </div>
            <p className="max-w-[440px] text-sm leading-6 text-[#66756d]">
              SoloForge gives owners and finance staff a shared place to review assumptions, plan follow-ups, and record what actually happened.
            </p>
          </div>

          <div className="grid border-y border-[#ced9d3] md:grid-cols-4">
            {[
              ['01', 'Review', 'Check expected customer payments and upcoming operating expenses.'],
              ['02', 'Prioritize', 'Focus on the dates and amounts that could put pressure on cash.'],
              ['03', 'Follow up', 'Plan customer conversations and assign the next check-in to your team.'],
              ['04', 'Confirm', 'Record actual payments and update dates so the next forecast starts stronger.'],
            ].map(([step, title, body]) => (
              <article key={step} className="relative border-b border-[#ced9d3] py-7 pr-6 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                <span className="text-xs font-bold text-[#b66d25]">{step}</span>
                <h3 className="mt-8 text-xl font-bold tracking-[-0.025em] text-[#193b30]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6a7871]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="human-review" className="border-y border-[#dce3de] bg-white">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#b66d25]">AI-assisted, people-approved</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#17392e] sm:text-4xl">
              Human review and clarity
            </h2>
            <p className="mt-5 max-w-[430px] text-base leading-7 text-[#66756d]">
              AI can suggest; your team decides. SoloForge can summarize forecasts and suggest updates, but people review every change, confirm actual payments, and choose the next action.
            </p>
          </div>

          <div className="grid gap-px bg-[#d8e1dc] border border-[#d8e1dc] sm:grid-cols-2">
            <div className="bg-[#f2f7f3] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.11em] text-[#2d704f]">SoloForge helps you</p>
              <ul className="mt-5 space-y-4">
                {[
                  'Bring expected inflows and outflows into one view',
                  'Surface possible low-cash dates for review',
                  'Draft action items and forecast summaries with AI',
                  'Track team-confirmed dates and actual payments',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#415a4f]">
                    <Icon className="mt-0.5 size-5 bg-[#d9ebe0] text-[#286849]"><Check /></Icon>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#fafaf7] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.11em] text-[#7a837e]">Your team remains responsible for</p>
              <ul className="mt-5 space-y-4">
                {[
                  'Reviewing suggested changes before applying them',
                  'Choosing when and how to contact customers',
                  'Executing payments through your existing channels',
                  'Maintaining official accounting records',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#596861]">
                    <span className="mt-2 size-1.5 shrink-0 bg-[#a5afa9]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#183e32] text-white">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex max-w-[760px] items-start gap-4">
            <Icon className="mt-1 size-10 border border-[#54776a] text-[#a8dfbd]"><Spark /></Icon>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#a8d7b9]">AI-assisted, people-approved</p>
              <h2 className="mt-2 text-2xl font-bold tracking-[-0.025em]">Get help making sense of the forecast—not decisions made for you.</h2>
              <p className="mt-3 max-w-[720px] text-sm leading-6 text-[#c3d2cc]">
                SoloForge can summarize changes and suggest updates to dates or action items. Your team reviews every change and confirms actual customer payments.
              </p>
            </div>
          </div>
          <a href="/sign-in" className="inline-flex items-center justify-center gap-3 bg-[#f4aa56] px-6 py-3.5 text-sm font-bold text-[#18372d] transition hover:bg-[#ffc078]">
            Sign in to SoloForge <ArrowUpRight />
          </a>
        </div>
      </section>

      <footer className="bg-[#102f27] text-white">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_0.7fr_0.8fr]">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-[380px] text-sm leading-6 text-[#a9bdb5]">
              A cash-flow action planner for small Philippine B2B businesses that want clearer forecasts and more focused follow-ups.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6f9285]">Product</p>
            <nav className="mt-5 flex flex-col items-start gap-3 text-sm text-[#c2d1cb]" aria-label="Footer product links">
              <a href="#how-it-works" className="transition hover:text-white">How it works</a>
              <a href="#how-it-helps" className="transition hover:text-white">What it helps with</a>
              <a href="#human-review" className="transition hover:text-white">Human review and clarity</a>
              <a href="/sign-in" className="transition hover:text-white">Sign in</a>
            </nav>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6f9285]">Good to know</p>
            <p className="mt-5 text-sm leading-6 text-[#a9bdb5]">
              Access is currently limited to invited teams and existing users. Public registration is not available.
            </p>
          </div>
        </div>
        <div className="border-t border-[#294a40]">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-5 py-6 text-xs text-[#829b91] sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <span>© 2025 SoloForge. All rights reserved.</span>
            <span>Planning support, not accounting, collections automation, or payment execution.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

function SignInPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f4] text-[#18372d]">
      <div className="grid min-h-screen lg:grid-cols-[0.92fr_1.08fr]">
        <section className="flex flex-col px-5 py-6 sm:px-10 sm:py-8 lg:px-14 xl:px-20">
          <div className="flex items-center justify-between">
            <Logo />
            <a href="/" className="text-sm font-semibold text-[#607169] transition hover:text-[#214b3c]">
              Back to home
            </a>
          </div>

          <div className="mx-auto flex w-full max-w-[430px] flex-1 flex-col justify-center py-12">
            <div className="mb-9">
              <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#b66d25]">Welcome back</p>
              <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#17392e]">Sign in to SoloForge</h1>
              <p className="mt-3 text-sm leading-6 text-[#66756d]">
                Access your team’s cash forecast, expected collections, and follow-up plan.
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={(event) => {
                event.preventDefault()
                window.location.href = '/dashboard'
              }}
            >
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-[#29473c]">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  className="w-full border border-[#bccac3] bg-white px-4 py-3.5 text-sm text-[#18372d] outline-none transition placeholder:text-[#98a39e] focus:border-[#2d7052] focus:ring-2 focus:ring-[#d7e9de]"
                />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-bold text-[#29473c]">Password</label>
                  <a href="/forgot-password" className="text-xs font-semibold text-[#2b6d4e] hover:underline">Forgot password?</a>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  className="w-full border border-[#bccac3] bg-white px-4 py-3.5 text-sm text-[#18372d] outline-none transition placeholder:text-[#98a39e] focus:border-[#2d7052] focus:ring-2 focus:ring-[#d7e9de]"
                />
              </div>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-[#596b62]">
                <input type="checkbox" name="remember" className="size-4 accent-[#246247]" />
                Keep me signed in on this device
              </label>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 bg-[#1e4b3c] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#153b2f] focus:outline-none focus:ring-2 focus:ring-[#1e4b3c] focus:ring-offset-2"
              >
                Sign in
                <ArrowUpRight />
              </button>
            </form>

            <div className="mt-7 border-t border-[#d7dfda] pt-5">
              <p className="text-xs leading-5 text-[#7b8881]">
                SoloForge is available to invited teams and existing users. There is no public registration.
              </p>
            </div>
          </div>

          <p className="text-xs text-[#89958f]">© 2025 SoloForge. Planning support, not accounting or payment execution.</p>
        </section>

        <section className="relative hidden overflow-hidden bg-[#183e32] p-10 text-white lg:flex lg:flex-col lg:justify-center xl:p-16">
          <div className="relative mx-auto w-full max-w-[610px]">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9fd4b4]">30-day cash view</p>
            <h2 className="mt-4 max-w-[520px] text-3xl font-bold leading-tight tracking-[-0.035em]">
              See the gap before it becomes urgent.
            </h2>
            <p className="mt-5 max-w-[540px] text-base leading-7 text-[#bed0c9]">
              Expected payments stay separate from confirmed receipts, so you know what still needs a follow-up.
            </p>

            <div className="mt-10 border border-[#46695c] bg-[#f8faf7] p-5 text-[#18372d]">
              <div className="flex items-center justify-between border-b border-[#dbe3de] pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#76847d]">Cash outlook</p>
                  <p className="mt-1 text-sm font-bold">Next 30 days</p>
                </div>
                <span className="bg-[#fff0dc] px-2.5 py-1.5 text-[10px] font-bold text-[#9b5c16]">1 period to review</span>
              </div>

              <div className="grid grid-cols-3 gap-px bg-[#dbe3de]">
                <div className="bg-white px-3 py-4">
                  <p className="text-[10px] text-[#7b8881]">Expected</p>
                  <p className="mt-1 text-sm font-bold text-[#21483a]">₱735,000</p>
                </div>
                <div className="bg-white px-3 py-4">
                  <p className="text-[10px] text-[#7b8881]">Received</p>
                  <p className="mt-1 text-sm font-bold text-[#21483a]">₱420,000</p>
                </div>
                <div className="bg-[#edf6ef] px-3 py-4">
                  <p className="text-[10px] text-[#587265]">Lowest point</p>
                  <p className="mt-1 text-sm font-bold text-[#26704e]">₱126,800</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="border-l-2 border-[#e49a49] bg-[#fffbf4] p-3">
                  <p className="text-xs font-bold">Payment date to confirm</p>
                  <p className="mt-1 text-[11px] text-[#718078]">Northstar Trading · ₱185,000</p>
                </div>
                <div className="border-l-2 border-[#4e9b71] bg-[#eff7f1] p-3">
                  <p className="text-xs font-bold">Follow-up planned</p>
                  <p className="mt-1 text-[11px] text-[#718078]">Finance admin · Wednesday</p>
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-[#44675a] pt-5 text-sm leading-6 text-[#b9ccc4]">
              <p><strong className="font-semibold text-white">People stay in control.</strong> AI can summarize the outlook, but your team reviews changes and confirms actual payments.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function App() {
  if (window.location.pathname === '/dashboard') return <Dashboard />
  return window.location.pathname === '/sign-in' ? <SignInPage /> : <LandingPage />
}

export default App
import Dashboard from './Dashboard'
