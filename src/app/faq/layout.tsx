import React from 'react';

export const metadata = {
  title: 'FAQ | Globibat',
  description: 'Trouvez des réponses à vos questions sur nos services de construction, rénovation, électricité, serrurerie, déménagement et nettoyage en Suisse romande.',
  keywords: 'FAQ Globibat, questions fréquentes construction, rénovation Suisse romande, électricité questions, serrurerie FAQ, déménagement questions, nettoyage FAQ',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 