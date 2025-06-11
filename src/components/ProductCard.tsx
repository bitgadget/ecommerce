"use client";

import Image from "next/image";
import { Bitcoin, Eye, ShoppingCart, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Product } from "@/data/products";
import React from "react";

interface ProductCardProps {
  product: Product;
  btcEur: number | null;
  onView: (product: Product) => void;
  onAdd: (product: Product) => void;
}

function ProductCardComponent({ product, btcEur, onView, onAdd }: ProductCardProps) {
  const priceInBtc = btcEur && product.priceEUR > 0 ? (product.priceEUR / btcEur).toFixed(5) : "--.-----";
  const imageUrl = product.image || "https://placehold.co/600x600.png?text=No+Image";

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg bg-[var(--card)] text-[var(--foreground)] rounded-[var(--radius)]">
      <CardHeader className="p-0">
        <div className="aspect-square w-full relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <CardTitle className="text-lg font-headline mb-1 line-clamp-2">{product.name}</CardTitle>
        <CardDescription className="text-sm text-[var(--muted)] mb-2 line-clamp-2">{product.description}</CardDescription>
        <div className="flex items-center text-[var(--primary)] font-semibold text-lg">
          <Euro className="h-5 w-5 mr-1" />
          {product.priceEUR.toFixed(2)} EUR
        </div>
        {btcEur !== null && (
          <div className="flex items-center text-muted-foreground font-medium text-sm mt-1">
            <Bitcoin className="h-4 w-4 mr-1" />
            {priceInBtc} BTC
          </div>
        )}
        <p className="text-xs text-muted-foreground mt-1">
          {product.stock > 0 ? `${product.stock} disponibili` : "Non disponibile"}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 grid grid-cols-2 gap-2">
        <Button variant="outline" onClick={() => onView(product)} className="w-full">
          <Eye className="mr-2 h-4 w-4" /> Vedi
        </Button>
        <Button
          onClick={() => onAdd(product)}
          disabled={product.stock === 0}
          className="w-full"
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Aggiungi
        </Button>
      </CardFooter>
    </Card>
  );
}

const ProductCard = React.memo(ProductCardComponent);
export default ProductCard;