import type { Metadata } from "next";
import AdminGalleryManager from "./AdminGalleryManager";

export const metadata: Metadata = { title: "Galeria | Dashboard No Ritmo", robots: { index: false, follow: false } };
export default function AdminGalleryPage() { return <div className="admin-page"><AdminGalleryManager /></div>; }
