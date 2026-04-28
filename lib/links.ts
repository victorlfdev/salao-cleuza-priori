import { landingData } from "@/data/landing";

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
    return `https://wa.me/${whatsapp}`;
  }

  if (landingData.business.linktree) {
    return landingData.business.linktree;
  }

  return getPhoneLink();
}
