import { FcGoogle } from "react-icons/fc"

import { signIn } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { AuthLogos } from "@/components/AuthLogos"

export default async function SignIn() {
  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold">Welcome to PrepMedics</h1>
      <AuthLogos />
      <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
        <Button type="submit" size="xl" variant="outline">
          <FcGoogle size={"25px"} />
          <span className="text-xl font-semibold">Sign in with Google</span>
        </Button>
      </form>
    </div>
  )
}
