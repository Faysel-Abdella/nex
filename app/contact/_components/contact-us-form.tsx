"use client";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface ContactData {
  fullName: string;
  companyName: string;
  country: string;
  teamSize?: string;
  email: string;
  whatsappNumber: string;
  purpose: string;
  currentSystem: string;
  preferedLanguage: string;
}

const initialData: ContactData = {
  fullName: "",
  companyName: "",
  country: "",
  teamSize: "",
  email: "",
  whatsappNumber: "",
  purpose: "",
  currentSystem: "",
  preferedLanguage: "",
};

const StyledAstrix = () => <span className="text-sky-400">*</span>;

interface ContactMeFormProps {
  className?: string;
}

// Data arrays (You can also move these to a constant file or translate options if needed)
const countries = [
  { name: "Saudi Arabia", value: "SA" },
  { name: "United Arab Emirates", value: "AE" },
  { name: "Kuwait", value: "KW" },
  { name: "Qatar", value: "QA" },
  { name: "Bahrain", value: "BH" },
  { name: "Oman", value: "OM" },
];

const teamSizes = [
  { name: "1-3", value: "1-3" },
  { name: "4-10", value: "4-10" },
  { name: "10-20", value: "10-20" },
  { name: "20+", value: "20+" },
];

const systems = [
  { name: "Salesforce", value: "salesforce" },
  { name: "HubSpot CRM", value: "hubspot" },
  { name: "Zoho CRM", value: "zoho" },
  { name: "Microsoft Dynamics 365", value: "dynamics365" },
  { name: "Pipedrive", value: "pipedrive" },
  { name: "Freshsales (Freshworks CRM)", value: "freshsales" },
  { name: "SugarCRM", value: "sugarcrm" },
  { name: "Insightly", value: "insightly" },
  { name: "Monday Sales CRM", value: "monday" },
  { name: "Close CRM", value: "close" },
  { name: "Copper CRM", value: "copper" },
  { name: "Nimble", value: "nimble" },
];

const languages = [
  { name: "English", value: "en" },
  { name: "Arabic", value: "ar" },
];

const ContactUsForm = ({ className }: ContactMeFormProps) => {
  const t = useTranslations("contactUs.form");
  const [formData, setFormData] = useState<ContactData>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendContactData = async (contactData: ContactData) => {
    setIsLoading(true);

    try {
      console.log(contactData);
      setFormData(initialData);
      toast.success(t("alerts.success"));
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        toast.error(t("alerts.errorTitle"), { description: err.message });
      } else {
        toast.error(t("alerts.errorTitle"), {
          description: t("alerts.generalError"),
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedData: ContactData = {
      ...formData,
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      country: formData.country.trim(),
      companyName: formData.companyName.trim(),
      whatsappNumber: formData.whatsappNumber.trim(),
      purpose: formData.purpose.trim(),
      currentSystem: formData.currentSystem.trim(),
      preferedLanguage: formData.preferedLanguage.trim(),
    };

    if (
      !trimmedData.fullName ||
      !trimmedData.email ||
      !trimmedData.country ||
      !trimmedData.companyName ||
      !trimmedData.purpose ||
      !trimmedData.currentSystem ||
      !trimmedData.preferedLanguage
    ) {
      console.error("Please fill all required fields");
      toast.error(t("alerts.validation"));
      return;
    }
    await sendContactData(trimmedData);
  };

  return (
    <form
      className={cn(
        "bg-card relative z-10 rounded-3xl p-8 w-full border h-fit overflow-hidden",
        className,
      )}
      onSubmit={handleSubmit}
    >
      <div className="flex justify-center items-center z-10">
        <p className="text-2xl ">{t("title")}</p>
      </div>

      <div className="absolute -top-1/2 z-0 w-1/2 h-80 left-1/4 bg-white/60 blur-[150px]" />
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="flex w-full flex-col gap-3">
          <label className="text-muted-foreground text-sm">
            {t("labels.fullName")} <StyledAstrix />
          </label>
          <Input
            className={cn("w-full ")}
            placeholder={t("placeholders.fullName")}
            value={formData.fullName}
            required
            name="fullName"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-muted-foreground text-sm">
            {t("labels.companyName")} <StyledAstrix />
          </label>
          <Input
            className={cn("w-full")}
            placeholder={t("placeholders.companyName")}
            value={formData.companyName}
            name="companyName"
            required
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-muted-foreground text-sm">
            {t("labels.country")} <StyledAstrix />
          </label>
          <Select
            value={formData.country}
            name="country"
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, country: value }))
            }
          >
            <SelectTrigger className="w-full ">
              <SelectValue placeholder={t("placeholders.country")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {countries.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-muted-foreground text-sm">
            {t("labels.teamSize")}
          </label>
          <Select
            value={formData.teamSize}
            name="teamSize"
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, teamSize: value }))
            }
          >
            <SelectTrigger className="w-full ">
              <SelectValue placeholder={t("placeholders.teamSize")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {teamSizes.map((teamSize) => (
                  <SelectItem key={teamSize.value} value={teamSize.value}>
                    {teamSize.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-muted-foreground text-sm">
            {t("labels.email")} <StyledAstrix />
          </label>
          <Input
            className={cn("w-full")}
            placeholder={t("placeholders.email")}
            value={formData.email}
            name="email"
            required
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-muted-foreground text-sm flex-nowrap flex">
            {t("labels.whatsapp")} <StyledAstrix />
          </label>
          <Input
            className={cn("w-full")}
            placeholder={t("placeholders.whatsapp")}
            value={formData.whatsappNumber}
            name="whatsappNumber"
            required
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col md:col-span-2 gap-3">
          <label className="text-muted-foreground text-sm">
            {t("labels.purpose")} <StyledAstrix />
          </label>
          <Textarea
            className={cn("w-full", "h-20")}
            placeholder={t("placeholders.purpose")}
            value={formData.purpose}
            required
            name="purpose"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-muted-foreground text-sm">
            {t("labels.system")} <StyledAstrix />
          </label>
          <Select
            value={formData.currentSystem}
            name="currentSystem"
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, currentSystem: value }))
            }
          >
            <SelectTrigger className="w-full ">
              <SelectValue placeholder={t("placeholders.system")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {systems.map((system) => (
                  <SelectItem
                    key={system.value}
                    value={system.value}
                    className="text-muted-foreground"
                  >
                    {system.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-muted-foreground text-sm">
            {t("labels.language")} <StyledAstrix />
          </label>
          <Select
            value={formData.preferedLanguage}
            name="preferedLanguage"
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, preferedLanguage: value }))
            }
          >
            <SelectTrigger className="w-full ">
              <SelectValue placeholder={t("placeholders.language")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {languages.map((language) => (
                  <SelectItem key={language.value} value={language.value}>
                    {language.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        className="mt-8 w-full h-12.5 rounded-md"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <Loader className="animate-spin" /> : t("submit")}
      </Button>
    </form>
  );
};

export default ContactUsForm;
