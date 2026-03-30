import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { HiMiniSparkles } from 'react-icons/hi2';
import bannerImage from '../assets/banner.png';
import playIcon from '../assets/Play.png';
import { products } from './data/products';

const navItems = ['Home', 'Products', 'Pricing', 'Support'];
const stats = [
  { value: '50K+', label: 'Active Customers' },
  { value: '200+', label: 'Premium Assets' },
  { value: '4.9', label: 'Average Rating' },
];
const tagClasses = {
  popular: 'bg-violet-100 text-violet-700',
  new: 'bg-emerald-100 text-emerald-700',
  'best seller': 'bg-amber-100 text-amber-700',
};

function App() {
  const [activeView, setActiveView] = useState('products');

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f8f5ff,#ffffff_45%)] text-slate-900">
      <header className="mx-auto max-w-7xl px-5 pt-6 md:px-8 lg:px-10">
        <nav className="flex flex-col gap-4 rounded-full border border-white/80 bg-white/90 px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="#home" className="font-outfit text-2xl font-extrabold text-slate-900">
              Digi<span className="text-violet-600">Tools</span>
            </a>

            <button
              type="button"
              className="btn btn-circle border-none bg-slate-100 text-slate-700 shadow-none hover:bg-slate-200 lg:hidden"
            >
              <div className="indicator">
                <FiShoppingCart className="text-lg" />
                <span className="badge indicator-item badge-secondary border-none bg-violet-600 text-white">0</span>
              </div>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-500">
            {navItems.map((item) => (
              <a key={item} href="#home" className="transition hover:text-violet-600">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              className="btn btn-circle border-none bg-slate-100 text-slate-700 shadow-none hover:bg-slate-200"
            >
              <div className="indicator">
                <FiShoppingCart className="text-lg" />
                <span className="badge indicator-item badge-secondary border-none bg-violet-600 text-white">0</span>
              </div>
            </button>
            <button
              type="button"
              className="btn rounded-full border-none bg-violet-600 px-6 text-white shadow-[0_12px_30px_rgba(124,58,237,0.35)] hover:bg-violet-700"
            >
              Buy Now
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-20"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
              <HiMiniSparkles />
              Premium tools built for speed and creativity
            </div>

            <h1 className="max-w-xl font-outfit text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl lg:text-6xl">
              Supercharge Your Digital Workflow
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Explore powerful digital tools that help you design faster, organize better, and launch your next project
              with more confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="btn h-13 rounded-full border-none bg-violet-600 px-8 text-white shadow-[0_14px_40px_rgba(124,58,237,0.35)] hover:bg-violet-700"
              >
                Shop Tools
              </button>
              <button
                type="button"
                className="btn h-13 rounded-full border border-slate-200 bg-white px-8 text-slate-700 shadow-none hover:border-violet-300 hover:bg-violet-50"
              >
                <img src={playIcon} alt="" className="h-4 w-4" />
                View Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-violet-300/25 blur-3xl"></div>
            <div className="absolute -bottom-6 right-8 h-28 w-28 rounded-full bg-fuchsia-300/25 blur-3xl"></div>

            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <img
                src={bannerImage}
                alt="A person using futuristic digital workflow tools"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(90deg,#6d28d9,#9333ea)]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-10 text-center text-white md:grid-cols-3 md:px-8 lg:px-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-outfit text-4xl font-extrabold">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-5 py-18 md:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">Premium collection</p>
            <h2 className="mt-4 font-outfit text-4xl font-extrabold text-slate-950 md:text-5xl">Premium Digital Tools</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Choose from curated digital products designed to make your workflow faster, cleaner, and more effective.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="rounded-full border border-slate-200 bg-white p-2 shadow-sm">
              <button
                type="button"
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeView === 'products' ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-600'
                }`}
                onClick={() => setActiveView('products')}
              >
                Products
              </button>
              <button
                type="button"
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeView === 'cart' ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-600'
                }`}
                onClick={() => setActiveView('cart')}
              >
                Cart (0)
              </button>
            </div>
          </div>

          <div className="mt-12">
            {activeView === 'products' ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <article
                    key={product.id}
                    className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.1)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50">
                        <img src={product.icon} alt="" className="h-8 w-8 object-contain" />
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${tagClasses[product.tagType]}`}>
                        {product.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-outfit text-2xl font-bold text-slate-900">{product.name}</h3>
                    <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">{product.description}</p>

                    <div className="mt-5 flex items-end gap-2">
                      <span className="font-outfit text-4xl font-extrabold text-slate-950">${product.price}</span>
                      <span className="pb-1 text-sm text-slate-500">/{product.period}</span>
                    </div>

                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Tag Type: {product.tagType}
                    </p>

                    <ul className="mt-6 space-y-3 text-sm text-slate-600">
                      {product.features.map((feature) => (
                        <li key={feature} className="rounded-xl bg-slate-50 px-3 py-2">
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="btn mt-8 h-12 w-full rounded-full border-none bg-violet-600 text-white shadow-[0_12px_30px_rgba(124,58,237,0.3)] hover:bg-violet-700"
                    >
                      Buy Now
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">Cart Preview</p>
                <h3 className="mt-3 font-outfit text-3xl font-bold text-slate-950">Your cart is empty</h3>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  The cart layout and checkout interactions will be added in later parts. For now, this toggle already
                  switches between Products and Cart views.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
