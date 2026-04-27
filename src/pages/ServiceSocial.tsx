import ServicePageTemplate from "@/components/ServicePageTemplate";
import { serviceContent } from "@/content/siteContent";

const seoService = serviceContent.find((service) => service.slug === "seo-content");

if (!seoService) {
  throw new Error("SEO content service data is missing.");
}

const ServiceSocial = () => <ServicePageTemplate service={seoService} />;

export default ServiceSocial;
