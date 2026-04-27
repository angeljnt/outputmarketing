import ServicePageTemplate from "@/components/ServicePageTemplate";
import { serviceContent } from "@/content/siteContent";

const contentService = serviceContent.find((service) => service.slug === "content-marketing");

if (!contentService) {
  throw new Error("Content Marketing service data is missing.");
}

const ServiceContent = () => <ServicePageTemplate service={contentService} />;

export default ServiceContent;
