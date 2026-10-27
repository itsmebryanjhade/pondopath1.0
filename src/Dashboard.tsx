import { useState } from 'react'

const money = (value: number) => `PHP ${value.toLocaleString('en-PH')}`

function Brand() {
  return (
    <a href="/dashboard" className="inline-flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#9bc9ae]" aria-label="SoloForge dashboard">
      <span className="grid size-8 place-items-center bg-[#1e4b3c] text-white">
        <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
          <path d="M5 17h5l4-5H9l4-5h6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-[#17392e]">SoloForge</span>
    </a>
  )
}

function StatusDot({ tone }: { tone: 'green' | 'amber' | 'blue' | 'stone' }) {
  const colors = { green: 'bg-[#398061]', amber: 'bg-[#d98b34]', blue: 'bg-[#5594b2]', stone: 'bg-[#8d9993]' }
  return <span className={`size-2 shrink-0 ${colors[tone]}`} aria-hidden="true" />
}

function Skeleton() {
  return (
    <div className="min-h-screen bg-[#f7f8f4] p-6 text-[#53665c]" aria-busy="true" aria-live="polite">
      <div className="mx-auto max-w-[1320px]">
        <div className="h-10 w-48 animate-pulse bg-[#dde5e0]" />
        <p className="mt-5 text-sm">Loading cash flow overview…</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => <div key={item} className="h-32 animate-pulse border border-[#dde5e0] bg-white" />)}
        </div>
        <div className="mt-6 h-80 animate-pulse border border-[#dde5e0] bg-white" />
      </div>
    </div>
  )
}

const summary = [
  ['Available cash', 482500, 'Actual balance · 07 Jun 2025', 'green'],
  ['Expected receipts', 735000, 'Expected · next 30 days', 'blue'],
  ['Upcoming expenses', 890700, 'Due · next 30 days', 'stone'],
  ['Projected cash', 326800, 'Forecast · 06 Jul 2025', 'amber'],
] as const

function EmptyDashboard() {
  return (
    <section className="border border-[#d8e0db] bg-white px-6 py-16 text-center">
      <div className="mx-auto grid size-12 place-items-center bg-[#e7f0ea] text-[#286849]">
        <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
          <path d="M4 18V9m5 9V5m5 13v-7m5 7V3" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      </div>
      <h2 className="mt-5 text-xl font-bold text-[#193a30]">No cash-flow records yet</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#6c7972]">
        Add an invoice, verified receipt, or expense to begin a 30-day projection. SoloForge will not invent missing amounts.
      </p>
      <button className="mt-6 bg-[#1e4b3c] px-5 py-3 text-sm font-bold text-white hover:bg-[#153b2f] focus:outline-none focus:ring-2 focus:ring-[#8dbda3] focus:ring-offset-2">
        Add first invoice
      </button>
    </section>
  )
}

export default function Dashboard() {
  const requestedState = new URLSearchParams(window.location.search).get('state')
  const [errorVisible, setErrorVisible] = useState(requestedState === 'error')
  const [draftVisible, setDraftVisible] = useState(true)

  if (requestedState === 'loading') return <Skeleton />

  const isEmpty = requestedState === 'empty'

  return (
    <main className="min-h-screen bg-[#f7f8f4] text-[#18372d]">
      <header className="border-b border-[#d7e0da] bg-white">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-6">
            <Brand />
            <span className="hidden h-6 w-px bg-[#dbe2de] sm:block" />
            <div>
              <p className="text-sm font-bold text-[#24453a]">Aguinaldo Office Supplies, Inc.</p>
              <p className="text-xs text-[#77837d]">Fixed business workspace</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-xs text-[#66756d]">
            <div><span className="font-semibold text-[#2b493e]">07 June 2025</span><br />Asia/Manila</div>
            <div><span className="font-semibold text-[#2b493e]">Updated 09:42 PHT</span><br />7 minutes ago</div>
            <div><span className="font-semibold text-[#2b493e]">Mara Santos</span><br />Owner</div>
            <a href="/" className="border border-[#bdcac3] px-3 py-2 font-bold text-[#294b3e] hover:border-[#294b3e] focus:outline-none focus:ring-2 focus:ring-[#9bc9ae]">Sign out</a>
          </div>
        </div>
      </header>

      <nav className="border-b border-[#d7e0da] bg-white" aria-label="Main navigation">
        <div className="mx-auto flex max-w-[1320px] gap-7 overflow-x-auto px-5 sm:px-8">
          {['Overview', 'Collections', 'Expenses', 'Cash forecast', 'Follow-ups'].map((item, index) => (
            <a key={item} href={index === 0 ? '#overview' : `#${item.toLowerCase().replace(' ', '-')}`} className={`whitespace-nowrap border-b-2 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#9bc9ae] ${index === 0 ? 'border-[#246348] text-[#204d3c]' : 'border-transparent text-[#697770] hover:text-[#254c3d]'}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-[1320px] px-5 py-8 sm:px-8" id="overview">
        <section className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#a7631c]">Overview</p>
            <h1 className="mt-2 text-3xl font-bold tracking-[-0.035em] text-[#17392e] sm:text-4xl">Cash flow overview</h1>
            <p className="mt-2 text-sm text-[#66756d]">Actuals and projections for Aguinaldo Office Supplies, Inc.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="border border-[#b9c7c0] bg-white px-4 py-2.5 text-sm font-bold hover:border-[#315b4b] focus:outline-none focus:ring-2 focus:ring-[#9bc9ae]">Add invoice</button>
            <button className="border border-[#b9c7c0] bg-white px-4 py-2.5 text-sm font-bold hover:border-[#315b4b] focus:outline-none focus:ring-2 focus:ring-[#9bc9ae]">Record verified receipt</button>
            <button className="bg-[#1e4b3c] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#153b2f] focus:outline-none focus:ring-2 focus:ring-[#8dbda3] focus:ring-offset-2">Add expense</button>
          </div>
        </section>

        {errorVisible && (
          <section className="mt-6 flex flex-col justify-between gap-4 border border-[#dfb36f] bg-[#fff8eb] p-4 sm:flex-row sm:items-center" role="alert">
            <div>
              <p className="text-sm font-bold text-[#744712]">Some receipt details could not be loaded</p>
              <p className="mt-1 text-sm text-[#795f3e]">The forecast is showing the last saved values. No records were changed.</p>
            </div>
            <button onClick={() => setErrorVisible(false)} className="self-start border border-[#b67a31] px-3 py-2 text-sm font-bold text-[#704410] focus:outline-none focus:ring-2 focus:ring-[#e6be80]">Try again</button>
          </section>
        )}

        {!isEmpty && (
          <section className="mt-6 grid border border-[#e1bd82] bg-[#fff9ee] md:grid-cols-[1.1fr_0.9fr]" aria-labelledby="attention-heading">
            <div className="p-5">
              <div className="flex items-center gap-2">
                <StatusDot tone="amber" />
                <h2 id="attention-heading" className="text-sm font-bold text-[#68410f]">Needs attention</h2>
              </div>
              <p className="mt-3 text-lg font-bold text-[#513817]">Possible shortfall of PHP 84,500 on 18 June 2025</p>
              <p className="mt-2 text-sm leading-6 text-[#796243]">PHP 185,000 from Northstar Trading is expected on 18 June but is not yet received.</p>
            </div>
            <div className="border-t border-[#ead5b2] p-5 md:border-l md:border-t-0">
              <p className="text-sm font-bold text-[#68410f]">Forecast quality needs review</p>
              <ul className="mt-2 space-y-1.5 text-sm text-[#796243]">
                <li>• 2 expected payment dates have not been confirmed in 14 days</li>
                <li>• June warehouse utilities are still missing</li>
              </ul>
            </div>
          </section>
        )}

        <section className="mt-6 grid border border-[#d8e0db] bg-white sm:grid-cols-2 lg:grid-cols-4" aria-label="Cash summary">
          {(isEmpty ? summary.map(([label, , period, tone]) => [label, 0, period, tone] as const) : summary).map(([label, value, period, tone]) => (
            <div key={label} className="border-b border-[#dfe5e1] p-5 last:border-b-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#6f7c75]"><StatusDot tone={tone} />{label}</div>
              <p className="mt-3 text-2xl font-bold tracking-tight text-[#193a30]">{money(value)}</p>
              <p className="mt-1 text-xs text-[#7b8781]">{period}</p>
            </div>
          ))}
        </section>

        {isEmpty ? <div className="mt-6"><EmptyDashboard /></div> : (
          <>
            <section id="cash-forecast" className="mt-6 border border-[#d8e0db] bg-white">
              <div className="flex flex-col justify-between gap-3 border-b border-[#dfe5e1] p-5 sm:flex-row sm:items-start">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-[#193a30]">30-day cash forecast</h2>
                  <p className="mt-1 text-sm text-[#6d7973]">07 June–06 July 2025 · Daily closing balance</p>
                </div>
                <p className="max-w-md text-xs leading-5 text-[#7c8882]">Projection depends on entered payment dates, expenses, and available cash. <a href="#records" className="font-bold text-[#286348] underline">Review linked records</a></p>
              </div>
              <div className="grid lg:grid-cols-[1fr_300px]">
                <div className="border-b border-[#e0e6e2] p-5 lg:border-b-0 lg:border-r">
                  <div className="relative h-64">
                    <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-[#88948e]">
                      {[['PHP 600k', 1], ['PHP 400k', 2], ['PHP 200k', 3], ['PHP 0', 4]].map(([label]) => <div key={label as string} className="flex items-center gap-2"><span className="w-14">{label}</span><i className="flex-1 border-t border-dashed border-[#e1e6e3]" /></div>)}
                    </div>
                    <svg viewBox="0 0 800 220" preserveAspectRatio="none" className="absolute bottom-5 left-16 h-[210px] w-[calc(100%-4rem)]" role="img" aria-label="Projected daily cash balance falls to negative PHP 84,500 on June 18, then recovers after expected receipts">
                      <path d="M0 45 L70 50 L125 65 L170 82 L220 177 L260 184 L305 100 L350 88 L410 115 L465 125 L510 75 L570 91 L625 64 L680 78 L740 61 L800 70" fill="none" stroke="#2d7453" strokeWidth="3" />
                      <line x1="0" y1="165" x2="800" y2="165" stroke="#d98b34" strokeDasharray="5 5" />
                      <circle cx="260" cy="184" r="6" fill="#fff" stroke="#d98b34" strokeWidth="4" />
                    </svg>
                    <div className="absolute bottom-0 left-16 right-0 flex justify-between text-[10px] text-[#89958f]"><span>07 Jun</span><span>14 Jun</span><span>21 Jun</span><span>28 Jun</span><span>06 Jul</span></div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-5 text-xs text-[#66756d]">
                    <span className="flex items-center gap-2"><StatusDot tone="green" />Projected balance</span>
                    <span className="flex items-center gap-2"><StatusDot tone="amber" />Shortfall threshold</span>
                  </div>
                </div>
                <div className="p-5" id="records">
                  <h3 className="text-sm font-bold">Key forecast records</h3>
                  <div className="mt-4 space-y-4">
                    {[['12 Jun', '+ PHP 240,000', 'Caldera Foods · INV-1042', 'blue'], ['15 Jun', '− PHP 196,000', 'Payroll · June first half', 'stone'], ['18 Jun', '+ PHP 185,000', 'Northstar Trading · expected', 'blue'], ['22 Jun', '− PHP 96,000', 'Warehouse rent', 'stone']].map(([date, amount, record, tone]) => (
                      <a href="#" key={record} className="grid grid-cols-[48px_1fr] gap-3 border-b border-[#edf0ee] pb-3 last:border-b-0 focus:outline-none focus:ring-2 focus:ring-[#9bc9ae]">
                        <span className="text-xs text-[#78847e]">{date}</span>
                        <span><strong className={`block text-sm ${tone === 'blue' ? 'text-[#397f9f]' : 'text-[#354b42]'}`}>{amount}</strong><small className="mt-0.5 block text-xs text-[#748079]">{record}</small></span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <section id="collections" className="border border-[#d8e0db] bg-white">
                <div className="border-b border-[#dfe5e1] p-5"><h2 className="text-lg font-bold">Collections and commitments</h2><p className="mt-1 text-xs text-[#78847e]">Expected amounts are not recorded as received cash.</p></div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead className="bg-[#f6f8f5] text-xs uppercase tracking-wide text-[#76827c]"><tr><th className="px-5 py-3">Customer</th><th className="px-3 py-3">Status</th><th className="px-3 py-3">Date</th><th className="px-5 py-3 text-right">Amount</th></tr></thead>
                    <tbody className="divide-y divide-[#e6ebe8]">
                      <tr><td className="px-5 py-4 font-semibold">Northstar Trading</td><td className="px-3 py-4"><span className="bg-[#e9f3f7] px-2 py-1 text-xs font-bold text-[#39758f]">Promised</span></td><td className="px-3 py-4 text-[#69766f]">18 Jun</td><td className="px-5 py-4 text-right font-bold">{money(185000)}</td></tr>
                      <tr><td className="px-5 py-4 font-semibold">Caldera Foods</td><td className="px-3 py-4"><span className="bg-[#fff1dc] px-2 py-1 text-xs font-bold text-[#996020]">Overdue 6d</span></td><td className="px-3 py-4 text-[#69766f]">01 Jun</td><td className="px-5 py-4 text-right font-bold">{money(240000)}</td></tr>
                      <tr><td className="px-5 py-4 font-semibold">Luna Medical</td><td className="px-3 py-4"><span className="bg-[#edf1ee] px-2 py-1 text-xs font-bold text-[#5f6d66]">Unpaid</span></td><td className="px-3 py-4 text-[#69766f]">26 Jun</td><td className="px-5 py-4 text-right font-bold">{money(310000)}</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="expenses" className="border border-[#d8e0db] bg-white">
                <div className="border-b border-[#dfe5e1] p-5"><h2 className="text-lg font-bold">Upcoming obligations</h2><p className="mt-1 text-xs text-[#78847e]">Due in the next 30 days.</p></div>
                <div className="divide-y divide-[#e6ebe8]">
                  {[['Payroll', '15 Jun 2025', 196000], ['Warehouse rent', '22 Jun 2025', 96000], ['Supplier payment · PaperWorks', '25 Jun 2025', 214500], ['VAT and withholding taxes', '30 Jun 2025', 148200]].map(([name, date, amount]) => (
                    <div key={name as string} className="flex items-center justify-between gap-4 px-5 py-4"><div><p className="text-sm font-semibold">{name}</p><p className="mt-1 text-xs text-[#748079]">Due {date}</p></div><p className="text-sm font-bold">{money(amount as number)}</p></div>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <section id="follow-ups" className="border border-[#d8e0db] bg-white">
                <div className="border-b border-[#dfe5e1] p-5"><h2 className="text-lg font-bold">Follow-ups</h2></div>
                <div className="divide-y divide-[#e6ebe8]">
                  {[['Confirm payment date with Northstar', 'Due today, 3:00 PM PHT', 'Mara Santos'], ['Send statement of account to Caldera', 'Due 09 Jun 2025', 'Leo Cruz'], ['Verify Luna Medical purchase order', 'Due 11 Jun 2025', 'Mara Santos']].map(([action, due, owner]) => (
                    <div key={action} className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_150px] sm:items-center"><div><p className="text-sm font-semibold">{action}</p><p className="mt-1 text-xs text-[#a4621d]">{due}</p></div><p className="text-xs text-[#6c7972]">Owner: <strong className="text-[#304b40]">{owner}</strong></p></div>
                  ))}
                </div>
              </section>
              <section className="border border-[#d8e0db] bg-white">
                <div className="border-b border-[#dfe5e1] p-5"><h2 className="text-lg font-bold">Recent activity</h2></div>
                <ol className="space-y-5 p-5">
                  <li className="text-sm"><p><strong>Receipt RCPT-224</strong> marked verified</p><p className="mt-1 text-xs text-[#7b8781]">Leo Cruz · Today, 09:42 PHT</p></li>
                  <li className="text-sm"><p>Northstar expected date corrected from 15 to 18 Jun</p><p className="mt-1 text-xs text-[#7b8781]">Mara Santos · Today, 09:14 PHT</p></li>
                  <li className="text-sm"><p>Payroll expense updated to {money(196000)}</p><p className="mt-1 text-xs text-[#7b8781]">Leo Cruz · 06 Jun, 16:28 PHT</p></li>
                </ol>
              </section>
            </div>

            <section className="mt-6 grid border border-[#8eaa9e] bg-[#eef5f1] lg:grid-cols-[1.1fr_0.9fr]" aria-labelledby="ai-heading">
              <div className="border-b border-[#cddbd4] p-5 lg:border-b-0 lg:border-r">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#367256]">Forecast explanation</p>
                <h2 id="ai-heading" className="mt-2 text-lg font-bold">Why 18 June needs attention</h2>
                <p className="mt-3 text-sm leading-6 text-[#536a60]">Payroll of {money(196000)} and supplier obligations are due before Northstar’s {money(185000)} expected payment. If Northstar pays after 18 June, projected cash may fall to negative {money(84500)}.</p>
                <p className="mt-3 text-xs text-[#6e7e77]">Based on <a href="#records" className="font-bold underline">4 linked forecast records</a>. This explanation does not change any record.</p>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3"><h3 className="text-sm font-bold">Proposed reminder draft</h3><span className="bg-white px-2 py-1 text-[10px] font-bold uppercase text-[#65766e]">Not sent</span></div>
                {draftVisible ? (
                  <>
                    <blockquote className="mt-3 border-l-2 border-[#76a68e] pl-3 text-sm leading-6 text-[#455e53]">Good morning. We’re checking the expected payment date for invoice INV-1038 worth {money(185000)}. Could you confirm whether 18 June still works?</blockquote>
                    <div className="mt-4 flex gap-2">
                      <button className="bg-[#1e4b3c] px-4 py-2 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-[#8dbda3] focus:ring-offset-2">Open draft for review</button>
                      <button onClick={() => setDraftVisible(false)} className="border border-[#aebeb6] bg-white px-4 py-2 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#8dbda3]">Dismiss suggestion</button>
                    </div>
                    <p className="mt-3 text-xs text-[#6f7f78]">SoloForge will not send this message automatically.</p>
                  </>
                ) : <p className="mt-5 text-sm text-[#64736c]">Draft dismissed. No message was sent and no records were changed.</p>}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  )
}
