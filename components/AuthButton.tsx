"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@crossmint/client-sdk-react-ui";

export default function AuthButton() {
    const { login, logout, jwt } = useAuth();

    return !jwt ? (
        <Button onClick={login}>Login</Button>
    ) : (
        <Button onClick={logout}>Logout</Button>
    );
}