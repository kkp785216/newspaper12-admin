const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-3/4 flex-initial [&>*:not(:last-child)]:mb-5">
      {children}
    </main>
  );
};

const Aside = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="w-1/4 flex-initial [&>*:not(:last-child)]:mb-5">
      {children}
    </aside>
  );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className="flex space-x-5">{children}</section>;
};

export { Wrapper, Main, Aside };
