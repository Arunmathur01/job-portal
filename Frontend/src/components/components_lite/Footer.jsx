import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold"><span className="text-primary">Job</span> Portal</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Find your next opportunity faster with curated jobs and simple applications.
            </p>
            <div className="mt-4 flex items-center gap-3 text-muted-foreground">
              <a href="https://github.com/Arunmathur01" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><FaGithub size={20} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><FaLinkedin size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><FaTwitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li><Link to="/Browse" className="hover:text-foreground">Browse Jobs</Link></li>
              <li><Link to="/Jobs" className="hover:text-foreground">Latest Openings</Link></li>
              <li><Link to="/Creator" className="hover:text-foreground">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li><Link to="/PrivacyPolicy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/TermsofService" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Stay updated</h4>
            <p className="mt-3 text-sm text-muted-foreground">Get weekly job highlights.</p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <button type="button" className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-6">
          <p className="text-sm opacity-90">© 2024 Job Portal. All rights reserved.</p>
          <p className="text-sm opacity-90">Built by <a href="https://github.com/Arunmathur01" className="underline hover:opacity-100" target="_blank" rel="noreferrer">Arun Mathur</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
