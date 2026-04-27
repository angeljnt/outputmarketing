import ServicePageTemplate from "@/components/ServicePageTemplate";
import { serviceContent } from "@/content/siteContent";

const socialService = serviceContent.find((service) => service.slug === "social-linkedin-execution");

if (!socialService) {
  throw new Error("Social and LinkedIn Execution service data is missing.");
}

const ServiceFounderLinkedIn = () => <ServicePageTemplate service={socialService} />;

export default ServiceFounderLinkedIn;
