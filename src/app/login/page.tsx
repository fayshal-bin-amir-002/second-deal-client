import { LoginForm } from "@/components/modules/auth/login/LoginForm";
import Container from "@/components/shared/Container";

const LoginPage = () => {
  return (
    <Container>
      <div className="flex min-h-svh flex-col items-center justify-center md:p-10 bg-white">
        <div className="w-full max-w-sm md:max-w-3xl">
          <LoginForm />
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
