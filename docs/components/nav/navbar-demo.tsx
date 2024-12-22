"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { MoonIcon } from "@radix-ui/react-icons";


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newOpacity = Math.max(1 - scrollY / 300, 0); // Decrease opacity based on scroll
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      style={{ opacity }} // Apply dynamic opacity
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Projects">
          <h3 className="font-bold">Web Applications</h3>
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Onyx"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="A web app for escorts booking"
            />
            <ProductItem
              title="Arsenal UI"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="A UI library for building web apps"
            />
            <ProductItem
              title="Diepretty Music"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="A music streaming service for diepretty music"
            />
            <h3 className="font-bold">RaspberryPi</h3>
            <ProductItem
              title="HLW7"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="A RaspberryPi AI glasses that recognizes facial expressions"
            />
            <h3 className="font-bold">Mobile Apps</h3>
            <h3 className="font-bold">Business Solutions</h3>
            <ProductItem
              title="Onyx"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="A web app for escorts booking"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Certifications">
          {[
            { title: "Harvard University", items: [{ title: "CS50's Introduction to Python", description: "A web app for escorts booking" }] },
            { title: "Università della Svizzera Italiana", items: [{ title: "Computer Science/Informatics", description: "180 ECTS" }] },
            { title: "FreeCodeCamp", items: [{ title: "Responsive Web Design", description: "Project-based certification covering HTML, CSS, and accessibility, recognized by companies like Google and Microsoft." }] },
            { title: "edX", items: [
                { title: "React Developer Certification", description: "Certification focusing on building applications using React, endorsed by industry leaders." },
                { title: "Vue.js Certification", description: "Certification for developing applications with Vue.js, valued by tech companies for frontend development." },
                { title: "Angular Certification", description: "Certification for mastering Angular framework, sought after by employers in the tech industry." },
                { title: "Certified Responsive Web Design Specialist", description: "Certification validating skills in responsive web design, respected by major tech firms." }
              ] 
            },
            { title: "Version Control (Git)", items: [{ title: "GitHub/GitLab Certifications", description: "Certifications validating proficiency in version control systems, recognized by top tech companies." }] }
          ].map(({ title, items }) => (
            <div key={title}>
              <h3 className="font-bold">{title}</h3>
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                {items.map(({ title, description }) => (
                  <ProductItem
                    key={title}
                    title={title}
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description={description}
                  />
                ))}
              </div>
            </div>
          ))}
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Setup">
          <div className="flex flex-col space-y-4 text-sm">
            <h3 className="font-bold">Setup</h3>
            <div className="grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="MacBook Pro 2021"
                href="https://www.apple.com/macbook-pro/"
                src="https://www.apple.com/v/macbook-pro-14/e/images/meta/og__b8g1g3g1g3m2_og.png"
                description="Powerful laptop for development and design."
              />
              <ProductItem
                title="External Monitor"
                href="https://www.apple.com/shop/buy-mac/mac/27-inch-imac"
                src="https://www.apple.com/v/imac-27/e/images/meta/og__b8g1g3g1g3m2_og.png"
                description="Enhance your workspace with a larger display."
              />
              <ProductItem
                title="Keyboard"
                href="https://www.apple.com/shop/product/MK2A3LL/A/apple-magic-keyboard-with-touch-id-and-numeric-keypad-us-english"
                src="https://www.apple.com/v/keyboard/e/images/meta/og__b8g1g3g1g3m2_og.png"
                description="Comfortable keyboard for typing."
              />
              <ProductItem
                title="Mouse"
                href="https://www.apple.com/shop/product/MK2A3LL/A/apple-magic-mouse"
                src="https://www.apple.com/v/magic-mouse/e/images/meta/og__b8g1g3g1g3m2_og.png"
                description="Wireless mouse for easy navigation."
              />
            </div>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="flex flex-col space-y-4 text-sm">
            <h3 className="font-bold">Frameworks</h3>
            <HoveredLink href="/nextjs">Next.js</HoveredLink>
            <HoveredLink href="/react">React</HoveredLink>
            <HoveredLink href="/vue">Vue.js</HoveredLink>
            <HoveredLink href="/remix">Remix</HoveredLink>
            <h3 className="font-bold">Programming Languages</h3>
            <HoveredLink href="/python">Python</HoveredLink>
            <HoveredLink href="/javascript">JavaScript</HoveredLink>
            <HoveredLink href="/typescript">TypeScript</HoveredLink>
            <HoveredLink href="/html5">HTML5</HoveredLink>
            <h3 className="font-bold">Styling & Tools</h3>
            <HoveredLink href="/tailwindcss">Tailwind CSS</HoveredLink>
            <h3 className="font-bold">Testing and Deployment</h3>
            <HoveredLink href="/git">Git</HoveredLink>
            <HoveredLink href="/vercel">Vercel</HoveredLink>
            <h3 className="font-bold">Development Tools</h3>
            <HoveredLink href="/cursor-ai">Cursor AI</HoveredLink>
            <HoveredLink href="/visual-studio-code">Visual Studio Code</HoveredLink>
            <HoveredLink href="/v0-dev">V0.dev</HoveredLink>
            <HoveredLink href="/storybooks">Storybook</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Theme">
          <ThemeSwitcher />
        </MenuItem>
      </Menu>
    </div>
  );
}
