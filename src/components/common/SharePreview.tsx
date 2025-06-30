import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ShareButtons } from "./ShareButtons";
import { ShareMetaTags } from "./ShareMetaTags";

export interface ShareItem {
  title: string;
  image: string;
  price: number;
  status?: number;
  attributes: string[];
}

interface SharePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  item: ShareItem | null;
  label?: string;
  currencySymbol?: string;
}

export const SharePreview = ({
  isOpen,
  onClose,
  item,
  label = "Share Item",
  currencySymbol = "AWG",
}: SharePreviewProps) => {
  if (!item) return null;

  return (
    <>
      <ShareMetaTags item={item} />
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{label}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <img
                src={`${import.meta.env.VITE_MEDIA_URL}/${item.image}`}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              {item.status === 0 && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Sold
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-dealership-navy">{item.title}</h3>
                <p className="text-2xl font-bold text-dealership-primary mt-2">
                  {currencySymbol} {Number(item.price).toLocaleString()}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.attributes.map((attr, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-sm rounded"
                  >
                    {attr}
                  </span>
                ))}
              </div>
              <div className="pt-4">
                <ShareButtons url={window.location.href} title={item.title} />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
