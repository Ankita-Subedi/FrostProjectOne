import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BhutanBtn from "@/components/atoms/BhutanBtn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function AuthCard() {
  return (
    <Card className="w-[359px] font-urbanist bg-white ">
      <CardHeader>
        <CardTitle>Log in to your NPPF Loan Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                type="name"
                placeholder="Enter your full name:"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">CID Number</Label>
              <Input
                id="cid"
                type="cid"
                placeholder="Enter your CID Number:"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-primary1"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col text-[14px] gap-2">
        <p className="text-sm text-center text-gray-600 pb-4">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-primary text-[14px] underline">
            Sign up
          </Link>
        </p>
        <Button type="submit" className="w-full bg-primary1">
          Login
        </Button>
        <p>OR</p>
        <BhutanBtn />
      </CardFooter>
    </Card>
  );
}
