import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode;
};

function HomeLayout({ children }: Props) {
  return (
    <div className="relative">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
