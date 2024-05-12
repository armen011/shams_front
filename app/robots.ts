import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  host: '',
  rules: [
    {
      userAgent: '*',
    },
  ],
});

export default robots;
