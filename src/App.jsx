import { useMemo, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FiCheckCircle, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { HiMiniSparkles } from 'react-icons/hi2';
import bannerImage from '../assets/banner.png';
import playIcon from '../assets/Play.png';
import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';
import { products } from './data/products';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Support', href: '#support' },
];

const stats = [
  { value: '50K+', label: 'Active Customers' },
  { value: '200+', label: 'Premium Assets' },
  { value: '4.9', label: 'Average Rating' },
];

const steps = [
  {
    title: 'Create Account',
    description: 'Sign up in moments and unlock a clean dashboard for managing your selected digital tools.',
    icon: userIcon,
  },
  {
    title: 'Choose Products',
    description: 'Compare features, pricing, and tags so you can pick the resources that fit your workflow best.',
    icon: packageIcon,
  },
  {
    title: 'Start Creating',
    description: 'Download your tools instantly and begin building faster with ready-to-use premium assets.',
    icon: rocketIcon,
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$9',
    description: 'A practical entry plan for students and solo creators building a reliable tool stack.',
    features: ['Access to selected tools', 'Monthly updates', 'Standard email support'],
    featured: false,
  },
  {
    name: 'Professional',
    price: '$25',
    description: 'Best for freelancers and small teams who need premium assets and consistent workflow speed.',
    features: ['Access to core premium tools', 'Priority product updates', 'Weekly fresh resources'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'Designed for agencies managing multiple brands, clients, and collaborative production systems.',
    features: ['Unlimited team usage', 'Dedicated support access', 'Advanced workflow bundles'],
    featured: false,
  },
];

const tagClasses = {
  popular: 'bg-violet-100 text-violet-700',
  new: 'bg-emerald-100 text-emerald-700',
  'best seller': 'bg-amber-100 text-amber-700',
};

function App() {
  const [activeView, setActiveView] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  const totalPrice = useMemo(
    () => cartItems.reduce((total, item) => total + item.price, 0),
    [cartItems]
  );

  const addToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product]);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (cartIndex) => {
    setCartItems((currentItems) => {
      const removedItem = currentItems[cartIndex];
      if (!removedItem) {
        return currentItems;
      }

      toast.info(`${removedItem.name} removed from cart`);
      return currentItems.filter((_, index) => index !== cartIndex);
    });
  };

  const handleCheckout = () => {
    if (!cartItems.length) {
      toast.error('Your cart is already empty');
      return;
    }

    setCartItems([]);
    setActiveView('cart');
    toast.success('Proceed to checkout complete. Cart cleared successfully.');
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f8f5ff,#ffffff_45%)] text-slate-900">
      <ToastContainer
        position="top-right"
        autoClose={2200}
        newestOnTop
        hideProgressBar={false}
        pauseOnHover={false}
      />

      <header className="mx-auto max-w-7xl px-5 pt-6 md:px-8 lg:px-10">
        <nav className="flex flex-col gap-4 rounded-full border border-white/80 bg-white/90 px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="#home" className="font-outfit text-2xl font-extrabold text-slate-900">
              Digi<span className="text-violet-600">Tools</span>
            </a>

            <button
              type="button"
              className="btn btn-circle border-none bg-slate-100 text-slate-700 shadow-none hover:bg-slate-200 lg:hidden"
              onClick={() => setActiveView('cart')}
            >
              <div className="indicator">
                <FiShoppingCart className="text-lg" />
                <span className="badge indicator-item badge-secondary border-none bg-violet-600 text-white">
                  {cartItems.length}
                </span>
              </div>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-500">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-violet-600">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              className="btn btn-circle border-none bg-slate-100 text-slate-700 shadow-none hover:bg-slate-200"
              onClick={() => setActiveView('cart')}
            >
              <div className="indicator">
                <FiShoppingCart className="text-lg" />
                <span className="badge indicator-item badge-secondary border-none bg-violet-600 text-white">
                  {cartItems.length}
                </span>
              </div>
            </button>
            <a
              href="#products"
              className="btn rounded-full border-none bg-violet-600 px-6 text-white shadow-[0_12px_30px_rgba(124,58,237,0.35)] hover:bg-violet-700"
              onClick={() => setActiveView('products')}
            >
              Buy Now
            </a>
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
              <a
                href="#products"
                className="btn h-13 rounded-full border-none bg-violet-600 px-8 text-white shadow-[0_14px_40px_rgba(124,58,237,0.35)] hover:bg-violet-700"
                onClick={() => setActiveView('products')}
              >
                Shop Tools
              </a>
              <a
                href="#steps"
                className="btn h-13 rounded-full border border-slate-200 bg-white px-8 text-slate-700 shadow-none hover:border-violet-300 hover:bg-violet-50"
              >
                <img src={playIcon} alt="" className="h-4 w-4" />
                View Demo
              </a>
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
                Cart ({cartItems.length})
              </button>
            </div>
          </div>

          <div className="mt-12">
            {activeView === 'products' ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => {
                  const isAdded = cartItems.some((item) => item.id === product.id);

                  return (
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
                          <li key={feature} className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2">
                            <FiCheckCircle className="text-violet-600" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        className="btn mt-8 h-12 w-full rounded-full border-none bg-violet-600 text-white shadow-[0_12px_30px_rgba(124,58,237,0.3)] hover:bg-violet-700"
                        onClick={() => addToCart(product)}
                      >
                        {isAdded ? 'Added to Cart' : 'Buy Now'}
                      </button>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:p-8">
                <h3 className="font-outfit text-3xl font-bold text-slate-950">Your Cart</h3>

                {cartItems.length ? (
                  <>
                    <div className="mt-8 space-y-4">
                      {cartItems.map((item, index) => (
                        <div
                          key={`${item.id}-${index}`}
                          className="flex flex-col gap-4 rounded-[1.5rem] bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                              <img src={item.icon} alt="" className="h-8 w-8 object-contain" />
                            </div>
                            <div>
                              <p className="font-outfit text-xl font-semibold text-slate-900">{item.name}</p>
                              <p className="text-sm text-slate-500">${item.price}</p>
                            </div>
                          </div>

                          <button
                            type="button"
                            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-rose-500 transition hover:text-rose-600 sm:self-center"
                            onClick={() => removeFromCart(index)}
                          >
                            <FiTrash2 />
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between text-lg font-medium text-slate-600">
                      <p>Total:</p>
                      <p className="font-outfit text-3xl font-extrabold text-slate-950">${totalPrice}</p>
                    </div>

                    <button
                      type="button"
                      className="btn mt-8 h-14 w-full rounded-full border-none bg-[linear-gradient(90deg,#6d28d9,#c026d3)] text-white shadow-[0_16px_40px_rgba(124,58,237,0.35)] hover:opacity-95"
                      onClick={handleCheckout}
                    >
                      Proceed To Checkout
                    </button>
                  </>
                ) : (
                  <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
                    <FiShoppingCart className="mx-auto text-4xl text-violet-500" />
                    <p className="mt-4 font-outfit text-2xl font-bold text-slate-900">Your cart is empty</p>
                    <p className="mt-2 text-slate-600">
                      Browse the premium tools collection and add the products you want to purchase.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <section id="steps" className="mx-auto max-w-7xl px-5 py-10 md:px-8 lg:px-10 lg:py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">Simple process</p>
            <h2 className="mt-4 font-outfit text-4xl font-extrabold text-slate-950 md:text-5xl">Get Started In 3 Steps</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="relative rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
              >
                <span className="absolute -top-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-violet-50">
                  <img src={step.icon} alt="" className="h-8 w-8 object-contain" />
                </div>
                <h3 className="mt-6 font-outfit text-2xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-5 py-18 md:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">Flexible plans</p>
            <h2 className="mt-4 font-outfit text-4xl font-extrabold text-slate-950 md:text-5xl">Simple, Transparent Pricing</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] border p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] ${
                  plan.featured
                    ? 'border-violet-200 bg-[linear-gradient(180deg,#7c3aed,#5b21b6)] text-white'
                    : 'border-slate-200 bg-white text-slate-900'
                }`}
              >
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${plan.featured ? 'text-violet-100' : 'text-violet-600'}`}>
                  {plan.name}
                </p>
                <p className="mt-4 font-outfit text-5xl font-extrabold">{plan.price}</p>
                <p className={`mt-4 text-sm leading-7 ${plan.featured ? 'text-white/80' : 'text-slate-600'}`}>{plan.description}</p>
                <ul className={`mt-6 space-y-3 text-sm ${plan.featured ? 'text-white/90' : 'text-slate-600'}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <FiCheckCircle className={plan.featured ? 'text-white' : 'text-violet-600'} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`btn mt-8 h-12 w-full rounded-full border-none ${
                    plan.featured
                      ? 'bg-white text-violet-700 shadow-none hover:bg-violet-50'
                      : 'bg-violet-600 text-white shadow-[0_12px_30px_rgba(124,58,237,0.3)] hover:bg-violet-700'
                  }`}
                >
                  Choose Plan
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[2.2rem] bg-[linear-gradient(110deg,#6d28d9,#9333ea_45%,#111827)] px-8 py-14 text-center text-white shadow-[0_26px_90px_rgba(91,33,182,0.35)] md:px-12">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-200">Ready to transform your workflow?</p>
              <h2 className="mt-4 font-outfit text-4xl font-extrabold md:text-5xl">Launch your next project with premium-ready digital tools.</h2>
              <p className="mt-5 text-base leading-8 text-white/80">
                Save time, improve quality, and keep your creative momentum moving with expertly prepared digital products.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="btn h-12 rounded-full border-none bg-white px-8 text-violet-700 shadow-none hover:bg-violet-50"
                  onClick={() => setActiveView('products')}
                >
                  Shop Now
                </a>
                <a href="#support" className="btn h-12 rounded-full border border-white/25 bg-white/10 px-8 text-white shadow-none hover:bg-white/20">
                  Talk to Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="support" className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10">
          <div>
            <a href="#home" className="font-outfit text-2xl font-extrabold">
              Digi<span className="text-violet-400">Tools</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Premium digital resources for creators, marketers, and online businesses who want faster execution and better results.
            </p>
          </div>

          <div>
            <h3 className="font-outfit text-lg font-bold">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#steps" className="hover:text-white">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-outfit text-lg font-bold">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#support" className="hover:text-white">Support</a></li>
              <li><a href="#products" className="hover:text-white">Best Sellers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-outfit text-lg font-bold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>hello@digitools.dev</li>
              <li>+880 1712-345678</li>
              <li>Available every day, 9 AM to 10 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-slate-500 md:px-8 lg:px-10">
          Copyright 2026 DigiTools. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
