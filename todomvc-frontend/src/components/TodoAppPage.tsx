import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Info from './Info';

export type TodoAppPageProps = Readonly<{}>;

function TodoAppPage({}: TodoAppPageProps) {
  return (
    <>
      <section className="todoapp">
        <Header />
        {/* This section should be hidden by default and shown when there are todos --> */}
        <Main />
        {/* This footer should hidden by default and shown when there are todos --> */}
        <Footer />
      </section>
      <Info />
    </>
  );
}

export default TodoAppPage;
