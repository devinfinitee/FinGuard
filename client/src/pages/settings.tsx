import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Shield, Link as LinkIcon, Settings as SettingsIcon, ChevronRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useFadeIn, useStaggerChildren } from "@/hooks/useGSAP";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [currency, setCurrency] = useState("NGN");

  const settingsOptions = [
    { id: "profile", icon: User, label: "Edit Profile", description: "Update your personal information" },
    { id: "linked", icon: LinkIcon, label: "Linked Accounts", description: "Manage connected bank accounts" },
    { id: "security", icon: Shield, label: "Security Accounts", description: "Password and authentication" },
    { id: "privacy", icon: Shield, label: "Security & Privacy", description: "Control your data and privacy" },
  ];

  const headerRef = useFadeIn(0.1);
  const profileRef = useFadeIn(0.3);
  const settingsRef = useStaggerChildren(0.5);
  const preferencesRef = useFadeIn(0.7);

  return (
    <div className="space-y-8 max-w-3xl mx-auto pb-8">
      {/* Header */}
      <div ref={headerRef} className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
          <SettingsIcon className="w-10 h-10 text-purple-600 dark:text-purple-400" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground text-lg">Manage your account preferences</p>
      </div>

      {/* User Profile Card */}
      <Card ref={profileRef} className="shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="pt-8 pb-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="w-24 h-24 border-4 border-purple-100 dark:border-purple-900/30">
              <AvatarImage src="" alt="Sarah Johnson" />
              <AvatarFallback className="bg-purple-600 text-white text-3xl">SJ</AvatarFallback>
            </Avatar>
            
            <div>
              <h2 className="text-2xl font-bold text-foreground" data-testid="text-user-name">Sarah Johnson</h2>
              <p className="text-muted-foreground" data-testid="text-user-email">sarah@email.com</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl">Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div ref={settingsRef} className="grid sm:grid-cols-2 gap-4">
            {settingsOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 hover:shadow-lg transition-all text-center border border-purple-100 dark:border-purple-900/30"
                  data-testid={`button-${option.id}`}
                >
                  <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{option.label}</p>
                    <p className="text-xs text-muted-foreground">{option.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* App Preferences */}
      <Card ref={preferencesRef} className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl">App Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 rounded-lg">
            <div className="space-y-0.5">
              <Label htmlFor="dark-mode" className="text-base font-semibold">Dark Mode</Label>
              <p className="text-sm text-muted-foreground">Toggle dark mode theme</p>
            </div>
            <Switch
              id="dark-mode"
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              data-testid="toggle-dark-mode"
              className="data-[state=checked]:bg-purple-600"
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 rounded-lg">
            <div className="space-y-0.5">
              <Label htmlFor="currency" className="text-base font-semibold">Naira (₦)</Label>
              <p className="text-sm text-muted-foreground">Select your preferred currency</p>
            </div>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="w-36" id="currency" data-testid="select-currency">
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
          className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-12 text-lg shadow-lg hover:shadow-xl transition-all"
          data-testid="button-logout"
        >
          Log Out
        </Button>
      </div>

      {/* Version Info */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <span>Version 1.0</span>
          <span>•</span>
          <a href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}
