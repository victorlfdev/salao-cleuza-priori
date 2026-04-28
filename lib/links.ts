import { landingData } from "@/data/landing";

const DEFAULT_WHATSAPP_MESSAGE =
  "Oi, vim pelo site e gostaria de marcar um hor\u00e1rio";

function sanitizeDigits(value: string) {
  return value.replace(/\D/g, "");
}

function withBrazilCode(value: string) {
  if (!value) {
    return "";
  }

  return value.startsWith("55") ? value : `55${value}`;
}

export function getPhoneLink() {
  const phone = withBrazilCode(sanitizeDigits(landingData.business.phone));
  return phone ? `tel:+${phone}` : "#";
}

export function getInstagramLink() {
  return landingData.business.instagram || "#";
}

export function getMapsLink() {
  return landingData.business.maps || landingData.location.mapsUrl || "#";
}

export function getLinktreeLink() {
  return landingData.business.linktree || getPhoneLink();
}

export function getPrimaryContactLink() {
  const whatsapp = withBrazilCode(sanitizeDigits(landingData.business.whatsapp));

  if (whatsapp) {
    const message = encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE);
    return `https://wa.me/${whatsapp}?text=${message}`;
  }

  if (landingData.business.linktree) {
    return landingData.business.linktree;
  }

  return getPhoneLink();
}
