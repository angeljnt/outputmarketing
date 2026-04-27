import ServicePageTemplate from "@/components/ServicePageTemplate";
import { serviceContent } from "@/content/siteContent";

const launchService = serviceContent.find(
  (service) => service.slug === "product-launch-marketing",
);

if (!launchService) {
  throw new Error("Product and launch marketing content is missing.");
}

const ServiceLaunch = () => <ServicePageTemplate service={launchService} />;

export default ServiceLaunch;
