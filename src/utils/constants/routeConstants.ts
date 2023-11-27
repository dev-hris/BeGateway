import {
  CompanyPath,
  ContactsPath,
  FeaturesPath,
  ResourcesPath,
} from "../types/pathTypes";

type Model = {
  link: string;
  additionalLinks: Record<string, string>;
  getLink: (v?: string | null) => string;
};

const model: Model = {
  link: "/features",
  additionalLinks: {
    integrations: "/integrations",
    paymentOrchestrationTools: "/payment-orchestration-tools",
    merchantManagementTools: "/merchant-management-tools",
    financialStatementAndBalanceManagement:
      "/financial-statement-and-balance-management",
    antiFraudTools: "/anti-fraud-tools",
    offerYourMerchants: "/offer-your-merchants",
    pricingOptions: "/pricing-options",
  },
  getLink: function (additionalLink: string | null = null) {
    if (!additionalLink) {
      return this.link;
    }
    return this.additionalLinks[additionalLink];
  },
};

const companyModel = {
  link: "/company",
  additionalLinks: {
    eComChangeAndTeam: "/eComChange-and-team",
    PCIDSScertificate: "/PCI-DSS-certificate",
  },
};

const resourcesModel = {
  link: "/resources",
  additionalLinks: {
    blog: "/blog",
    topQuestions: "/top-questions",
    useCases: "/use-cases",
    privacyPolicy: "/privacy-policy",
    sitemap: "/sitemap",
  },
};

const contactsModel = {
  link: "/contacts",
  additionalLinks: {
    addressAndContact: "/contacts",
    contactSalesForm: "/contacts",
    getDemoAccessToTheBackOfficeForm: "/contacts",
  },
};

export const PATH = {
  home: "/",
  notFound: "/notFound",
  features: (additionalLink: FeaturesPath | null = null) =>
    model.getLink(additionalLink),
  developers: "/developers",
  company: (additionalLink: CompanyPath | null = null) =>
    model.getLink.apply(companyModel, [additionalLink]),
  resources: (additionalLink: ResourcesPath | null = null) =>
    model.getLink.apply(resourcesModel, [additionalLink]),
  contacts: (additionalLink: ContactsPath | null = null) =>
    model.getLink.apply(contactsModel, [additionalLink]),
  sitemap: "/sitemap",
  reliabilitySafety: "/reliabilitySafety",
};
