import { IHeaderLink } from "../types/headerTypes";
import { PATH } from "./routeConstants";

export const headersNavigation: IHeaderLink[] = [
  {
    id: "features",
    name: "Features",
    link: PATH.features(),
    isGetContent: true,
    additionalMenu: [
      {
        id: "features-integrations",
        name: "Integrations",
        link: PATH.features("integrations"),
      },
      {
        id: "features-payment-orchestration-tools",
        name: "Payment orchestration tools",
        link: PATH.features("paymentOrchestrationTools"),
      },
      {
        id: "features-merchant-management-tools",
        name: "Merchant management tools",
        link: PATH.features("merchantManagementTools"),
      },
      {
        id: "features-financial-statement-and-balance-management",
        name: "Financial Statement & Balance Management",
        link: PATH.features("financialStatementAndBalanceManagement"),
      },
      {
        id: "features-anti-fraud-tools",
        name: "Anti-fraud Tools",
        link: PATH.features("antiFraudTools"),
      },
      {
        id: "features-offer-your-merchants",
        name: "Offer your merchants",
        link: PATH.features("offerYourMerchants"),
      },
      {
        id: "features-pricing-options",
        name: "Pricing options",
        link: PATH.features("pricingOptions"),
      },
    ],
    additionalFooterMenu: null,
  },
  {
    id: "developers",
    name: "Developers",
    isGetContent: true,
    link: PATH.developers,
    additionalMenu: null,
    additionalFooterMenu: null,
  },
  {
    id: "company",
    name: "Company",
    isGetContent: true,
    link: PATH.company(),
    additionalMenu: [
      {
        id: "company-eComChange-and-team",
        name: "eComChange & Team",
        link: PATH.company("eComChangeAndTeam"),
      },
      {
        id: "company-PCI-DSS-certificate",
        name: "PCI DSS certificate",
        link: PATH.company("PCIDSScertificate"),
      },
    ],
    additionalFooterMenu: null,
  },
  {
    id: "resources",
    name: "Resources",
    isGetContent: true,
    link: PATH.resources(),
    additionalMenu: [
      {
        id: "resources-blog",
        name: "Blog",
        link: PATH.resources("blog"),
      },
      {
        id: "resources-top-questions",
        name: "Top Questions",
        link: PATH.resources("topQuestions"),
      },
      {
        id: "resources-use-cases",
        name: "Use cases",
        link: PATH.resources("useCases"),
      },
    ],
    additionalFooterMenu: [
      {
        id: "privacy-policy",
        name: "Privacy Policy",
        link: PATH.resources("privacyPolicy"),
      },
      {
        id: "sitemap",
        name: "Sitemap",
        link: PATH.resources("sitemap"),
      },
    ],
  },
  {
    id: "contacts",
    name: "Contacts",
    isGetContent: false,
    link: PATH.contacts(),
    additionalMenu: null,
    additionalFooterMenu: [
      {
        id: "addressAndContact",
        name: "Address & Contact",
        link: PATH.contacts("addressAndContact"),
      },
      {
        id: "contactSalesForm",
        name: "Contact Sales form",
        link: PATH.contacts("contactSalesForm"),
      },
      {
        id: "getDemoAccessToTheBackOfficeForm",
        name: "Get Demo access to the Back Office form",
        link: PATH.contacts("getDemoAccessToTheBackOfficeForm"),
      },
    ],
  },
];
