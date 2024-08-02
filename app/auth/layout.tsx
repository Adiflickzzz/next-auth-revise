const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-400 to-violet-500">
      {children}
    </div>
  );
};

export default AuthLayout;
