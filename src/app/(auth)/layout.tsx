interface AuthLayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: AuthLayoutProps) => {
  return <div className="flex justify-center items-center min-h-screen">{children}</div>;
};

export default Layout;