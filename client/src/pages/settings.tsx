import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Shield, Link as LinkIcon, Settings as SettingsIcon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [currency, setCurrency] = useState("NGN");

  const settingsOptions = [
    { id: "profile", icon: User, label: "Edit Profile", description: "Update your personal information" },
    { id: "linked", icon: LinkIcon, label: "Linked Accounts", description: "Manage connected bank accounts" },
    { id: "security", icon: Shield, label: "Security Accounts", description: "Password and authentication" },
    { id: "privacy", icon: Shield, label: "Security & Privacy", description: "Control your data and privacy" },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>

      {/* User Profile Card */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="" alt="Sarah Johnson" />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">SJ</AvatarFallback>
            </Avatar>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground" data-testid="text-user-name">Sarah Johnson</h2>
              <p className="text-sm text-muted-foreground" data-testid="text-user-email">sarah@email.com</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {settingsOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                className="w-full flex items-center gap-4 p-4 rounded-lg hover-elevate active-elevate-2 transition-all text-left"
                data-testid={`button-${option.id}`}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">{option.label}</p>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
                <svg className="w-5 h-5 text-muted-foreground flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            );
          })}
        </CardContent>
      </Card>

      {/* App Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">App Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="dark-mode" className="text-base font-medium">Dark Mode</Label>
              <p className="text-sm text-muted-foreground">Toggle dark mode theme</p>
            </div>
            <Switch
              id="dark-mode"
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              data-testid="toggle-dark-mode"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="currency" className="text-base font-medium">Currency</Label>
              <p className="text-sm text-muted-foreground">Select your preferred currency</p>
            </div>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="w-32" id="currency" data-testid="select-currency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NGN">Naira (₦)</SelectItem>
                <SelectItem value="USD">Dollar ($)</SelectItem>
                <SelectItem value="EUR">Euro (€)</SelectItem>
                <SelectItem value="GBP">Pound (£)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Logout Button */}
      <div className="flex justify-center pt-4">
        <Button 
          variant="destructive" 
          size="lg" 
          className="px-8"
          data-testid="button-logout"
        >
          Log Out
        </Button>
      </div>

      {/* Version Info */}
      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
        <span>Version 1.0</span>
        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
      </div>
    </div>
  );
}
