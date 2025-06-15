import Image from "next/image";
import { Bitcoin, Eye, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Product } from "@/data/products";
import React from "react";

interface ProductCardProps {
  product: Product;
  btcEur: number | null;
  onView: (product: Product) => void;
}

function ProductCardComponent({ product, btcEur, onView }: ProductCardProps) {
  const priceInBtc = btcEur && product.priceEUR > 0 ? (product.priceEUR / btcEur).toFixed(5) : "--.-----";
  const imageUrl = product.images?.[0] || "https://placehold.co/600x600.png?text=No+Image";

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg bg-[var(--card)] text-[var(--foreground)] rounded-[var(--radius)]">
      <CardHeader className="p-0">
        <div className="aspect-square w-full relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-300 hover:scale-105 bg-white"
            sizes="(max-width: 600px) 90vw, 33vw"
            priority={false}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <CardTitle className="text-lg font-headline mb-1 line-clamp-2">{product.name}</CardTitle>
        <CardDescription className="text-sm text-[var(--muted)] mb-2 line-clamp-2">{product.description}</CardDescription>
        <div className="flex items-center text-[var(--primary)] font-semibold text-lg">
          <Euro className="h-5 w-5 mr-1" />
          {typeof product.priceEUR === "number" ? product.priceEUR.toFixed(2) : "--.--"} EUR
        </div>
        {btcEur !== null && (
          <div className="flex items-center text-muted-foreground font-medium text-sm mt-1">
            <Bitcoin className="h-4 w-4 mr-1" />
            {priceInBtc} BTC
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 grid grid-cols-2 gap-2">
        <Button variant="outline" onClick={() => onView(product)} className="w-full">
          <Eye className="mr-2 h-4 w-4" /> Vedi
        </Button>
        <Button
          variant="default"
          className="w-full"
          onClick={() =>
            window.open(
              "https://t.me/bitgadgetstore",
              "_blank"
            )
          }
        >
          CONTACT
        </Button>
      </CardFooter>
    </Card>
  );
}

const ProductCard = React.memo(ProductCardComponent);
export default ProductCard;

// Grid container for ProductCard components
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2">
  {/* ProductCard */}
</div>

