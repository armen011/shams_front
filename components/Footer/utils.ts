import { Call, Location, Message, Time } from '@/assets/icons';

export const contacts = [
  {
    icon: Message,
    labelKey: 'email',
    href: 'mailto:shamsdentclinic@gmail.com',
  },
  {
    icon: Call,
    labelKey: 'phone',
    href: 'tel:+37498255588',
  },
  {
    icon: Time,
    labelKey: 'working_ours',
  },
  {
    icon: Location,
    labelKey: 'address',
    href: 'https://goo.gl/maps/XBo6KcCLKRVjT3dw9',
  },
];

export const otherLinks = [
  {
    href: '/faq',
    labelKey: 'faq',
  },
  {
    href: '/privacy-policy',
    labelKey: 'privacy_and_policy',
  },
  {
    href: '/terms-conditions',
    labelKey: 'terms_and_conditions',
  },
];
