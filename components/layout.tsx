import { FooterSocial } from "./footer";
import { Nav } from "./nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  const navLinks = [
      {
        "link": "/about",
        "label": "Features"
      },
      // {
      //   "link": "#1",
      //   "label": "Learn",
      //   "links": [
      //     {
      //       "link": "/docs",
      //       "label": "Documentation"
      //     },
      //     {
      //       "link": "/resources",
      //       "label": "Resources"
      //     },
      //     {
      //       "link": "/community",
      //       "label": "Community"
      //     },
      //     {
      //       "link": "/blog",
      //       "label": "Blog"
      //     }
      //   ]
      // },
      {
        "link": "/about",
        "label": "About"
      },
      {
        "link": "/pricing",
        "label": "Pricing"
      }
    ]

  return (
    <>
      <Nav links={navLinks} />
      <main>{children}</main>
      <FooterSocial />
    </>
  )
}
