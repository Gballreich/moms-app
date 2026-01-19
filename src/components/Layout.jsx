function Layout({ header, main, footer }) {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="h-10 border border-black">
        {header}
      </div>

      {/* Main: ONLY scroll area */}
      <div className="flex-1 w-full overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory">
        {main}
      </div>

      {/* Footer */}
      <div className="h-15 border border-black flex items-center justify-end">
        {footer}
      </div>
    </div>
  );
}

export default Layout;
