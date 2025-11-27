declare module "class-variance-authority" {
    // Tipado genérico para VariantProps
    export type VariantProps<T> = Record<string, any>;
  
    // Tipado básico para cva
    export function cva(
      base?: string,
      options?: {
        variants?: Record<string, Record<string, string>>;
        defaultVariants?: Record<string, string>;
        compoundVariants?: Array<Record<string, string>>;
      }
    ): (props?: Record<string, string>) => string;
  }
  