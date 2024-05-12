import { DoctorType } from '@/types/global';
import { configs } from '@/utils/configs';

export const getStaff = async (locale: 'en' | 'ru' | 'hy') => {
  try {
    const data = await fetch(`${configs.backendUrl}/doctors?populate=avatar`, {
      method: 'GET',
    });
    const res = (await data.json()) as { data: DoctorType[] };

    const doctors = res.data.map(
      ({ id, attributes: { avatar, ...otherProps } }) => ({
        id,
        name: otherProps[`fullname_${locale}`] || undefined,
        description: otherProps[`description_${locale}`] || undefined,
        img: {
          src: avatar?.data?.attributes?.url || undefined,
          width: avatar?.data?.attributes?.width || 400,
          height: avatar?.data?.attributes?.height || 450,
          alt: avatar?.data?.attributes?.alternativeText || '',
        },
      })
    );

    return { doctors };
  } catch (err) {
    return undefined;
  }
};
