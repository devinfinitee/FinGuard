import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BankCard } from "@/components/bank-card";
import { NIGERIAN_BANKS } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

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

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Connect Your Bank</h1>
        <p className="text-muted-foreground">Track smart. Spend wise. Live free.</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <p className="text-foreground mb-4">
                To get started to control to trae enrte to use tar bring a tie loo and trans 
                trame tamratest o plast your co tritim & secure API Meero and Okra.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Link Your Accounts</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {NIGERIAN_BANKS.map((bank) => (
                  <BankCard
                    key={bank.id}
                    name={bank.name}
                    icon={bank.icon}
                    isLinked={linkedBanks.includes(bank.id)}
                    onLink={() => handleLinkBank(bank.id, bank.name)}
                  />
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full" 
                data-testid="button-connect-bank"
                disabled={linkedBanks.length === 0}
              >
                Connect Bank Account{linkedBanks.length > 1 ? "s" : ""}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Note */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>Your data is encrypted and kept private</span>
      </div>
    </div>
  );
}
