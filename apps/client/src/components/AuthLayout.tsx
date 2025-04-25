import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({
  children,
  authentication,
}: {
  children: React.ReactNode;
  authentication: boolean;
}) => {
  const auth = { token: false }; // replace with actual logic
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (authentication && !auth.token) {
      navigate("/login", { replace: true });
    } else if (!authentication && auth.token) {
      navigate("/", { replace: true });
    }
    setCheckingAuth(false);
  }, [authentication, auth.token, navigate]);
  if (checkingAuth)
    return (
      <div className="text-7xl flex justify-center animate-bounce">
        ...Laoding
      </div>
    );
  return <>{children}</>;
};

export default AuthLayout;
