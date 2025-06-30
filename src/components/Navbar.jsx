// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Switch from '../DarkModeToggle';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <header 
//       className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-[hsla(240,5%,15%,0.8)] backdrop-blur"
//       style={{
//         '--tw-bg-opacity': '0.95',
//         backgroundColor: 'rgba(255, 255, 255, 0.95)'
//       }}
//     >
//       <div className="container flex h-14 items-center justify-between">
//         <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-emerald-500 transition-colors duration-300">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="h-6 w-6 text-emerald-500"
//           >
//             <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//             <circle cx="12" cy="10" r="3" />
//           </svg>
//           <span className="text-xl font-bold">Civix</span>
//         </button>
//         <nav className="hidden md:flex gap-6">
//           <a href="#features" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">
//             Features
//           </a>
//           <a href="#how-it-works" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">
//             How It Works
//           </a>
//           <a href="#testimonials" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">
//             Testimonials
//           </a>
//           <a href="#faqs" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">
//             FAQ
//           </a>
//         </nav>
//         <div className="flex items-center gap-4">
//           <Switch />
//           <button
//             onClick={() => navigate('/login')}
//             className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => navigate('/signup')}
//             className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-emerald-500 text-primary-foreground hover:bg-emerald-500/90 h-9 px-4 py-2"
//           >
//             Get Started
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Switch from '../DarkModeToggle';
import {
  SignedIn,
  SignedOut,
  UserButton,
  useClerk
} from '@clerk/clerk-react';

const Navbar = () => {
  const navigate = useNavigate();
  const { signOut } = useClerk();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-[hsla(240,5%,15%,0.8)] backdrop-blur"
    >
      <div className="container flex h-14 items-center justify-between">
        <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-emerald-500 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-emerald-500"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-xl font-bold">Civix</span>
        </button>

        <nav className="hidden md:flex gap-6">
          <a href="#features" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">
            How It Works
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">
            Testimonials
          </a>
          <a href="#faqs" className="text-sm font-medium hover:text-emerald-500 transition-colors duration-300">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Switch />

          {/* Show if not logged in */}
          <SignedOut>
            <button
              onClick={() => navigate('/login')}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border h-9 px-4 py-2 hover:bg-accent"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-emerald-500 text-white h-9 px-4 py-2 hover:bg-emerald-500/90"
            >
              Get Started
            </button>
          </SignedOut>

          {/* Show if logged in */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border h-9 px-4 py-2 hover:bg-accent"
            >
              Dashboard
            </button>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
