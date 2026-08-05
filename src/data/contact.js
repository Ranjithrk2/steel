import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

export const companyContact = {
  companyName: "Godavari Iron & Steel",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsapp: "+91 98765 43210",
  whatsappHref: "919876543210",
  email: "info@godavariironsteel.com",
  address:
    "Plot 14, Industrial Growth Centre, Rajahmundry, Andhra Pradesh, India",
  hours: "Monday – Saturday, 9:00 AM – 6:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Rajahmundry%2C%20Andhra%20Pradesh&output=embed",
};

export const contactCards = [
  {
    icon: Phone,
    title: "Call Our Team",
    description:
      "Speak directly with our sales and project-support team.",
    value: companyContact.phone,
    href: `tel:${companyContact.phoneHref}`,
  },
  {
    icon: Mail,
    title: "Send an Email",
    description:
      "Share your requirement, specifications and delivery details.",
    value: companyContact.email,
    href: `mailto:${companyContact.email}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description:
      "Connect with our team for quick project and product enquiries.",
    value: companyContact.whatsapp,
    href: `https://wa.me/${companyContact.whatsappHref}`,
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    description:
      "Meet our team and discuss your steel supply requirements.",
    value: companyContact.address,
    href: "#contact-map",
  },
];

export const enquiryTypes = [
  "Product Enquiry",
  "Request a Quote",
  "Project Supply",
  "Dealer / Distributor Enquiry",
  "Technical Support",
  "General Enquiry",
];

export const contactHighlights = [
  {
    icon: Send,
    title: "Fast Response",
    description:
      "Our team reviews enquiries and responds with relevant next steps.",
  },
  {
    icon: Clock3,
    title: "Working-Hour Support",
    description:
      "Support is available from Monday to Saturday during business hours.",
  },
  {
    icon: MessageCircle,
    title: "Multiple Contact Options",
    description:
      "Reach us by phone, WhatsApp, email or through the enquiry form.",
  },
];
