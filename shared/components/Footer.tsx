import Link from "next/link"

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}

export default function Footer() {
  const footerSections: FooterSection[] = [
    {
      title: "Get Help",
      links: [
        { label: "Order Status", href: "/order-status" },
        { label: "Delivery", href: "/delivery" },
        { label: "Returns", href: "/returns" },
        { label: "Payment Options", href: "/payment-options" },
        { label: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "About Nike",
      links: [
        { label: "News", href: "/news" },
        { label: "Careers", href: "/careers" },
        { label: "Investors", href: "/investors" },
        { label: "Sustainability", href: "/sustainability" }
      ]
    },
    {
      title: "Shop",
      links: [
        { label: "Men's Shoes", href: "/men/shoes" },
        { label: "Women's Shoes", href: "/women/shoes" },
        { label: "Kids' Shoes", href: "/kids/shoes" },
        { label: "Sale", href: "/sale" }
      ]
    }
  ]

  const socialLinks: SocialLink[] = [
    {
      name: "Twitter",
      href: "https://twitter.com/nike",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://facebook.com/nike",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z" />
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://youtube.com/nike",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com/nike",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    }
  ]

  return (
    <footer className="w-full bg-dark-900 text-light-100" role="contentinfo">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-body-medium font-body-medium text-light-100 mb-4 uppercase">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-body font-body text-light-400 hover:text-light-100 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-body-medium font-body-medium text-light-100 mb-4 uppercase">Stay Connected</h3>
              <p className="text-body font-body text-light-400 mb-4">
                Subscribe to our newsletter for exclusive offers and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-body font-body bg-light-100 text-dark-900 rounded focus:outline-none focus:ring-2 focus:ring-light-400"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-light-100 text-dark-900 text-body-medium font-body-medium rounded hover:bg-light-200 transition-colors duration-200"
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-caption font-caption text-light-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-light-400 hover:text-light-100 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 text-caption font-caption text-light-400">
              <Link href="/privacy" className="hover:text-light-100 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-light-400">|</span>
              <Link href="/terms" className="hover:text-light-100 transition-colors duration-200">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
