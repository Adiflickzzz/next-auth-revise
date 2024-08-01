import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-cyan-400 to-violet-500">
      <div className="space-y-4 text-center">
        <h1 className="font-semibold text-white text-6xl drop-shadow-md">
          Auth Verification
        </h1>
        <p className="text-white text-lg">Authentication service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
