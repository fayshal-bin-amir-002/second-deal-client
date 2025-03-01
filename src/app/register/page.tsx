import { RegisterForm } from "@/components/modules/register/RegisterForm";
import Container from "@/components/shared/Container";

const RegisterPage = () => {
  return (
    <Container>
      <div className="flex min-h-svh flex-col items-center justify-center md:p-10 bg-white">
        <div className="w-full max-w-sm md:max-w-3xl">
          <RegisterForm />
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
