import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-slate-200/50" />

      <div className="relative z-10">
        <LoginForm />
      </div>
    </div>
  );
}
