import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest { return { name: "No Ritmo Academia de Dança", short_name: "No Ritmo", description: "Dança, conhecimento e experiências em Apucarana.", start_url: "/", display: "standalone", background_color: "#f6f7fb", theme_color: "#17479e", icons: [{ src: "/icon_nr.png", sizes: "1042x955", type: "image/png" }] }; }
