import "./globals.css";
export const metadata = {
  title: "Fausto Martínez - DJ Crossover",
  description: "DJ ecuatoriano versátil para fiestas y eventos",
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body>{children}</body>
    </html>
  );
}
