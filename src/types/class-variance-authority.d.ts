declare module "class-variance-authority" {
  // Valores permitidos en clases
  type ClassValue =
    | string
    | number
    | boolean
    | null
    | undefined
    | { [key: string]: boolean }
    | ClassValue[];

  // Variantes: objeto de claves → valores string (clases)
  export type VariantsConfig = Record<string, Record<string, string>>;

  // Opciones de cva con tipos derivados de VariantsConfig
  export interface CVAConfig<V extends VariantsConfig> {
    variants?: V;
    compoundVariants?: Array<
      Partial<{ [K in keyof V]: keyof V[K] }> & { class?: string }
    >;
    defaultVariants?: { [K in keyof V]?: keyof V[K] };
  }

  // Función principal cva (solo clases)
  export function cva<V extends VariantsConfig>(
    base?: ClassValue,
    config?: CVAConfig<V>
  ): (options?: { [K in keyof V]?: keyof V[K] }) => string;

  // VariantProps con inferencia, sin any
  export type VariantProps<
    Fn extends (options?: unknown) => string
  > = Fn extends (options?: infer O) => string ? O : never;
}
