export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}

export function cls(...args: (string | undefined | null | false)[]): string {
  return args.filter(Boolean).join(' ');
}
