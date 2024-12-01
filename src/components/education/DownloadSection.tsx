'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import { useTranslation } from '@/lib/translate';
import { DocumentViewer } from '@/components/ui/document-viewer';

const downloads = [
  {
    id: 1,
    title: 'brochure',
    format: 'PDF',
    size: '2.5 MB',
    url: '/docs/Sell_Sheet_v06.pdf'
  },
  {
    id: 2,
    title: 'manual',
    format: 'PDF',
    size: '1.8 MB',
    url: '/docs/Sell_Sheet_v06.pdf'
  }
];

export function DownloadSection() {
  const { t } = useTranslation();
  const [selectedDoc, setSelectedDoc] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-brand-primary-800 text-center mb-8">
        {t('education.downloads.title')}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {downloads.map((download, index) => (
          <motion.div
            key={download.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-brand-primary-800 mb-2">
                    {t(`education.downloads.${download.title}.title`)}
                  </h3>
                  <p className="text-sm text-brand-neutral-500">
                    {download.format} • {download.size}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setSelectedDoc({
                      url: download.url,
                      title: t(`education.downloads.${download.title}.title`)
                    })}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = download.url;
                      link.download = t(`education.downloads.${download.title}.title`);
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedDoc && (
        <DocumentViewer
          isOpen={!!selectedDoc}
          onClose={() => setSelectedDoc(null)}
          documentUrl={selectedDoc.url}
          title={selectedDoc.title}
        />
      )}
    </section>
  );
} 