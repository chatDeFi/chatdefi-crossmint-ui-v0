"use client";
import AuthButton from "@/components/AuthButton";
import WalletComponent from "@/components/WalletComponent";

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 p-8">
                <h1 className="text-xl font-bold mb-4">Your Wallet App</h1>
                <AuthButton />
                <WalletComponent />
            </div>
        </div>
    );
}