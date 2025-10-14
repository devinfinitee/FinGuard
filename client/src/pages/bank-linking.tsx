import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BankCard } from "@/components/bank-card";
import { Shield, Lock } from "lucide-react";
import { NIGERIAN_BANKS } from "@/types/schema";
import { useToast } from "@/hooks/use-toast";
import { useFadeIn, useStaggerChildren } from "@/hooks/useGSAP";

export default function BankLinking() {
  const [linkedBanks, setLinkedBanks] = useState<string[]>([]);
  const { toast } = useToast();

  const handleLinkBank = (bankId: string, bankName: string) => {
    if (linkedBanks.includes(bankId)) {
      setLinkedBanks(linkedBanks.filter(id => id !== bankId));
      toast({
        title: "Bank Unlinked",
        description: `${bankName} has been unlinked from your account.`,
      });
    } else {
      setLinkedBanks([...linkedBanks, bankId]);
      toast({
        title: "Bank Linked",
        description: `${bankName} has been successfully linked to your account.`,
      });
    }
  };

  const headerRef = useFadeIn(0.1);
  const contentRef = useFadeIn(0.3);
  const banksRef = useStaggerChildren(0.5);

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-8">
      {/* Header */}
      <div ref={headerRef} className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
          <Lock className="w-10 h-10 text-purple-600 dark:text-purple-400" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Connect Your Bank</h1>
        <p className="text-muted-foreground text-lg">Track smart. Spend wise. Live free.</p>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Side - Description */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 border-purple-200 dark:border-purple-800">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Link Your Accounts</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To get started to control to trae enrte to use tar bring a tie loo and trans trame tamratest o plast your co tritim & secure API Meero and Okra.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Bank-grade security</p>
                    <p className="text-sm text-muted-foreground">256-bit SSL encryption</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lock className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Privacy first</p>
                    <p className="text-sm text-muted-foreground">We never share your data</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Bank Selection */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-foreground mb-4 text-lg">Select Your Banks</h3>
            <div ref={banksRef} className="space-y-3">
              {NIGERIAN_BANKS.map((bank) => (
                <BankCard
                  key={bank.id}
                  name={bank.name}
                  icon={bank.icon}
                  color={bank.color}
                  isLinked={linkedBanks.includes(bank.id)}
                  onLink={() => handleLinkBank(bank.id, bank.name)}
                />
              ))}
            </div>

            <div className="mt-6">
              <Button 
                size="lg" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 text-lg shadow-lg hover:shadow-xl transition-all" 
                data-testid="button-connect-bank"
                disabled={linkedBanks.length === 0}
              >
                Connect Bank Account{linkedBanks.length > 1 ? "s" : ""}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Footer */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
          <Shield className="w-4 h-4" />
          <span>Your data is encrypted and kept private</span>
        </div>
        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <span>Version 1.0</span>
          <span>•</span>
          <a href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
