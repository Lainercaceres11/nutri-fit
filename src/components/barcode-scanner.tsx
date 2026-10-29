import { Scanner } from "@yudiel/react-qr-scanner";
import { X } from "lucide-react";

type BarcodeScannerProps = {
  onScan: (barcode: string) => void;
  onClose: () => void;
};

export default function BarcodeScanner({
  onScan,
  onClose,
}: BarcodeScannerProps) {
  const handleScan = (detectedCodes: { rawValue: string }[]) => {
    if (detectedCodes.length > 0) {
      const barcode = detectedCodes[0].rawValue;
      onScan(barcode);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-2">
          <Scanner
            onScan={handleScan}
            onError={(error) => {
              if (error?.kind === "in-use") {
                alert("La cámara está siendo usada por otra aplicación.");
              } else {
                console.error("Error de cámara:", error);
              }
            }}
            formats={["ean_13", "ean_8", "upc_a", "upc_e"]}
            constraints={{
              facingMode: "environment",
              width: { ideal: 1280, min: 640, max: 1920 },
              height: { ideal: 720, min: 480, max: 1080 },
            }}
            components={{ torch: true }}
          />
        </div>
        <p className="text-center text-sm text-gray-500 pb-3">
          Apunta la cámara al código de barras
        </p>
      </div>
    </div>
  );
}
