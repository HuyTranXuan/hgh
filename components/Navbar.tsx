'use client';

import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { Language } from '@/types/language';
import { useTranslation } from 'react-i18next';
import LanguageChanger from './LanguageChanger';

const Navbar: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchText, setSearchText] = useState<string>('');
  const [language, setLanguage] = useState<Language>();
  const { t } = useTranslation();

  return (
    <nav className="bg-yellow-500 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link href="/">
          <div className="text-2xl font-bold text-white">HGH</div>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-grow items-center bg-white rounded-md overflow-hidden">
          <input
            type="text"
            className="p-2 flex-grow outline-none"
            placeholder="Search HgH"
            value={searchText}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setSearchText(
                (event.target as HTMLInputElement).value.toString()
              );
            }}
          />
          <button
            className="bg-yellow-600 p-2"
            onClick={() => console.log(searchText)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {/* Language Dropdown */}
        <LanguageChanger />
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center space-x-1 text-white">
            <span>{t('Language')}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </MenuButton>
          <MenuItems className="absolute right-0 w-32 mt-2 bg-white rounded-md shadow-lg">
            <MenuItem>
              {({ active }) => (
                <a
                  className={`${active && 'bg-gray-100'} block px-4 py-2`}
                  href="#"
                >
                  {t('language.' + Language.English)}
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  className={`${active && 'bg-gray-100'} block px-4 py-2`}
                  href="#"
                >
                  {t('language.' + Language.Finnish)}
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  className={`${active && 'bg-gray-100'} block px-4 py-2`}
                  href="#"
                >
                  {t('language.' + Language.Vietnamese)}
                </a>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>

        {/* Sign In Button */}
        <Link href="/signin">
          <div className="text-white">Sign In</div>
        </Link>

        {/* Cart */}
        <Link href="/cart">
          <div className="relative flex items-center text-white">
            <ShoppingCartIcon className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

/**

        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center space-x-1 text-white">
            <span>Language</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Menu.Button>
          <MenuItems className="absolute right-0 w-32 mt-2 bg-white rounded-md shadow-lg">
            <MenuItem>
              {({ active }) => (
                <a
                  className={`${active && 'bg-gray-100'} block px-4 py-2`}
                  href="#"
                >
                  English
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  className={`${active && 'bg-gray-100'} block px-4 py-2`}
                  href="#"
                >
                  Spanish
                </a>
              )}
            </MenuItem>
            </MenuItems>
            </Menu>


 */
